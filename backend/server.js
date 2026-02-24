const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const TWILIO_ACCOUNT_SID   = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN    = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_WHATSAPP_FROM = process.env.TWILIO_WHATSAPP_FROM || 'whatsapp:+14155238886';

const DATA_DIR = path.join(__dirname, 'data');
const FILES = {
  votes:      path.join(DATA_DIR, 'votes.json'),
  fraud:      path.join(DATA_DIR, 'fraud.json'),
  logs:       path.join(DATA_DIR, 'logs.json'),
  faces:      path.join(DATA_DIR, 'faces.json'),
  settings:   path.join(DATA_DIR, 'settings.json'),
  disabled:   path.join(DATA_DIR, 'disabled.json'),
  candidates: path.join(DATA_DIR, 'candidates.json'),
};

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
Object.values(FILES).forEach(f => { if (!fs.existsSync(f)) fs.writeFileSync(f, '[]'); });

const otpStore = {};

function readJSON(file) { try { return JSON.parse(fs.readFileSync(file,'utf8')); } catch { return []; } }
function writeJSON(file, data) { fs.writeFileSync(file, JSON.stringify(data, null, 2)); }
function generateOTP() { return String(Math.floor(100000 + Math.random() * 900000)); }
function normalizePhone(p) { return p.replace(/[\s\-().]/g,''); }

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.static(path.join(__dirname, '../frontend')));

// ── OTP ──
app.post('/api/otp/send', async (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ error: 'Phone required' });
  const otp = generateOTP();
  const key = normalizePhone(phone);
  otpStore[key] = { otp, expiresAt: Date.now() + 5*60*1000 };

  if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN) {
    console.log(`[DEV] OTP for ${phone}: ${otp}`);
    return res.json({ success: true, dev: true, otp });
  }
  try {
    const twilio = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
    const to = key.startsWith('+') ? `whatsapp:${key}` : `whatsapp:+91${key}`;
    await twilio.messages.create({
      from: TWILIO_WHATSAPP_FROM, to,
      body: `CR Election 2025\n\nYour OTP is: *${otp}*\n\nValid for 5 minutes. Do not share.`
    });
    res.json({ success: true });
  } catch(e) {
    console.error('Twilio error:', e.message);
    res.status(500).json({ error: 'Failed to send OTP: ' + e.message });
  }
});

app.post('/api/otp/verify', (req, res) => {
  const { phone, otp } = req.body;
  if (!phone || !otp) return res.status(400).json({ error: 'Missing fields' });
  const key = normalizePhone(phone);
  const record = otpStore[key];
  if (!record) return res.status(400).json({ error: 'No OTP sent to this number' });
  if (Date.now() > record.expiresAt) { delete otpStore[key]; return res.status(400).json({ error: 'OTP expired' }); }
  if (record.otp !== String(otp)) return res.status(400).json({ error: 'Incorrect OTP' });
  delete otpStore[key];
  res.json({ success: true });
});

// ── VOTES ──
app.get('/api/votes', (req, res) => res.json(readJSON(FILES.votes)));

app.post('/api/votes', (req, res) => {
  const votes = readJSON(FILES.votes);
  const { phone, voteId, name, section, candidateId, candidateName, timestamp } = req.body;
  if (!phone || !candidateId) return res.status(400).json({ error: 'Missing fields' });
  if (votes.find(v => normalizePhone(v.phone) === normalizePhone(phone))) return res.status(409).json({ error: 'Already voted' });
  votes.push({ voteId, name, phone, section, candidateId, candidateName, timestamp });
  writeJSON(FILES.votes, votes);
  res.json({ success: true });
});

app.get('/api/votes/check/:phone', (req, res) => {
  const votes = readJSON(FILES.votes);
  const voted = votes.some(v => normalizePhone(v.phone) === normalizePhone(req.params.phone));
  res.json({ voted });
});

app.delete('/api/votes', (req, res) => { writeJSON(FILES.votes, []); res.json({ success: true }); });

// ── FRAUD ──
app.get('/api/fraud', (req, res) => res.json(readJSON(FILES.fraud)));
app.post('/api/fraud', (req, res) => { const f=readJSON(FILES.fraud); f.push(req.body); writeJSON(FILES.fraud,f); res.json({success:true}); });
app.delete('/api/fraud', (req, res) => { writeJSON(FILES.fraud,[]); res.json({success:true}); });

// ── LOGS ──
app.get('/api/logs', (req, res) => res.json(readJSON(FILES.logs)));
app.post('/api/logs', (req, res) => { const l=readJSON(FILES.logs); l.push(req.body); writeJSON(FILES.logs,l); res.json({success:true}); });
app.delete('/api/logs', (req, res) => { writeJSON(FILES.logs,[]); res.json({success:true}); });

// ── FACES ──
app.get('/api/faces', (req, res) => res.json(readJSON(FILES.faces)));
app.post('/api/faces', (req, res) => { const f=readJSON(FILES.faces); f.push(req.body); writeJSON(FILES.faces,f); res.json({success:true}); });
app.delete('/api/faces', (req, res) => { writeJSON(FILES.faces,[]); res.json({success:true}); });

// ── SETTINGS ──
const DEFAULT_SETTINGS = {
  electionState:'active', resultsLocked:true, manualReveal:false,
  faceDetection:true, sessionTimeout:true, privacyNotice:true,
  autoDeleteFaces:true, adminPass:'13d38d0', schedStart:'', schedEnd:''
};
app.get('/api/settings', (req, res) => {
  const raw=readJSON(FILES.settings);
  res.json(Array.isArray(raw)?DEFAULT_SETTINGS:Object.assign({},DEFAULT_SETTINGS,raw));
});
app.put('/api/settings', (req, res) => {
  const raw=readJSON(FILES.settings);
  const cur=Array.isArray(raw)?DEFAULT_SETTINGS:Object.assign({},DEFAULT_SETTINGS,raw);
  const updated=Object.assign(cur,req.body);
  writeJSON(FILES.settings,updated);
  res.json(updated);
});

// ── DISABLED ──
app.get('/api/disabled', (req, res) => res.json(readJSON(FILES.disabled)));
app.post('/api/disabled', (req, res) => {
  const { phone }=req.body; const d=readJSON(FILES.disabled);
  if(!d.includes(phone)){d.push(phone);writeJSON(FILES.disabled,d);}
  res.json({success:true});
});
app.delete('/api/disabled/:phone', (req, res) => {
  writeJSON(FILES.disabled, readJSON(FILES.disabled).filter(r=>r!==req.params.phone));
  res.json({success:true});
});

// ── CANDIDATES ──
app.get('/api/candidates', (req, res) => { const d=readJSON(FILES.candidates); res.json(Array.isArray(d)&&d.length===0?null:d); });
app.put('/api/candidates', (req, res) => { writeJSON(FILES.candidates,req.body); res.json({success:true}); });

// ── CATCH-ALL ──
app.get('*', (req, res) => res.sendFile(path.join(__dirname,'../frontend/index.html')));

app.listen(PORT, () => console.log(`CR Election running on port ${PORT}`));
