// ════════════════════════════════════════════════════
//  CONFIG — change this to your deployed backend URL
// ════════════════════════════════════════════════════
const API = window.location.origin; // Works automatically when backend serves the frontend

// ════════════════════════════════════════════════════
//  DATA — Students & Candidates
// ════════════════════════════════════════════════════
const ALPHA_STUDENTS = [
  {name:"AARAV PATHAK",roll:"250901"},{name:"ADITYA MUKESH",roll:"250760"},
  {name:"ADITYA PATHAK",roll:"250472"},{name:"AKSHITA SAXENA",roll:"250776"},
  {name:"AMAN KUMAR",roll:"250626"},{name:"ANJALI MISHRA",roll:"250799"},
  {name:"ANSHU RAJ BISOYI",roll:"250466"},{name:"ANUJ SONKAR",roll:"250770"},
  {name:"ANUSHKA SINGH",roll:"250463"},{name:"ARYAN SINGH",roll:"250527"},
  {name:"AYUSH KUMAR SINGH",roll:"250772"},{name:"AYUSH PANDEY",roll:"250630"},
  {name:"BHAVESH PANDEY",roll:"250797"},{name:"DEPESH SIKARWAR",roll:"250749"},
  {name:"DEVASHISH",roll:"250469"},{name:"DIPESH SINGH",roll:"250464"},
  {name:"DIVYANSH GUPTA",roll:"250903"},{name:"EKANSH BANSAL",roll:"250556"},
  {name:"GAUTAM KUMAR",roll:"250465"},{name:"GOURAV",roll:"250590"},
  {name:"GURDEEP SINGH",roll:"250908"},{name:"HARSHITA",roll:"250753"},
  {name:"JAGJEET KUMAR",roll:"250794"},{name:"JIYA KAUSHIK",roll:"250475"},
  {name:"KIRAN SINHA",roll:"250757"},{name:"KUNAL PATEL",roll:"250762"},
  {name:"KUSHAGRA GOEL",roll:"250460"},{name:"MANIKESH KUMAR",roll:"250781"},
  {name:"MANSA BHATT",roll:"250745"},{name:"MAYANGLAMBAM LANCHENBA SINGH",roll:"250775"},
  {name:"MAYANK RAJPUT",roll:"250755"},{name:"MOLLY ARORA",roll:"250878"},
  {name:"NIKHIL SINGH",roll:"250310"},{name:"PARTH SARTHI",roll:"250771"},
  {name:"PAWAN UNIYARA",roll:"250468"},{name:"PRAKHAR RAJ",roll:"250877"},
  {name:"REWAS KHATRI",roll:"250787"},{name:"RISHAV RAJ",roll:"250906"},
  {name:"SAGAR KUMAR",roll:"250804"},{name:"SAMAR KUMAR",roll:"250627"},
  {name:"SAROJ VISHWAKARMA",roll:"250786"},{name:"SAURAV KUMAR",roll:"250783"},
  {name:"SHREE AADYA SHARMA",roll:"250473"},{name:"SHUBHAM KUMAR",roll:"250782"},
  {name:"SIYA BHARDWAJ",roll:"250876"},{name:"SOFIYA",roll:"250754"},
  {name:"SURYANSH SETH",roll:"250521"},{name:"TANU SAINI",roll:"250467"},
  {name:"TEJAS DADHICH",roll:"250868"},{name:"UDIT AGARWAL",roll:"250790"},
  {name:"VIKASH KUMAR",roll:"250803"},{name:"YOGESH KUMAR RUDRA",roll:"250470"}
];

const BETA_STUDENTS = [
  {name:"ABDUL KABIR KHAN",roll:"250720"},{name:"ABHINAY SINGH",roll:"250784"},
  {name:"AKSHAT PORWAL",roll:"250792"},{name:"ANAMIKA YADAV",roll:"250723"},
  {name:"ANAND KUMAR",roll:"250905"},{name:"ANCHAL KUMARI",roll:"250459"},
  {name:"ANSHIKA GUPTA",roll:"250761"},{name:"ARHAN DEV SINGH",roll:"250777"},
  {name:"ARNAV ARYA",roll:"250798"},{name:"AYUSH KUMAR",roll:"250529"},
  {name:"BIRAJ KS",roll:"250765"},{name:"CHANDRESHWAR NATH TRIPATHI",roll:"250722"},
  {name:"CHETAN KUMAR VERMA",roll:"250631"},{name:"CHETAN SINGH",roll:"250800"},
  {name:"DEBOJIT DEY",roll:"250773"},{name:"DHRUV TOMAR",roll:"250909"},
  {name:"DIKSHA",roll:"250854"},{name:"DIVYANKA",roll:"250426"},
  {name:"DIVYANSH AGARWAL",roll:"250867"},{name:"HARSH SURANA",roll:"250763"},
  {name:"HARSHIT RANJAN",roll:"250764"},{name:"HIMANSHU",roll:"250767"},
  {name:"KAVYA SRIVASTAVA",roll:"250747"},{name:"KUNAL VERMA",roll:"250779"},
  {name:"MEET DEY",roll:"250461"},{name:"NAMAN GOYAL",roll:"250791"},
  {name:"ONIK CHHATWAL",roll:"250750"},{name:"PALLAVI BHANDARI",roll:"250778"},
  {name:"PRANJAL SRIVASTAV",roll:"250629"},{name:"PRINCE KUMAR",roll:"250807"},
  {name:"PRINCE MAHUR",roll:"250766"},{name:"PRIYANKA NEGI",roll:"250801"},
  {name:"PURNIMA RAJ",roll:"250748"},{name:"RAHIMUDDIN",roll:"250893"},
  {name:"RISHABH KUMAR TYAGI",roll:"250769"},{name:"RITU RAJ SINHA",roll:"250873"},
  {name:"SAFAK ALI",roll:"250628"},{name:"SAGAR KUMAR GUPTA",roll:"250752"},
  {name:"SAIF ULLAH JAFRI",roll:"250788"},{name:"SAPNA SINGH",roll:"250743"},
  {name:"SARITA",roll:"250948"},{name:"SHIVAM KUMAR",roll:"250477"},
  {name:"SHREYA GUPTA",roll:"250476"},{name:"SHUBHAM GUPTA",roll:"250483"},
  {name:"SUBHASH KUMAR YADAV",roll:"250866"},{name:"SURYANSH CHAUHAN",roll:"250243"},
  {name:"SYED RAYYAN",roll:"250943"},{name:"TUSHAR BHOJWANI",roll:"250756"},
  {name:"UJJWAL RAJ",roll:"250795"},{name:"UTKARSH PATWA",roll:"250774"},
  {name:"YARRAGORLA VAMSHI",roll:"250793"},{name:"YASH AGARWAL",roll:"250471"}
];

