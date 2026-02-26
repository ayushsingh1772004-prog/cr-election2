const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

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

// ── Email OTP store (in-memory)
const emailOtpStore = {};

// ── Gmail transporter using App Password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ayushsingh1772004@gmail.com',
    pass: 'aaus fkku crzx lyoz'   // Gmail App Password
  }
});

function readJSON(file) { try { return JSON.parse(fs.readFileSync(file,'utf8')); } catch { return []; } }
function writeJSON(file, data) { fs.writeFileSync(file, JSON.stringify(data, null, 2)); }
function generateOTP() { return String(Math.floor(100000 + Math.random() * 900000)); }
function normalizePhone(p) { return String(p||'').replace(/[\s\-().+]/g,'').replace(/^91(\d{10})$/,'$1'); }

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.static(path.join(__dirname, '../frontend')));

// ══════════════════════════════════════════
//  EMAIL OTP
// ══════════════════════════════════════════
app.post('/api/otp/email', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email required' });
  const otp = generateOTP();
  emailOtpStore[email.toLowerCase()] = { otp, expiresAt: Date.now() + 10*60*1000 };
  try {
    await transporter.sendMail({
      from: '"CR Election 2025" <ayushsingh1772004@gmail.com>',
      to: email,
      subject: 'Your CR Election OTP',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:400px;margin:auto;padding:24px;background:#0a0a14;border-radius:12px;color:#fff;">
          <h2 style="color:#7c6bff;margin-bottom:8px;">CR Election 2025</h2>
          <p style="color:#aaa;">Your one-time password is:</p>
          <div style="font-size:2.5rem;font-weight:800;letter-spacing:0.3em;color:#fff;background:#1a1a2e;border-radius:8px;padding:16px;text-align:center;margin:16px 0;">${otp}</div>
          <p style="color:#aaa;font-size:0.85rem;">Valid for 10 minutes. Do not share this code with anyone.</p>
          <p style="color:#555;font-size:0.75rem;margin-top:16px;">If you didn't request this, ignore this email.</p>
        </div>`
    });
    res.json({ success: true });
  } catch(e) {
    console.error('Email OTP error:', e.message);
    res.status(500).json({ error: 'Failed to send email: ' + e.message });
  }
});

app.post('/api/otp/email/verify', (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) return res.status(400).json({ error: 'Missing fields' });
  const key = email.toLowerCase();
  const record = emailOtpStore[key];
  if (!record) return res.status(400).json({ error: 'No OTP sent to this email' });
  if (Date.now() > record.expiresAt) { delete emailOtpStore[key]; return res.status(400).json({ error: 'OTP expired — please resend' }); }
  if (record.otp !== String(otp).trim()) return res.status(400).json({ error: 'Incorrect OTP' });
  delete emailOtpStore[key];
  res.json({ success: true });
});

// ══════════════════════════════════════════
//  VOTES
// ══════════════════════════════════════════
app.get('/api/votes', (req, res) => res.json(readJSON(FILES.votes)));

app.post('/api/votes', (req, res) => {
  const votes = readJSON(FILES.votes);
  const { phone, email, voteId, name, section, candidateId, candidateName, timestamp } = req.body;
  if (!candidateId) return res.status(400).json({ error: 'Missing fields' });
  const ph = normalizePhone(phone||'');
  const em = (email||'').toLowerCase();
  // Check duplicate by phone OR email
  const dup = votes.find(v =>
    (ph && normalizePhone(v.phone||'') === ph) ||
    (em && v.email && v.email === em)
  );
  if (dup) return res.status(409).json({ error: 'Already voted' });
  votes.push({ voteId, name:'[hidden]', phone:ph, email:em, section, candidateId, candidateName, timestamp });
  writeJSON(FILES.votes, votes);
  res.json({ success: true });
});

app.get('/api/votes/check/:id', (req, res) => {
  const id = decodeURIComponent(req.params.id);
  const votes = readJSON(FILES.votes);
  const ph = normalizePhone(id);
  const voted = votes.some(v =>
    normalizePhone(v.phone||'') === ph ||
    (v.email && v.email === id.toLowerCase())
  );
  res.json({ voted });
});

app.delete('/api/votes', (req, res) => { writeJSON(FILES.votes, []); res.json({ success: true }); });

// ══════════════════════════════════════════
//  FRAUD
// ══════════════════════════════════════════
app.get('/api/fraud', (req, res) => res.json(readJSON(FILES.fraud)));
app.post('/api/fraud', (req, res) => { const f=readJSON(FILES.fraud); f.push(req.body); writeJSON(FILES.fraud,f); res.json({success:true}); });
app.delete('/api/fraud', (req, res) => { writeJSON(FILES.fraud,[]); res.json({success:true}); });

// ══════════════════════════════════════════
//  LOGS
// ══════════════════════════════════════════
app.get('/api/logs', (req, res) => res.json(readJSON(FILES.logs)));
app.post('/api/logs', (req, res) => { const l=readJSON(FILES.logs); l.push(req.body); writeJSON(FILES.logs,l); res.json({success:true}); });
app.delete('/api/logs', (req, res) => { writeJSON(FILES.logs,[]); res.json({success:true}); });

// ══════════════════════════════════════════
//  FACES
// ══════════════════════════════════════════
app.get('/api/faces', (req, res) => res.json(readJSON(FILES.faces)));
app.post('/api/faces', (req, res) => { const f=readJSON(FILES.faces); f.push(req.body); writeJSON(FILES.faces,f); res.json({success:true}); });
app.delete('/api/faces', (req, res) => { writeJSON(FILES.faces,[]); res.json({success:true}); });

// ══════════════════════════════════════════
//  SETTINGS
// ══════════════════════════════════════════
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

// ══════════════════════════════════════════
//  DISABLED
// ══════════════════════════════════════════
app.get('/api/disabled', (req, res) => res.json(readJSON(FILES.disabled)));
app.post('/api/disabled', (req, res) => {
  const { phone }=req.body; const d=readJSON(FILES.disabled);
  if(!d.includes(phone)){d.push(phone);writeJSON(FILES.disabled,d);}
  res.json({success:true});
});
app.delete('/api/disabled/:id', (req, res) => {
  const id = decodeURIComponent(req.params.id);
  writeJSON(FILES.disabled, readJSON(FILES.disabled).filter(r=>r!==id));
  res.json({success:true});
});

// ══════════════════════════════════════════
//  CANDIDATES
// ══════════════════════════════════════════
app.get('/api/candidates', (req, res) => { const d=readJSON(FILES.candidates); res.json(Array.isArray(d)&&d.length===0?null:d); });
app.put('/api/candidates', (req, res) => { writeJSON(FILES.candidates,req.body); res.json({success:true}); });

// ── CATCH-ALL ──
app.get('*', (req, res) => res.sendFile(path.join(__dirname,'../frontend/index.html')));

app.listen(PORT, () => console.log(`CR Election running on port ${PORT}`));
