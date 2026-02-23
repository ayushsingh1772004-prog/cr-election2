const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ── Paths to JSON data files ──
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

// ── Ensure data directory AND files exist ──
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
Object.values(FILES).forEach(f => {
  if (!fs.existsSync(f)) {
    fs.writeFileSync(f, JSON.stringify([]));
  }
});

// ── Helpers ──
function readJSON(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch { return []; }
}
function writeJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// ── Middleware ──
app.use(cors());
app.use(express.json({ limit: '2mb' })); // 2MB to allow face image data
app.use(express.static(path.join(__dirname, '../frontend')));

// ══════════════════════════════════════════
//  VOTES
// ══════════════════════════════════════════

// Get all votes
app.get('/api/votes', (req, res) => {
  res.json(readJSON(FILES.votes));
});

// Cast a vote
app.post('/api/votes', (req, res) => {
  const votes = readJSON(FILES.votes);
  const { roll, voteId, name, section, candidateId, candidateName, timestamp } = req.body;

  if (!roll || !candidateId) return res.status(400).json({ error: 'Missing fields' });

  // Prevent duplicate votes
  if (votes.find(v => v.roll === roll)) {
    return res.status(409).json({ error: 'Already voted' });
  }

  const vote = { voteId, name, roll, section, candidateId, candidateName, timestamp };
  votes.push(vote);
  writeJSON(FILES.votes, votes);
  res.json({ success: true, vote });
});

// Check if a roll number has already voted
app.get('/api/votes/check/:roll', (req, res) => {
  const votes = readJSON(FILES.votes);
  const voted = votes.some(v => v.roll === req.params.roll);
  res.json({ voted });
});

// Reset all votes (admin only — protected by admin token check on client)
app.delete('/api/votes', (req, res) => {
  writeJSON(FILES.votes, []);
  res.json({ success: true });
});

// ══════════════════════════════════════════
//  FRAUD
// ══════════════════════════════════════════

app.get('/api/fraud', (req, res) => res.json(readJSON(FILES.fraud)));

app.post('/api/fraud', (req, res) => {
  const fraud = readJSON(FILES.fraud);
  fraud.push(req.body);
  writeJSON(FILES.fraud, fraud);
  res.json({ success: true });
});

app.delete('/api/fraud', (req, res) => {
  writeJSON(FILES.fraud, []);
  res.json({ success: true });
});

// ══════════════════════════════════════════
//  LOGS
// ══════════════════════════════════════════

app.get('/api/logs', (req, res) => res.json(readJSON(FILES.logs)));

app.post('/api/logs', (req, res) => {
  const logs = readJSON(FILES.logs);
  logs.push(req.body);
  writeJSON(FILES.logs, logs);
  res.json({ success: true });
});

app.delete('/api/logs', (req, res) => {
  writeJSON(FILES.logs, []);
  res.json({ success: true });
});

// ══════════════════════════════════════════
//  FACES (for duplicate face detection)
// ══════════════════════════════════════════

app.get('/api/faces', (req, res) => res.json(readJSON(FILES.faces)));

app.post('/api/faces', (req, res) => {
  const faces = readJSON(FILES.faces);
  faces.push(req.body);
  writeJSON(FILES.faces, faces);
  res.json({ success: true });
});

app.delete('/api/faces', (req, res) => {
  writeJSON(FILES.faces, []);
  res.json({ success: true });
});

// ══════════════════════════════════════════
//  SETTINGS
// ══════════════════════════════════════════

const DEFAULT_SETTINGS = {
  electionState: 'active',
  resultsLocked: true,
  manualReveal: false,
  faceDetection: true,
  sessionTimeout: true,
  privacyNotice: true,
  autoDeleteFaces: true,
  adminPass: '13d38d0', // hash of 'admin2025'
  schedStart: '',
  schedEnd: ''
};

app.get('/api/settings', (req, res) => {
  const raw = readJSON(FILES.settings);
  const settings = Array.isArray(raw) ? DEFAULT_SETTINGS : Object.assign({}, DEFAULT_SETTINGS, raw);
  res.json(settings);
});

app.put('/api/settings', (req, res) => {
  const current = (() => {
    const raw = readJSON(FILES.settings);
    return Array.isArray(raw) ? DEFAULT_SETTINGS : Object.assign({}, DEFAULT_SETTINGS, raw);
  })();
  const updated = Object.assign(current, req.body);
  writeJSON(FILES.settings, updated);
  res.json(updated);
});

// ══════════════════════════════════════════
//  DISABLED VOTERS
// ══════════════════════════════════════════

app.get('/api/disabled', (req, res) => res.json(readJSON(FILES.disabled)));

app.post('/api/disabled', (req, res) => {
  const { roll } = req.body;
  const disabled = readJSON(FILES.disabled);
  if (!disabled.includes(roll)) {
    disabled.push(roll);
    writeJSON(FILES.disabled, disabled);
  }
  res.json({ success: true });
});

app.delete('/api/disabled/:roll', (req, res) => {
  let disabled = readJSON(FILES.disabled);
  disabled = disabled.filter(r => r !== req.params.roll);
  writeJSON(FILES.disabled, disabled);
  res.json({ success: true });
});

// ══════════════════════════════════════════
//  CANDIDATES
// ══════════════════════════════════════════

app.get('/api/candidates', (req, res) => {
  const data = readJSON(FILES.candidates);
  res.json(Array.isArray(data) && data.length === 0 ? null : data);
});

app.put('/api/candidates', (req, res) => {
  writeJSON(FILES.candidates, req.body);
  res.json({ success: true });
});

// ══════════════════════════════════════════
//  CATCH-ALL → serve frontend
// ══════════════════════════════════════════
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`✅  CR Election server running on http://localhost:${PORT}`);
});