let CANDIDATES = {
  Alpha: [
    {id:'a1',name:'Siya Bhardwaj',role:'CR Nominee',color:'#7c6bff',bg:'rgba(124,107,255,0.15)'},
  ],
  Beta: [
    {id:'b1',name:'Naman Goyal',role:'CR Nominee',color:'#ff5f7e',bg:'rgba(255,95,126,0.15)'},
    {id:'b2',name:'Utkarsh Patwa',role:'CR Nominee',color:'#00e5c8',bg:'rgba(0,229,200,0.15)'},
  ]
};

// ════════════════════════════════════════════════════
//  API HELPERS — replace localStorage with server calls
// ════════════════════════════════════════════════════
async function apiGet(endpoint) {
  try {
    const r = await fetch(API + endpoint);
    return await r.json();
  } catch(e) { console.error('API GET error:', endpoint, e); return null; }
}
async function apiPost(endpoint, body) {
  try {
    const r = await fetch(API + endpoint, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    });
    return await r.json();
  } catch(e) { console.error('API POST error:', endpoint, e); return null; }
}
async function apiPut(endpoint, body) {
  try {
    const r = await fetch(API + endpoint, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    });
    return await r.json();
  } catch(e) { console.error('API PUT error:', endpoint, e); return null; }
}
async function apiDelete(endpoint) {
  try {
    const r = await fetch(API + endpoint, { method: 'DELETE' });
    return await r.json();
  } catch(e) { console.error('API DELETE error:', endpoint, e); return null; }
}

// ════════════════════════════════════════════════════
//  STATE
// ════════════════════════════════════════════════════
let settings = {};
let currentSection = null;
let currentStudent = null;
let capturedImage = null;
let selectedCandidate = null;
let videoStream = null;
let currentCandSection = 'Alpha';

// ════════════════════════════════════════════════════
//  SETTINGS (fetched from server)
// ════════════════════════════════════════════════════
const DEFAULT_SETTINGS = {
  electionState:'active', resultsLocked:true, manualReveal:false,
  faceDetection:true, sessionTimeout:true, privacyNotice:true,
  autoDeleteFaces:true, adminPass:hashStr('admin2025'),
  schedStart:'', schedEnd:''
};

async function loadSettings() {
  const s = await apiGet('/api/settings');
  return s || DEFAULT_SETTINGS;
}
async function saveSettings(s) {
  await apiPut('/api/settings', s);
}

function hashStr(s) {
  let h = 0;
  for(let i=0; i<s.length; i++) { h = ((h<<5)-h)+s.charCodeAt(i); h|=0; }
  return h.toString(16);
}

// ════════════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', async () => {
  document.getElementById('alpha-count').textContent = ALPHA_STUDENTS.length + ' students';
  document.getElementById('beta-count').textContent = BETA_STUDENTS.length + ' students';

  settings = await loadSettings();
  updateHeaderStatus();
  startCountdownTimer();

  // Load candidates from server if saved
  const savedCands = await apiGet('/api/candidates');
  if (savedCands) CANDIDATES = savedCands;
});

function getStudents(section) { return section==='Alpha' ? ALPHA_STUDENTS : BETA_STUDENTS; }
function normName(n) { return n.trim().toUpperCase().replace(/\s+/g,' '); }

function updateHeaderStatus() {
  const el = document.getElementById('header-status');
  const txt = document.getElementById('status-text');
  const dot = el.querySelector('.status-dot');
  const s = settings.electionState || 'active';
  el.className = 'election-status ' + s;
  txt.textContent = s==='active'?'VOTING OPEN':s==='paused'?'PAUSED':s==='ended'?'ENDED':'PENDING';
  dot.className = 'status-dot' + (s==='active'?' blink':'');
}

// ════════════════════════════════════════════════════
//  VOTING FLOW
// ════════════════════════════════════════════════════
function selectSection(sec) {
  if(settings.electionState==='ended'){alert('The election has ended.');return;}
  if(settings.electionState==='pending'){alert('The election has not started yet.');return;}
  if(settings.electionState==='paused'){alert('Voting is currently paused. Please wait.');return;}

  currentSection = sec;
  const students = getStudents(sec);
  document.getElementById('db-count').textContent = students.length;

  const badge = document.getElementById('section-indicator');
  badge.className = 'section-badge ' + sec.toLowerCase();
  badge.textContent = '● SECTION ' + sec.toUpperCase();

  const vbadge = document.getElementById('vote-section-badge');
  vbadge.className = 'section-badge ' + sec.toLowerCase();
  vbadge.textContent = '● SECTION ' + sec.toUpperCase();

  document.getElementById('sec-alpha').classList.remove('selected');
  document.getElementById('sec-beta').classList.remove('selected');
  document.getElementById('sec-'+sec.toLowerCase()).classList.add('selected');

  goToStep(2);
}

async function verifyIdentity() {
  const nameVal = document.getElementById('inp-name').value.trim();
  const rollVal = document.getElementById('inp-roll').value.trim();
  document.getElementById('err-name').textContent='';
  document.getElementById('err-roll').textContent='';
  document.getElementById('inp-name').classList.remove('err');
  document.getElementById('inp-roll').classList.remove('err');

  if(!nameVal){document.getElementById('err-name').textContent='Name required';document.getElementById('inp-name').classList.add('err');return;}
  if(!rollVal){document.getElementById('err-roll').textContent='Roll required';document.getElementById('inp-roll').classList.add('err');return;}

  const students = getStudents(currentSection);
  const student = students.find(s => normName(s.name)===normName(nameVal) && s.roll===rollVal);

  if(!student) {
    const byRoll = students.find(s=>s.roll===rollVal);
    if(byRoll) document.getElementById('err-name').textContent=`Roll ${rollVal} belongs to "${byRoll.name}" — check spelling`;
    else document.getElementById('err-name').textContent='Student not found in Section '+currentSection+'. Check details.';
    document.getElementById('inp-name').classList.add('err');
    await logEvent('FAILED_IDENTITY',`Name:${nameVal} Roll:${rollVal} Section:${currentSection}`,'⚠️');
    return;
  }

  // Check disabled
  const disabled = await apiGet('/api/disabled') || [];
  if(disabled.includes(student.roll)) {
    document.getElementById('err-roll').textContent='⛔ This voter has been disabled by admin.';
    return;
  }

  // Check already voted (server-side authoritative check)
  const checkResult = await apiGet('/api/votes/check/' + student.roll);
  if(checkResult && checkResult.voted) {
    document.getElementById('err-roll').textContent='⛔ This student has already voted.';
    await logFraud('DUPLICATE_VOTE_ATTEMPT',student.name,student.roll,currentSection,'Identity step');
    return;
  }

  currentStudent = {...student, section: currentSection};
  await logEvent('IDENTITY_VERIFIED',`${student.name} (${student.roll}) — Section ${currentSection}`,'✅');
  goToStep(3);
  startCamera();
}

// ════════════════════════════════════════════════════
//  FACE-API.JS — Face Detection & Recognition
// ════════════════════════════════════════════════════
const MODELS_URL = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model';
const FACE_MATCH_THRESHOLD = 0.45;
let faceModelsLoaded = false;
let liveDetectionLoop = null;

async function loadFaceModels() {
  if(faceModelsLoaded) return true;
  try {
    const sb = document.getElementById('face-status');
    sb.style.display='flex'; sb.className='status info';
    sb.innerHTML='<div class="spin"></div> Loading face recognition models...';
    await Promise.all([
      faceapi.nets.ssdMobilenetv1.loadFromUri(MODELS_URL),
      faceapi.nets.faceLandmark68Net.loadFromUri(MODELS_URL),
      faceapi.nets.faceRecognitionNet.loadFromUri(MODELS_URL),
    ]);
    faceModelsLoaded = true;
    sb.style.display='none';
    return true;
  } catch(e) {
    const sb = document.getElementById('face-status');
    sb.style.display='flex'; sb.className='status error';
    sb.innerHTML='❌ Failed to load face models. Check internet and retry.';
    return false;
  }
}

async function startCamera() {
  const ok = await loadFaceModels();
  if(!ok) return;
  try {
    videoStream = await navigator.mediaDevices.getUserMedia({
      video:{facingMode:'user',width:{ideal:640},height:{ideal:480}},audio:false
    });
    const video = document.getElementById('video');
    video.srcObject = videoStream;
    video.onloadedmetadata = () => { video.play(); startLiveDetectionOverlay(); };
    document.getElementById('cam-hint').textContent='Align face in the oval — keep still';
    document.getElementById('capture-btn').disabled=false;
  } catch(e) {
    const sb = document.getElementById('face-status');
    sb.style.display='flex'; sb.className='status warning';
    sb.innerHTML='⚠️ Camera permission denied. Please allow camera access and reload.';
    document.getElementById('capture-btn').disabled=true;
  }
}

function startLiveDetectionOverlay() {
  if(liveDetectionLoop) return;
  const video = document.getElementById('video');
  let liveCanvas = document.getElementById('live-detect-canvas');
  if(!liveCanvas) {
    liveCanvas = document.createElement('canvas');
    liveCanvas.id='live-detect-canvas';
    liveCanvas.style.cssText='position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;';
    document.getElementById('cam-wrap').appendChild(liveCanvas);
  }
  liveDetectionLoop = setInterval(async () => {
    if(!videoStream||!video.srcObject){stopLiveDetection();return;}
    if(video.readyState<2) return;
    const detection = await faceapi
      .detectSingleFace(video,new faceapi.SsdMobilenetv1Options({minConfidence:0.5}))
      .withFaceLandmarks();
    liveCanvas.width=video.videoWidth; liveCanvas.height=video.videoHeight;
    const ctx=liveCanvas.getContext('2d');
    ctx.clearRect(0,0,liveCanvas.width,liveCanvas.height);
    if(detection) {
      const box=detection.detection.box;
      const mirroredX=liveCanvas.width-box.x-box.width;
      ctx.strokeStyle='#00e5a0'; ctx.lineWidth=2.5;
      ctx.shadowColor='#00e5a0'; ctx.shadowBlur=12;
      ctx.strokeRect(mirroredX,box.y,box.width,box.height);
      ctx.fillStyle='#00e5a0'; ctx.font='bold 11px monospace'; ctx.shadowBlur=0;
      const conf=Math.round(detection.detection.score*100);
      ctx.fillText(`FACE ${conf}%`,mirroredX,box.y>14?box.y-5:box.y+14);
      document.getElementById('capture-btn').disabled=false;
      document.getElementById('cam-hint').textContent=`✓ Face detected (${conf}% confidence) — ready to capture`;
    } else {
      document.getElementById('cam-hint').textContent='No face detected — move closer or improve lighting';
    }
  },200);
}

function stopLiveDetection() {
  if(liveDetectionLoop){clearInterval(liveDetectionLoop);liveDetectionLoop=null;}
  const lc=document.getElementById('live-detect-canvas');
  if(lc) lc.remove();
}

async function capturePhoto() {
  const video=document.getElementById('video');
  if(!videoStream||video.readyState<2){
    const sb=document.getElementById('face-status');
    sb.style.display='flex';sb.className='status warning';sb.innerHTML='⚠️ Camera not ready. Wait a moment.';return;
  }
  stopLiveDetection();
  const canvas=document.getElementById('canvas-preview');
  const ctx=canvas.getContext('2d');
  const w=video.videoWidth,h=video.videoHeight;
  canvas.width=w;canvas.height=h;
  ctx.save();ctx.scale(-1,1);ctx.drawImage(video,-w,0,w,h);ctx.restore();
  capturedImage=canvas.toDataURL('image/jpeg',0.92);
  canvas.style.display='block';video.style.display='none';
  document.getElementById('cam-overlay').innerHTML='<div class="tick-overlay"><div class="tick-circle">✓</div></div>';
  document.getElementById('cam-hint').textContent='Analyzing...';
  stopCamera();
  await processFace();
}

function retakePhoto() {
  stopCamera();stopLiveDetection();capturedImage=null;
  const canvas=document.getElementById('canvas-preview');
  const ctx=canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  canvas.style.display='none';canvas.width=1;canvas.height=1;
  const video=document.getElementById('video');
  video.srcObject=null;video.style.display='block';
  document.getElementById('cam-overlay').innerHTML='<div class="face-oval"></div>';
  document.getElementById('cam-hint').textContent='Align face in the oval guide';
  document.getElementById('face-status').style.display='none';
  document.getElementById('proceed-face-btn').style.display='none';
  document.getElementById('capture-btn').disabled=true;
  setTimeout(()=>startCamera(),350);
}

function stopCamera() {
  if(videoStream){videoStream.getTracks().forEach(t=>t.stop());videoStream=null;}
}

async function processFace() {
  const sb=document.getElementById('face-status');
  sb.style.display='flex';sb.className='status info';
  sb.innerHTML='<div class="spin"></div> Detecting face in captured image...';
  if(!capturedImage) return;

  const img=await loadImageFromDataUrl(capturedImage);
  sb.innerHTML='<div class="spin"></div> Verifying a human face is present...';
  const detectionOptions=new faceapi.SsdMobilenetv1Options({minConfidence:0.6});
  const detections=await faceapi.detectAllFaces(img,detectionOptions).withFaceLandmarks().withFaceDescriptors();

  if(detections.length===0){
    sb.className='status error';
    sb.innerHTML='❌ No face detected in the photo. Retake — ensure your face is clearly visible and well-lit.';
    document.getElementById('cam-overlay').innerHTML='<div class="tick-overlay"><div class="tick-circle" style="background:var(--error)">❌</div></div>';
    await logEvent('FACE_NOT_DETECTED',`${currentStudent.name} — no face found`,'⚠️');
    return;
  }
  if(detections.length>1){
    sb.className='status error';
    sb.innerHTML=`❌ ${detections.length} faces detected. Only one person should be in frame.`;
    return;
  }

  sb.innerHTML='<div class="spin"></div> Extracting biometric signature...';
  const descriptor=Array.from(detections[0].descriptor);
  const confidence=Math.round(detections[0].detection.score*100);

  // Check duplicate faces against server
  if(settings.faceDetection) {
    sb.innerHTML='<div class="spin"></div> Checking against registered faces...';
    const storedFaces=await apiGet('/api/faces')||[];

    let dupRoll=null,closestDist=Infinity;
    for(const stored of storedFaces) {
      if(stored.roll===currentStudent.roll) continue;
      if(!stored.descriptor) continue;
      const dist=euclideanDistance(descriptor,stored.descriptor);
      if(dist<closestDist) closestDist=dist;
      if(dist<FACE_MATCH_THRESHOLD){dupRoll=stored.roll;break;}
    }

    if(dupRoll){
      sb.className='status error';
      sb.innerHTML=`⛔ This face is already registered to another student (Roll: ${dupRoll}).`;
      document.getElementById('cam-overlay').innerHTML='<div class="tick-overlay"><div class="tick-circle" style="background:var(--error)">⛔</div></div>';
      await logFraud('FACE_DUPLICATE',currentStudent.name,currentStudent.roll,currentStudent.section,
        `Matched roll ${dupRoll} (distance: ${closestDist.toFixed(3)})`);
      return;
    }

    // Save face descriptor to server
    await apiPost('/api/faces',{roll:currentStudent.roll,descriptor,capturedAt:new Date().toISOString()});
  }

  sb.className='status success';
  sb.innerHTML=`✅ Face verified — <strong>${currentStudent.name}</strong> · Confidence: ${confidence}% · No duplicates found.`;
  document.getElementById('cam-hint').textContent='✓ Face verified';
  document.getElementById('proceed-face-btn').style.display='block';
  await logEvent('FACE_VERIFIED',`${currentStudent.name} (${currentStudent.roll}) — confidence ${confidence}%`,'🤖');
}

function loadImageFromDataUrl(dataUrl){
  return new Promise((resolve,reject)=>{
    const img=new Image();
    img.onload=()=>resolve(img);img.onerror=reject;img.src=dataUrl;
  });
}
function euclideanDistance(a,b){
  let sum=0;for(let i=0;i<a.length;i++)sum+=(a[i]-b[i])**2;return Math.sqrt(sum);
}
function proceedAfterFace(){stopCamera();stopLiveDetection();renderCandidates();goToStep(4);}

// ════════════════════════════════════════════════════
//  VOTE
// ════════════════════════════════════════════════════
function renderCandidates(){
  const cands=CANDIDATES[currentSection]||[];
  const grid=document.getElementById('cands-grid');
  if(!cands.length){
    grid.innerHTML='<div class="status warning">⚠ No candidates configured for this section. Contact admin.</div>';return;
  }
  grid.innerHTML=cands.map(c=>`
    <div class="cand-card" id="cand-${c.id}" onclick="selectCand('${c.id}')">
      <div class="cand-avatar" style="background:${c.bg};color:${c.color}">${c.name.charAt(0)}</div>
      <div class="cand-name">${c.name}</div>
      <div class="cand-pos">${c.role}</div>
    </div>
  `).join('');
  selectedCandidate=null;
}

function selectCand(id){
  selectedCandidate=id;
  document.querySelectorAll('.cand-card').forEach(e=>e.classList.remove('selected'));
  document.getElementById('cand-'+id).classList.add('selected');
  document.getElementById('vote-warn').style.display='none';
}

async function submitVote(){
  if(!selectedCandidate){document.getElementById('vote-warn').style.display='flex';return;}
  const btn=document.getElementById('submit-btn');
  btn.disabled=true;btn.innerHTML='<div class="spin"></div> Recording...';

  const cand=CANDIDATES[currentSection].find(c=>c.id===selectedCandidate);
  const vote={
    roll:currentStudent.roll, name:currentStudent.name,
    section:currentSection, candidateId:selectedCandidate,
    candidateName:cand.name, voteId:'V'+Date.now(),
    timestamp:new Date().toISOString()
  };

  const result=await apiPost('/api/votes',vote);

  if(result && result.error && result.error==='Already voted'){
    btn.disabled=false;btn.innerHTML='🗳️ Submit My Vote';
    document.getElementById('vote-warn').style.display='flex';
    document.getElementById('vote-warn').innerHTML='⛔ Our records show this student has already voted.';
    return;
  }

  await logEvent('VOTE_CAST',`${currentStudent.name} → ${cand.name} (Section ${currentSection})`,'🗳️');
  showReceipt(vote);
  goToStep(5);
}

function showReceipt(v){
  document.getElementById('vote-receipt').innerHTML=`
    <div class="r-row"><span class="r-label">Vote ID</span><span>${v.voteId}</span></div>
    <div class="r-row"><span class="r-label">Section</span><span><span class="pill ${v.section.toLowerCase()}">${v.section}</span></span></div>
    <div class="r-row"><span class="r-label">Voted For</span><span>${v.candidateName}</span></div>
    <div class="r-row"><span class="r-label">Time</span><span>${new Date(v.timestamp).toLocaleString()}</span></div>
  `;
}

// ════════════════════════════════════════════════════
//  STEP NAVIGATION
// ════════════════════════════════════════════════════
function goToStep(n){
  for(let i=1;i<=5;i++){
    const card=document.getElementById('step'+i);
    const snum=document.getElementById('s'+i);
    const lbl=document.querySelectorAll('.step-label')[i-1];
    card.classList.remove('active');snum.classList.remove('active');
    if(i<n){snum.classList.add('done');snum.textContent='✓';}
    else if(i===n){snum.classList.remove('done');snum.textContent=i;snum.classList.add('active');}
    else{snum.classList.remove('done','active');snum.textContent=i;}
    if(lbl) lbl.classList.toggle('active',i===n);
    const conn=document.getElementById('c'+i);
    if(conn) conn.classList.toggle('done',i<n);
  }
  document.getElementById('step'+n).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}

// ════════════════════════════════════════════════════
//  ADMIN
// ════════════════════════════════════════════════════
let adminAuthed=false;

function openAdmin(){
  document.getElementById('admin-overlay').classList.add('open');
  if(!adminAuthed){showAuthScreen();}
  else{showAdminUI();showPage('dashboard');}
}
function closeAdmin(){document.getElementById('admin-overlay').classList.remove('open');}
function showAuthScreen(){
  document.getElementById('admin-auth').style.display='block';
  document.getElementById('admin-sidebar').style.display='none';
}
function showAdminUI(){
  document.getElementById('admin-auth').style.display='none';
  document.getElementById('admin-sidebar').style.display='flex';
}

async function checkPass(){
  const p=document.getElementById('admin-pass').value;
  settings=await loadSettings();
  if(hashStr(p)===settings.adminPass){
    adminAuthed=true;showAdminUI();showPage('dashboard');
    await logEvent('ADMIN_LOGIN','Admin panel accessed','🔐');
  } else {
    document.getElementById('pass-err').style.display='block';
    await logEvent('ADMIN_FAIL','Wrong password attempt','⚠️');
  }
}

async function showPage(page){
  document.querySelectorAll('.admin-page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.getElementById('nav-'+page).classList.add('active');
  const renders={
    dashboard:renderDashboard,results:renderResults,students:renderStudentsTable,
    faces:renderFacesTable,fraud:renderFraud,logs:renderLogs,
    candidates:()=>showCandSection(currentCandSection),countdown:renderCountdown
  };
  if(renders[page]) await renders[page]();
}

// ── DASHBOARD ──
async function renderDashboard(){
  settings=await loadSettings();
  const votes=await apiGet('/api/votes')||[];
  const fraud=await apiGet('/api/fraud')||[];
  const alphaVotes=votes.filter(v=>v.section==='Alpha');
  const betaVotes=votes.filter(v=>v.section==='Beta');

  document.getElementById('dash-stats').innerHTML=`
    <div class="stat" style="--accent-line:var(--alpha);--accent-text:var(--alpha);">
      <div class="stat-val">${alphaVotes.length}/${ALPHA_STUDENTS.length}</div><div class="stat-label">Alpha Votes</div>
      <div class="progress-track" style="margin-top:0.6rem;"><div class="progress-fill" style="width:${Math.round(alphaVotes.length/ALPHA_STUDENTS.length*100)||0}%;background:var(--alpha);"></div></div>
    </div>
    <div class="stat" style="--accent-line:var(--beta);--accent-text:var(--beta);">
      <div class="stat-val">${betaVotes.length}/${BETA_STUDENTS.length}</div><div class="stat-label">Beta Votes</div>
      <div class="progress-track" style="margin-top:0.6rem;"><div class="progress-fill" style="width:${Math.round(betaVotes.length/BETA_STUDENTS.length*100)||0}%;background:var(--beta);"></div></div>
    </div>
    <div class="stat" style="--accent-line:var(--accent3);--accent-text:var(--accent3);">
      <div class="stat-val">${votes.length}</div><div class="stat-label">Total Votes</div>
    </div>
    <div class="stat" style="--accent-line:var(--error);--accent-text:var(--error);">
      <div class="stat-val">${fraud.length}</div><div class="stat-label">Fraud Alerts</div>
    </div>
    <div class="stat">
      <div class="stat-val">${Math.round(votes.length/(ALPHA_STUDENTS.length+BETA_STUDENTS.length)*100)||0}%</div>
      <div class="stat-label">Overall Turnout</div>
    </div>
    <div class="stat" style="--accent-line:var(--success);--accent-text:var(--success);">
      <div class="stat-val" style="font-size:1.2rem;margin-top:0.2rem;">${(settings.electionState||'active').toUpperCase()}</div><div class="stat-label">Election Status</div>
    </div>
  `;
  await renderBarCharts('bar-alpha','Alpha');
  await renderBarCharts('bar-beta','Beta');
  document.getElementById('fraud-badge').textContent=fraud.length;
}

async function renderBarCharts(elId,section){
  const votes=(await apiGet('/api/votes')||[]).filter(v=>v.section===section);
  const cands=CANDIDATES[section]||[];
  const el=document.getElementById(elId);
  if(!cands.length){el.innerHTML='<div style="color:var(--muted);font-size:0.75rem;">No candidates</div>';return;}
  const max=Math.max(1,...cands.map(c=>votes.filter(v=>v.candidateId===c.id).length));
  el.innerHTML=cands.map(c=>{
    const cnt=votes.filter(v=>v.candidateId===c.id).length;
    const pct=Math.round(cnt/max*100);
    return `<div class="bar-item">
      <div class="bar-label">${c.name}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${c.color};"></div></div>
      <div class="bar-count">${cnt}</div>
    </div>`;
  }).join('');
}

// ── ELECTION CONTROL ──
async function setElectionState(state){
  settings=await loadSettings();
  settings.electionState=state;
  await saveSettings(settings);
  updateHeaderStatus();
  await logEvent('ELECTION_STATE_CHANGED',`State set to: ${state}`,'⚙️');
  await renderCountdown();
}

async function renderCountdown(){
  settings=await loadSettings();
  if(settings.schedStart) document.getElementById('sched-start').value=settings.schedStart;
  if(settings.schedEnd) document.getElementById('sched-end').value=settings.schedEnd;

  const tog=(id,val)=>{const el=document.getElementById(id);if(el)el.classList.toggle('on',!!val);};
  tog('tog-lock',settings.resultsLocked);
  tog('tog-reveal',settings.manualReveal);

  clearInterval(window._cdTimer);
  window._cdTimer=setInterval(()=>{
    const end=settings.schedEnd;
    const hEl=document.getElementById('cd-h'),mEl=document.getElementById('cd-m'),sEl=document.getElementById('cd-s');
    if(!hEl) return;
    if(!end){hEl.textContent=mEl.textContent=sEl.textContent='--';return;}
    const diff=new Date(end)-new Date();
    if(diff<=0){hEl.textContent=mEl.textContent=sEl.textContent='00';return;}
    const h=Math.floor(diff/3600000),m=Math.floor((diff%3600000)/60000),s=Math.floor((diff%60000)/1000);
    hEl.textContent=String(h).padStart(2,'0');mEl.textContent=String(m).padStart(2,'0');sEl.textContent=String(s).padStart(2,'0');
  },1000);
}

function startCountdownTimer(){
  clearInterval(window._cdTimer);
  window._cdTimer=setInterval(()=>{
    const hEl=document.getElementById('cd-h');if(!hEl)return;
    if(!settings.schedEnd){hEl.textContent='--';return;}
    const diff=new Date(settings.schedEnd)-new Date();
    if(diff<=0)return;
    document.getElementById('cd-h').textContent=String(Math.floor(diff/3600000)).padStart(2,'0');
    document.getElementById('cd-m').textContent=String(Math.floor((diff%3600000)/60000)).padStart(2,'0');
    document.getElementById('cd-s').textContent=String(Math.floor((diff%60000)/1000)).padStart(2,'0');
  },1000);
}

async function saveSchedule(){
  settings=await loadSettings();
  settings.schedStart=document.getElementById('sched-start').value;
  settings.schedEnd=document.getElementById('sched-end').value;
  await saveSettings(settings);
  await logEvent('SCHEDULE_SAVED',`Start:${settings.schedStart} End:${settings.schedEnd}`,'⏰');
}

// ── CANDIDATES ──
function showCandSection(sec){
  currentCandSection=sec;
  document.getElementById('cand-section-title').textContent=`Section ${sec} Candidates`;
  const cands=CANDIDATES[sec]||[];
  document.getElementById('cand-editor-list').innerHTML=cands.map(c=>`
    <div class="cand-editor">
      <div class="cand-editor-avatar" style="background:${c.bg};color:${c.color}">${c.name.charAt(0)}</div>
      <div class="cand-editor-info">
        <div class="cand-editor-name">${c.name}</div>
        <div class="cand-editor-meta">${c.role} · Section ${sec}</div>
      </div>
      <div class="cand-editor-actions">
        <button class="btn btn-danger btn-sm" onclick="removeCandidate('${sec}','${c.id}')">✕ Remove</button>
      </div>
    </div>
  `).join('')||'<div class="table-empty">No candidates. Add below.</div>';
}

async function addCandidate(){
  const name=document.getElementById('new-cand-name').value.trim();
  const role=document.getElementById('new-cand-pos').value.trim()||'CR Nominee';
  const sec=document.getElementById('new-cand-sec').value;
  if(!name){alert('Enter candidate name');return;}
  const colors=['#7c6bff','#ff5f7e','#00e5c8','#ffc857'];
  const id=sec.charAt(0).toLowerCase()+Date.now();
  const ci=(CANDIDATES[sec]||[]).length%colors.length;
  const col=colors[ci];
  if(!CANDIDATES[sec]) CANDIDATES[sec]=[];
  CANDIDATES[sec].push({id,name,role,color:col,bg:col.replace(')',',0.15)').replace('rgb','rgba')});
  await apiPut('/api/candidates',CANDIDATES);
  await logEvent('CANDIDATE_ADDED',`${name} → Section ${sec}`,'👤');
  document.getElementById('new-cand-name').value='';
  showCandSection(sec);
}

async function removeCandidate(sec,id){
  if(!confirm('Remove this candidate?')) return;
  CANDIDATES[sec]=CANDIDATES[sec].filter(c=>c.id!==id);
  await apiPut('/api/candidates',CANDIDATES);
  await logEvent('CANDIDATE_REMOVED',`ID:${id} from Section ${sec}`,'🗑️');
  showCandSection(sec);
}

// ── RESULTS ──
async function renderResults(){
  settings=await loadSettings();
  const locked=settings.resultsLocked&&settings.electionState!=='ended';
  document.getElementById('results-locked-msg').style.display=locked?'block':'none';
  document.getElementById('results-content').style.opacity=locked?'0.15':'1';
  if(locked) return;

  await renderBarCharts('results-bar-alpha','Alpha');
  await renderBarCharts('results-bar-beta','Beta');

  const votes=await apiGet('/api/votes')||[];
  ['Alpha','Beta'].forEach(sec=>{
    const sv=votes.filter(v=>v.section===sec);
    const cands=CANDIDATES[sec]||[];
    let winner=null,wc=0;
    cands.forEach(c=>{const cnt=sv.filter(v=>v.candidateId===c.id).length;if(cnt>wc){wc=cnt;winner=c.name;}});
    const el=document.getElementById(sec.toLowerCase()+'-winner');
    el.style.display=winner?'flex':'none';
    if(winner) el.innerHTML=`🏆 Leading: <strong>${winner}</strong> with ${wc} votes`;
  });

  const table=document.getElementById('votes-table');
  if(!votes.length){table.innerHTML='<div class="table-empty">No votes cast yet</div>';return;}
  table.innerHTML=votes.slice().reverse().map(v=>`
    <div class="table-row" style="grid-template-columns:1fr 1fr auto;">
      <div><span class="pill ${v.section.toLowerCase()}">${v.section}</span></div>
      <div>${v.candidateName}</div>
      <div style="color:var(--muted);font-size:0.68rem;">${new Date(v.timestamp).toLocaleTimeString()}</div>
    </div>
  `).join('');
}

// ── STUDENTS ──
async function renderStudentsTable(){
  const secFilter=document.getElementById('student-sec-filter').value;
  const search=document.getElementById('student-search').value.toLowerCase();
  const disabled=await apiGet('/api/disabled')||[];
  const votes=await apiGet('/api/votes')||[];
  const allStudents=[
    ...ALPHA_STUDENTS.map(s=>({...s,section:'Alpha'})),
    ...BETA_STUDENTS.map(s=>({...s,section:'Beta'}))
  ];
  const filtered=allStudents.filter(s=>{
    const matchSec=secFilter==='all'||s.section===secFilter;
    const matchSearch=!search||s.name.toLowerCase().includes(search)||s.roll.includes(search);
    return matchSec&&matchSearch;
  });
  const table=document.getElementById('students-table');
  if(!filtered.length){table.innerHTML='<div class="table-empty">No students found</div>';return;}
  table.innerHTML=filtered.map(s=>{
    const isDisabled=disabled.includes(s.roll);
    const hasVoted=votes.find(v=>v.roll===s.roll);
    return `<div class="table-row" style="grid-template-columns:auto 1fr auto auto auto;">
      <div style="font-size:0.72rem;color:var(--muted);">${s.roll}</div>
      <div>${s.name}</div>
      <div><span class="pill ${s.section.toLowerCase()}">${s.section}</span></div>
      <div>${hasVoted?'<span class="pill success">Voted</span>':isDisabled?'<span class="pill danger">Disabled</span>':'<span class="pill muted">Pending</span>'}</div>
      <div>
        <button class="btn btn-ghost btn-sm" style="font-size:0.65rem;padding:0.3rem 0.6rem;"
          onclick="${isDisabled?`enableVoter('${s.roll}')`:`disableVoter('${s.roll}')`}">
          ${isDisabled?'Enable':'Disable'}
        </button>
      </div>
    </div>`;
  }).join('');
}

async function disableVoter(roll){
  await apiPost('/api/disabled',{roll});
  await logEvent('VOTER_DISABLED',`Roll: ${roll}`,'⛔');
  renderStudentsTable();
}
async function enableVoter(roll){
  await apiDelete('/api/disabled/'+roll);
  await logEvent('VOTER_ENABLED',`Roll: ${roll}`,'✅');
  renderStudentsTable();
}

function importCSV(e){
  const file=e.target.files[0];if(!file) return;
  const reader=new FileReader();
  reader.onload=async ev=>{
    const lines=ev.target.result.split('\n').slice(1);
    let count=0;
    lines.forEach(line=>{const[roll,name,section]=line.split(',').map(s=>s.trim());if(roll&&name&&section)count++;});
    alert(`Parsed ${count} students from CSV.`);
    await logEvent('CSV_IMPORT',`${count} students imported`,'📥');
  };
  reader.readAsText(file);
}

// ── FACE DATA ──
async function renderFacesTable(){
  const faces=await apiGet('/api/faces')||[];
  const allStudents=[...ALPHA_STUDENTS,...BETA_STUDENTS];
  const table=document.getElementById('faces-table');
  if(!faces.length){table.innerHTML='<div class="table-empty">No face data stored</div>';return;}
  table.innerHTML=faces.map(f=>{
    const s=allStudents.find(st=>st.roll===f.roll);
    const hasDescriptor=f.descriptor&&f.descriptor.length===128;
    return `<div class="table-row" style="grid-template-columns:auto 1fr auto auto auto;">
      <div style="font-size:0.72rem;color:var(--muted);">${f.roll}</div>
      <div>${s?s.name:'Unknown'}</div>
      <div>${hasDescriptor?'<span class="pill success">128-d ✓</span>':'<span class="pill warning">legacy</span>'}</div>
      <div style="font-size:0.68rem;color:var(--muted);">${new Date(f.capturedAt).toLocaleString()}</div>
      <div><button class="btn btn-danger btn-sm" style="font-size:0.65rem;padding:0.3rem 0.6rem;" onclick="deleteFace('${f.roll}')">Delete</button></div>
    </div>`;
  }).join('');
}

async function deleteFace(roll){
  // Delete single face — we delete all and re-post others
  const faces=(await apiGet('/api/faces')||[]).filter(f=>f.roll!==roll);
  await apiDelete('/api/faces');
  for(const f of faces) await apiPost('/api/faces',f);
  await logEvent('FACE_DELETED',`Roll: ${roll}`,'🗑️');
  renderFacesTable();
}
async function deleteAllFaces(){
  if(!confirm('Delete ALL face data?')) return;
  await apiDelete('/api/faces');
  await logEvent('ALL_FACES_DELETED','All biometric data cleared','🗑️');
  renderFacesTable();
}

// ── FRAUD ──
async function logFraud(type,name,roll,section,detail){
  await apiPost('/api/fraud',{type,name,roll,section,detail,timestamp:new Date().toISOString()});
  const fraud=await apiGet('/api/fraud')||[];
  document.getElementById('fraud-badge').textContent=fraud.length;
}

async function renderFraud(){
  const fraud=await apiGet('/api/fraud')||[];
  const stats=document.getElementById('fraud-stats');
  const dupeVotes=fraud.filter(f=>f.type==='DUPLICATE_VOTE_ATTEMPT').length;
  const dupeFaces=fraud.filter(f=>f.type==='FACE_DUPLICATE').length;
  const failedId=fraud.filter(f=>f.type==='FAILED_IDENTITY').length;
  stats.innerHTML=`
    <div class="stat" style="--accent-line:var(--error);--accent-text:var(--error);"><div class="stat-val">${dupeVotes}</div><div class="stat-label">Duplicate Votes</div></div>
    <div class="stat" style="--accent-line:var(--warning);--accent-text:var(--warning);"><div class="stat-val">${dupeFaces}</div><div class="stat-label">Face Duplicates</div></div>
    <div class="stat"><div class="stat-val">${failedId}</div><div class="stat-label">Failed Identity</div></div>
  `;
  const list=document.getElementById('fraud-list');
  if(!fraud.length){list.innerHTML='<div class="table-empty">✅ No fraud attempts detected</div>';return;}
  list.innerHTML=`<div class="table-wrap">
    <div class="table-head" style="grid-template-columns:1fr 1fr auto auto;">
      <div>Student</div><div>Type</div><div>Section</div><div>Time</div>
    </div>
    ${fraud.slice().reverse().map(f=>`
      <div class="table-row" style="grid-template-columns:1fr 1fr auto auto;">
        <div>${f.name}<div style="font-size:0.68rem;color:var(--muted);">${f.roll}</div></div>
        <div><span class="pill danger">${f.type}</span></div>
        <div><span class="pill ${(f.section||'').toLowerCase()}">${f.section||'—'}</span></div>
        <div style="font-size:0.68rem;color:var(--muted);">${new Date(f.timestamp).toLocaleTimeString()}</div>
      </div>
    `).join('')}
  </div>`;
}

// ── LOGS ──
async function logEvent(action,detail,icon='📝'){
  await apiPost('/api/logs',{action,detail,icon,timestamp:new Date().toISOString()});
}
async function renderLogs(){
  const logs=(await apiGet('/api/logs')||[]).slice().reverse();
  const el=document.getElementById('activity-log');
  if(!logs.length){el.innerHTML='<div class="table-empty">No activity yet</div>';return;}
  el.innerHTML=logs.map(l=>`
    <div class="log-item">
      <div class="log-icon ${l.action.includes('VOTE')?'vote':l.action.includes('FRAUD')||l.action.includes('FAIL')||l.action.includes('DUPLIC')?'fraud':l.action.includes('FACE')?'face':'system'}">${l.icon||'📝'}</div>
      <div>
        <div style="font-family:'Syne',sans-serif;font-weight:600;font-size:0.78rem;">${l.action}</div>
        <div style="color:var(--muted2);font-size:0.72rem;margin-top:0.15rem;">${l.detail}</div>
        <div class="log-time">${new Date(l.timestamp).toLocaleString()}</div>
      </div>
    </div>
  `).join('');
}
async function clearLogs(){
  await apiDelete('/api/logs');
  renderLogs();
}

// ── EXPORT ──
async function exportCSV(type){
  let rows=[],header='';
  const votes=await apiGet('/api/votes')||[];
  const fraud=await apiGet('/api/fraud')||[];
  const logs=await apiGet('/api/logs')||[];
  if(type==='full'){
    header='Vote ID,Section,Candidate,Timestamp\n';
    rows=votes.map(v=>`${v.voteId},${v.section},${v.candidateName},${v.timestamp}`);
  } else if(type==='fraud'){
    header='Type,Name,Roll,Section,Detail,Timestamp\n';
    rows=fraud.map(f=>`${f.type},${f.name},${f.roll},${f.section||''},${f.detail},${f.timestamp}`);
  } else if(type==='turnout'){
    header='Section,Total Students,Votes Cast,Turnout %\n';
    const av=votes.filter(v=>v.section==='Alpha').length;
    const bv=votes.filter(v=>v.section==='Beta').length;
    rows=[`Alpha,${ALPHA_STUDENTS.length},${av},${Math.round(av/ALPHA_STUDENTS.length*100)}%`,
          `Beta,${BETA_STUDENTS.length},${bv},${Math.round(bv/BETA_STUDENTS.length*100)}%`];
  } else if(type==='logs'){
    header='Action,Detail,Timestamp\n';
    rows=logs.map(l=>`${l.action},"${l.detail}",${l.timestamp}`);
  }
  const blob=new Blob([header+rows.join('\n')],{type:'text/csv'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);
  a.download=`cr_election_${type}_${Date.now()}.csv`;a.click();
}

// ── SETTINGS ──
async function toggleSetting(key){
  settings=await loadSettings();
  settings[key]=!settings[key];
  await saveSettings(settings);
  const ids={resultsLocked:'tog-lock',manualReveal:'tog-reveal',faceDetection:'tog-face',
    sessionTimeout:'tog-timeout',privacyNotice:'tog-privacy',autoDeleteFaces:'tog-autodel'};
  if(ids[key]) document.getElementById(ids[key])?.classList.toggle('on',settings[key]);
  await logEvent('SETTING_CHANGED',`${key} = ${settings[key]}`,'⚙️');
}

async function changePass(){
  settings=await loadSettings();
  const old=document.getElementById('old-pass').value;
  const nw=document.getElementById('new-pass').value;
  const err=document.getElementById('pass-change-err');
  const ok=document.getElementById('pass-change-ok');
  err.textContent='';ok.style.display='none';
  if(hashStr(old)!==settings.adminPass){err.textContent='Current password incorrect';return;}
  if(nw.length<6){err.textContent='Password must be at least 6 characters';return;}
  settings.adminPass=hashStr(nw);
  await saveSettings(settings);
  ok.style.display='flex';
  document.getElementById('old-pass').value='';document.getElementById('new-pass').value='';
  await logEvent('PASS_CHANGED','Admin password updated','🔑');
}

async function resetVotes(){
  if(!confirm('Delete ALL votes? This is irreversible!')) return;
  await apiDelete('/api/votes');
  await logEvent('VOTES_RESET','All votes cleared by admin','⚠️');
  renderDashboard();
}

// ── MODAL ──
function showModal(title,sub,onConfirm){
  document.getElementById('modal-title').textContent=title;
  document.getElementById('modal-sub').textContent=sub;
  document.getElementById('modal-confirm-btn').onclick=()=>{onConfirm();closeModal();};
  document.getElementById('confirm-modal').classList.add('open');
}
function closeModal(){document.getElementById('confirm-modal').classList.remove('open');}

function delay(ms){return new Promise(r=>setTimeout(r,ms));}
