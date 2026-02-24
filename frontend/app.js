const API = window.location.origin;

// ════════════════════════════════════════════════════
//  STUDENT DATA — updated from PDF, keyed by phone
//  Each student: { name, phone, section }
// ════════════════════════════════════════════════════
const ALPHA_STUDENTS = [
  {name:"AARAV PATHAK",      phone:"9984963428"},
  {name:"ADITYA MUKESH",     phone:"9507323450"},
  {name:"ADITYA PATHAK",     phone:"7307338354"},
  {name:"AKSHITA",           phone:"8375063031"},
  {name:"AMAN KUMAR",        phone:"9334325841"},
  {name:"ANJALI MISHRA",     phone:"6394413207"},
  {name:"ANSHU RAJ BISOYI",  phone:"7788992348"},
  {name:"ANUJ SONKAR",       phone:"8191987287"},
  {name:"ANUSHKA SINGH",     phone:"7307850258"},
  {name:"ARYAN SINGH",       phone:"9211328927"},
  {name:"AYUSH KUMAR SINGH", phone:"9792037566"},
  {name:"AYUSH PANDEY",      phone:"6392431225"},
  {name:"BHAVESH PANDEY",    phone:"7465968293"},
  {name:"DEPESH SIKARWAR",   phone:"8882649942"},
  {name:"DEVASHISH",         phone:"7481063117"},
  {name:"DIPESH SINGH",      phone:"9832824223"},
  {name:"DIVYANSH GUPTA",    phone:"8447506537"},
  {name:"EKANSH BANSAL",     phone:"9761179955"},
  {name:"GAUTAM KUMAR",      phone:"8405020013"},
  {name:"GOURAV",            phone:"9027181385"},
  {name:"GURDEEP SINGH",     phone:"9873754054"},
  {name:"HARSHITA",          phone:"9992938902"},
  {name:"JAGJEET KUMAR",     phone:"7257044613"},
  {name:"JIYA KAUSHIK",      phone:"8287693121"},
  {name:"KIRAN SINHA",       phone:"6901147691"},
  {name:"KUNAL PATEL",       phone:"9889529205"},
  {name:"KUSHAGRA GOEL",     phone:"7303697477"},
  {name:"MANIKESH KUMAR",    phone:"9905438708"},
  {name:"MANSA BHATT",       phone:"9891761481"},
  {name:"MAYANGLAMBAM LANCHENBA SINGH", phone:"9233938119"},
  {name:"MAYANK RAJPUT",     phone:"8923256512"},
  {name:"MOLLY ARORA",       phone:"7037836464"},
  {name:"NIKHIL SINGH",      phone:"7985587641"},
  {name:"PARTH SARTHI",      phone:"9229263192"},
  {name:"PAWAN UNIYARA",     phone:"8982535643"},
  {name:"PRAKHAR RAJ",       phone:"9263482241"},
  {name:"REWAS KHATRI",      phone:"9635053235"},
  {name:"RISHAV RAJ",        phone:"9204369955"},
  {name:"SAGAR KUMAR",       phone:"7413967440"},
  {name:"SAMAR KUMAR",       phone:"9142766509"},
  {name:"SAROJ VISHWAKARMA", phone:"7869460977"},
  {name:"SAURAV KUMAR",      phone:"9296362147"},
  {name:"SHREE AADYA SHARMA",phone:"9540128484"},
  {name:"SHUBHAM KUMAR",     phone:"8210251230"},
  {name:"SIYA BHARDWAJ",     phone:"9315006462"},
  {name:"SOFIYA",            phone:"9799383725"},
  {name:"SURYANSH SETH",     phone:"9852219400"},
  {name:"TANU SAINI",        phone:"7300986189"},
  {name:"TEJAS DADHICH",     phone:"8238866201"},
  {name:"UDIT AGARWAL",      phone:"7900259622"},
  {name:"VIKASH KUMAR",      phone:"7065380035"},
  {name:"YOGESH KR RUDRA",   phone:"9931646184"},
];

const BETA_STUDENTS = [
  {name:"ABDUL KABIR KHAN",        phone:"9259620874"},
  {name:"ABHINAY SINGH",           phone:"7208664261"},
  {name:"AKSHAT PORWAL",           phone:"9407561796"},
  {name:"ANAMIKA YADAV",           phone:"7376510150"},
  {name:"ANAND KUMAR",             phone:"9472260086"},
  {name:"ANCHAL KUMARI",           phone:"9608304995"},
  {name:"ANSHIKA GUPTA",           phone:"6393163475"},
  {name:"ARHAN DEV SINGH",         phone:"6201678194"},
  {name:"ARNAV ARYA",              phone:"7764076583"},
  {name:"AYUSH KUMAR",             phone:"8757709486"},
  {name:"BIRAJ KS",                phone:"9494666834"},
  {name:"CHANDRESHWAR NATH TRIPATHI", phone:"9621592827"},
  {name:"CHETAN KUMAR VERMA",      phone:"9369219870"},
  {name:"CHETAN SINGH",            phone:"6388435468"},
  {name:"DEBOJIT DEY",             phone:"6388435468"},
  {name:"DHRUV TOMAR",             phone:"9779503522"},
  {name:"DIKSHA",                  phone:"7903404424"},
  {name:"DIVYANKA",                phone:"9838947714"},
  {name:"DIVYANSH AGARWAL",        phone:"7455837309"},
  {name:"HARSH SURANA",            phone:"9251034399"},
  {name:"HARSHIT RANJAN",          phone:"9798168389"},
  {name:"HIMANSHU",                phone:"9467180570"},
  {name:"KAVYA SRIVASTAVA",        phone:"9910901316"},
  {name:"KUNAL VERMA",             phone:"7376284881"},
  {name:"MEET DEY",                phone:"7638006820"},
  {name:"NAMAN GOYAL",             phone:"9119022835"},
  {name:"ONIK CHHATWAL",           phone:"8295074739"},
  {name:"PALLAVI BHANDARI",        phone:"8126763890"},
  {name:"PRANJAL SRIVASTAV",       phone:""},
  {name:"PRINCE KUMAR",            phone:"9905352625"},
  {name:"PRINCE MAHUR",            phone:"8218495197"},
  {name:"PRIYANKA NEGI",           phone:"9286328134"},
  {name:"PURNIMA RAJ",             phone:"9229557166"},
  {name:"RAHIMUDDIN GEHLOT",       phone:"7742400699"},
  {name:"RISHABH KUMAR TYAGI",     phone:"9999117796"},
  {name:"RITU RAJ SINHA",          phone:"8178898404"},
  {name:"SAFAK ALI",               phone:"6394524398"},
  {name:"SAGAR KUMAR GUPTA",       phone:"7903213470"},
  {name:"SAIF ULLAH JAFRI",        phone:"7388332488"},
  {name:"SAPNA SINGH",             phone:"9234219225"},
  {name:"SARITA",                  phone:"7668327057"},
  {name:"SHIVAM KUMAR",            phone:"6372502234"},
  {name:"SHREYA GUPTA",            phone:"8318138027"},
  {name:"SHUBHAM GUPTA",           phone:"9118111575"},
  {name:"SUBHASH KUMAR YADAV",     phone:"8955125916"},
  {name:"SURYANSH CHAUHAN",        phone:"7302830604"},
  {name:"SYED RYAN",               phone:""},
  {name:"TUSHAR BHOJWANI",         phone:"8085409988"},
  {name:"UJJWAL RAJ",              phone:"9395935191"},
  {name:"UTKARSH PATWA",           phone:"6233897044"},
  {name:"YARRAGORLA VAMSHI",       phone:"7995580027"},
  {name:"YASH AGGARWAL",           phone:"6378793796"},
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
//  API HELPERS
// ════════════════════════════════════════════════════
async function apiGet(ep){try{const r=await fetch(API+ep);return await r.json();}catch(e){console.error(e);return null;}}
async function apiPost(ep,body){try{const r=await fetch(API+ep,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});return await r.json();}catch(e){console.error(e);return null;}}
async function apiPut(ep,body){try{const r=await fetch(API+ep,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});return await r.json();}catch(e){console.error(e);return null;}}
async function apiDelete(ep){try{const r=await fetch(API+ep,{method:'DELETE'});return await r.json();}catch(e){console.error(e);return null;}}

function normalizePhone(p){ return String(p).replace(/[\s\-+().]/g,'').replace(/^91/,''); }

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
let otpResendTimer = null;
const TOTAL_STEPS = 6;

const DEFAULT_SETTINGS = {
  electionState:'active',resultsLocked:true,manualReveal:false,
  faceDetection:true,sessionTimeout:true,privacyNotice:true,
  autoDeleteFaces:true,adminPass:hashStr('admin2025'),schedStart:'',schedEnd:''
};

async function loadSettings(){const s=await apiGet('/api/settings');return s||DEFAULT_SETTINGS;}
async function saveSettings(s){await apiPut('/api/settings',s);}
function hashStr(s){let h=0;for(let i=0;i<s.length;i++){h=((h<<5)-h)+s.charCodeAt(i);h|=0;}return h.toString(16);}

// ════════════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', async () => {
  document.getElementById('alpha-count').textContent = ALPHA_STUDENTS.length + ' students';
  document.getElementById('beta-count').textContent = BETA_STUDENTS.length + ' students';
  settings = await loadSettings();
  updateHeaderStatus();
  startCountdownTimer();
  const savedCands = await apiGet('/api/candidates');
  if(savedCands) CANDIDATES = savedCands;
});

function getStudents(sec){ return sec==='Alpha' ? ALPHA_STUDENTS : BETA_STUDENTS; }
function normName(n){ return n.trim().toUpperCase().replace(/\s+/g,' '); }

function updateHeaderStatus(){
  const el=document.getElementById('header-status');
  const txt=document.getElementById('status-text');
  const dot=el.querySelector('.status-dot');
  const s=settings.electionState||'active';
  el.className='election-status '+s;
  txt.textContent=s==='active'?'VOTING OPEN':s==='paused'?'PAUSED':s==='ended'?'ENDED':'PENDING';
  dot.className='status-dot'+(s==='active'?' blink':'');
}

// ════════════════════════════════════════════════════
//  STEP 1 — SELECT SECTION
// ════════════════════════════════════════════════════
function selectSection(sec){
  if(settings.electionState==='ended'){alert('The election has ended.');return;}
  if(settings.electionState==='pending'){alert('The election has not started yet.');return;}
  if(settings.electionState==='paused'){alert('Voting is currently paused.');return;}
  currentSection=sec;
  document.getElementById('db-count').textContent=getStudents(sec).length;
  ['section-indicator','vote-section-badge'].forEach(id=>{
    const el=document.getElementById(id);
    el.className='section-badge '+sec.toLowerCase();
    el.textContent='● SECTION '+sec.toUpperCase();
  });
  document.getElementById('sec-alpha').classList.remove('selected');
  document.getElementById('sec-beta').classList.remove('selected');
  document.getElementById('sec-'+sec.toLowerCase()).classList.add('selected');
  goToStep(2);
}

// ════════════════════════════════════════════════════
//  STEP 2 — IDENTITY (Name + Phone)
// ════════════════════════════════════════════════════
async function verifyIdentity(){
  const nameVal=document.getElementById('inp-name').value.trim();
  const phoneVal=normalizePhone(document.getElementById('inp-phone').value.trim());
  document.getElementById('err-name').textContent='';
  document.getElementById('err-phone').textContent='';
  document.getElementById('inp-name').classList.remove('err');
  document.getElementById('inp-phone').classList.remove('err');

  if(!nameVal){document.getElementById('err-name').textContent='Name required';document.getElementById('inp-name').classList.add('err');return;}
  if(!phoneVal){document.getElementById('err-phone').textContent='Phone required';document.getElementById('inp-phone').classList.add('err');return;}

  const students=getStudents(currentSection);
  const student=students.find(s=>normName(s.name)===normName(nameVal) && normalizePhone(s.phone)===phoneVal);

  if(!student){
    const byPhone=students.find(s=>normalizePhone(s.phone)===phoneVal);
    const byName=students.find(s=>normName(s.name)===normName(nameVal));
    if(byPhone) document.getElementById('err-name').textContent=`This phone belongs to a different student — check your name`;
    else if(byName) document.getElementById('err-phone').textContent=`Name found but phone doesn't match — check your phone number`;
    else document.getElementById('err-name').textContent='Student not found in Section '+currentSection;
    document.getElementById('inp-name').classList.add('err');
    await logEvent('FAILED_IDENTITY',`Failed identity check — Section ${currentSection}`,'⚠️');
    return;
  }

  if(!student.phone){
    document.getElementById('err-phone').textContent='No phone number registered for this student. Contact admin.';
    return;
  }

  const disabled=await apiGet('/api/disabled')||[];
  if(disabled.includes(normalizePhone(student.phone))){
    document.getElementById('err-phone').textContent='⛔ This voter has been disabled by admin.';return;
  }

  const checkResult=await apiGet('/api/votes/check/'+normalizePhone(student.phone));
  if(checkResult&&checkResult.voted){
    document.getElementById('err-phone').textContent='⛔ This student has already voted.';
    await logFraud('DUPLICATE_VOTE_ATTEMPT','[hidden]','[hidden]',currentSection,'Identity step');
    return;
  }

  currentStudent={...student,section:currentSection};

  // Send OTP
  const sendBtn=document.querySelector('#step2 .btn-primary');
  sendBtn.disabled=true;sendBtn.innerHTML='<div class="spin"></div> Sending OTP...';

  const result=await apiPost('/api/otp/send',{phone:normalizePhone(student.phone)});

  sendBtn.disabled=false;sendBtn.innerHTML='<span>Verify & Send OTP</span><span>→</span>';

  if(!result||result.error){
    document.getElementById('err-phone').textContent='Failed to send OTP: '+(result?.error||'Server error');return;
  }

  await logEvent('IDENTITY_VERIFIED',`Voter verified — Section ${currentSection}`,'✅');

  // Dev mode — show OTP on screen for testing
  if(result.dev){
    document.getElementById('otp-sub').textContent=`[DEV MODE] OTP: ${result.otp} (Twilio not configured)`;
  } else {
    document.getElementById('otp-sub').textContent=`A 6-digit OTP has been sent to your WhatsApp (+91 ${student.phone.slice(-10)}).`;
  }

  goToStep(3);
  startOTPTimer();
}

// ════════════════════════════════════════════════════
//  STEP 3 — OTP VERIFICATION
// ════════════════════════════════════════════════════
function startOTPTimer(){
  let secs=300; // 5 min
  clearInterval(otpResendTimer);
  document.getElementById('resend-btn').disabled=true;
  otpResendTimer=setInterval(()=>{
    secs--;
    const m=Math.floor(secs/60),s=String(secs%60).padStart(2,'0');
    document.getElementById('otp-timer').textContent=secs>0?`OTP expires in ${m}:${s}`:'OTP expired. Please resend.';
    if(secs<=0){
      clearInterval(otpResendTimer);
      document.getElementById('resend-btn').disabled=false;
    }
  },1000);
}

async function verifyOTP(){
  const otpVal=document.getElementById('inp-otp').value.trim();
  document.getElementById('err-otp').textContent='';
  if(!otpVal||otpVal.length!==6){document.getElementById('err-otp').textContent='Enter the 6-digit OTP';return;}

  const btn=document.querySelector('#step3 .btn-primary');
  btn.disabled=true;btn.innerHTML='<div class="spin"></div> Verifying...';

  const result=await apiPost('/api/otp/verify',{phone:normalizePhone(currentStudent.phone),otp:otpVal});

  btn.disabled=false;btn.innerHTML='Verify OTP →';

  if(!result||result.error){
    document.getElementById('err-otp').textContent=result?.error||'Verification failed';return;
  }

  clearInterval(otpResendTimer);
  await logEvent('OTP_VERIFIED',`OTP verified — Section ${currentSection}`,'📱');
  goToStep(4);
  startCamera();
}

async function resendOTP(){
  const result=await apiPost('/api/otp/send',{phone:normalizePhone(currentStudent.phone)});
  if(result&&result.dev) document.getElementById('otp-sub').textContent=`[DEV] New OTP: ${result.otp}`;
  else document.getElementById('otp-sub').textContent='New OTP sent to your WhatsApp.';
  document.getElementById('inp-otp').value='';
  startOTPTimer();
}

// ════════════════════════════════════════════════════
//  STEP 4 — LIVENESS (Blink Detection) + Face Scan
// ════════════════════════════════════════════════════
const MODELS_URL='https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model';
const FACE_MATCH_THRESHOLD=0.45;
let faceModelsLoaded=false;
let liveDetectionLoop=null;

// Blink detection state
let blinkState={required:false,challenge:'',completed:false,eyesWereClosed:false,blinkCount:0,requiredBlinks:2};

async function loadFaceModels(){
  if(faceModelsLoaded) return true;
  try{
    const sb=document.getElementById('face-status');
    sb.style.display='flex';sb.className='status info';
    sb.innerHTML='<div class="spin"></div> Loading face models...';
    await Promise.all([
      faceapi.nets.ssdMobilenetv1.loadFromUri(MODELS_URL),
      faceapi.nets.faceLandmark68Net.loadFromUri(MODELS_URL),
      faceapi.nets.faceRecognitionNet.loadFromUri(MODELS_URL),
    ]);
    faceModelsLoaded=true;
    sb.style.display='none';
    return true;
  }catch(e){
    const sb=document.getElementById('face-status');
    sb.style.display='flex';sb.className='status error';
    sb.innerHTML='❌ Failed to load face models. Check internet.';
    return false;
  }
}

async function startCamera(){
  const ok=await loadFaceModels();
  if(!ok) return;
  try{
    videoStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user',width:{ideal:640},height:{ideal:480}},audio:false});
    const video=document.getElementById('video');
    video.srcObject=videoStream;
    video.onloadedmetadata=()=>{video.play();startBlinkLivenessLoop();};
    document.getElementById('cam-hint').textContent='Align face in the oval';
  }catch(e){
    const sb=document.getElementById('face-status');
    sb.style.display='flex';sb.className='status warning';
    sb.innerHTML='⚠️ Camera permission denied. Allow camera access and retry.';
  }
}

// ── Face Detection Loop — shows green box, manual capture ──
function startBlinkLivenessLoop(){
  if(liveDetectionLoop) return;
  const video = document.getElementById('video');
  blinkState = {completed:false};
  document.getElementById('liveness-challenge').style.display = 'none';

  let liveCanvas = document.getElementById('live-detect-canvas');
  if(!liveCanvas){
    liveCanvas = document.createElement('canvas');
    liveCanvas.id = 'live-detect-canvas';
    liveCanvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;';
    document.getElementById('cam-wrap').appendChild(liveCanvas);
  }

  liveDetectionLoop = setInterval(async()=>{
    if(!videoStream||!video.srcObject){stopLiveDetection();return;}
    if(video.readyState < 2) return;

    // Lightweight detection — no descriptors needed just for the preview box
    const detection = await faceapi
      .detectSingleFace(video, new faceapi.SsdMobilenetv1Options({minConfidence:0.5}))
      .withFaceLandmarks();

    liveCanvas.width = video.videoWidth;
    liveCanvas.height = video.videoHeight;
    const ctx = liveCanvas.getContext('2d');
    ctx.clearRect(0,0,liveCanvas.width,liveCanvas.height);

    const btn = document.getElementById('capture-btn');

    if(!detection){
      document.getElementById('cam-hint').textContent = 'Align your face in the oval';
      if(btn) btn.disabled = true;
      return;
    }

    // Green box around face
    const W = liveCanvas.width;
    const box = detection.detection.box;
    const mx = W - box.x - box.width;
    ctx.strokeStyle = '#00e5a0';
    ctx.lineWidth = 2.5; ctx.shadowColor = '#00e5a0'; ctx.shadowBlur = 12;
    ctx.strokeRect(mx, box.y, box.width, box.height);

    document.getElementById('cam-hint').textContent = '✓ Face detected — press Capture';
    if(btn) btn.disabled = false;
  }, 150);
}

// Manual capture — triggered by Capture Photo button
async function manualCapture(){
  stopLiveDetection();
  const video = document.getElementById('video');
  const canvas = document.getElementById('canvas-preview');
  const ctx = canvas.getContext('2d');
  const w = video.videoWidth, h = video.videoHeight;
  canvas.width=w; canvas.height=h;
  ctx.save(); ctx.scale(-1,1); ctx.drawImage(video,-w,0,w,h); ctx.restore();
  capturedImage = canvas.toDataURL('image/jpeg',0.92);
  canvas.style.display='block'; video.style.display='none';
  document.getElementById('cam-overlay').innerHTML='<div class="tick-overlay"><div class="tick-circle">✓</div></div>';
  document.getElementById('capture-btn').style.display='none';
  stopCamera();
  await processFace(null);
}

// Called automatically after blink challenge passes
async function captureAndProcess(liveDetection){
  const video=document.getElementById('video');
  const canvas=document.getElementById('canvas-preview');
  const ctx=canvas.getContext('2d');
  const w=video.videoWidth,h=video.videoHeight;
  canvas.width=w;canvas.height=h;
  ctx.save();ctx.scale(-1,1);ctx.drawImage(video,-w,0,w,h);ctx.restore();
  capturedImage=canvas.toDataURL('image/jpeg',0.92);
  canvas.style.display='block';video.style.display='none';
  document.getElementById('cam-overlay').innerHTML='<div class="tick-overlay"><div class="tick-circle">✓</div></div>';
  stopCamera();
  await processFace(liveDetection);
}

function stopLiveDetection(){
  if(liveDetectionLoop){clearInterval(liveDetectionLoop);liveDetectionLoop=null;}
  const lc=document.getElementById('live-detect-canvas');
  if(lc) lc.remove();
}

function retakePhoto(){
  stopCamera();stopLiveDetection();capturedImage=null;blinkState={completed:false,blinkCount:0,eyesWereClosed:false,requiredBlinks:2};
  const canvas=document.getElementById('canvas-preview');
  canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);
  canvas.style.display='none';canvas.width=1;canvas.height=1;
  const video=document.getElementById('video');
  video.srcObject=null;video.style.display='block';
  document.getElementById('cam-overlay').innerHTML='<div class="face-oval"></div>';
  document.getElementById('cam-hint').textContent='Align face in the oval guide';
  document.getElementById('face-status').style.display='none';
  document.getElementById('proceed-face-btn').style.display='none';
  document.getElementById('liveness-challenge').style.display='none';
  const cb=document.getElementById('capture-btn');if(cb){cb.style.display='block';cb.disabled=true;}
  setTimeout(()=>startCamera(),350);
}

function stopCamera(){
  if(videoStream){videoStream.getTracks().forEach(t=>t.stop());videoStream=null;}
}

async function processFace(existingDetection){
  const sb=document.getElementById('face-status');
  sb.style.display='flex';sb.className='status info';
  sb.innerHTML='<div class="spin"></div> Extracting biometric signature...';

  // Use the detection we already have from the live loop (avoids re-detecting)
  let descriptor;
  let confidence;

  if(existingDetection && existingDetection.descriptor){
    descriptor=Array.from(existingDetection.descriptor);
    confidence=Math.round(existingDetection.detection.score*100);
  } else {
    // Fallback: re-detect from captured image
    const img=await loadImageFromDataUrl(capturedImage);
    const detections=await faceapi.detectAllFaces(img,new faceapi.SsdMobilenetv1Options({minConfidence:0.6}))
      .withFaceLandmarks().withFaceDescriptors();
    if(!detections.length){
      sb.className='status error';sb.innerHTML='❌ No face detected. Please retry.';return;
    }
    descriptor=Array.from(detections[0].descriptor);
    confidence=Math.round(detections[0].detection.score*100);
  }

  if(settings.faceDetection){
    sb.innerHTML='<div class="spin"></div> Checking for duplicate faces...';
    const storedFaces=await apiGet('/api/faces')||[];
    let dupFound=false,closestDist=Infinity;
    for(const stored of storedFaces){
      if(normalizePhone(stored.phone)===normalizePhone(currentStudent.phone)) continue;
      if(!stored.descriptor) continue;
      const dist=euclideanDistance(descriptor,stored.descriptor);
      if(dist<closestDist) closestDist=dist;
      if(dist<FACE_MATCH_THRESHOLD){dupFound=true;break;}
    }
    if(dupFound){
      sb.className='status error';
      sb.innerHTML='⛔ This face matches another registered voter. Duplicate voting prevented.';
      document.getElementById('cam-overlay').innerHTML='<div class="tick-overlay"><div class="tick-circle" style="background:var(--error)">⛔</div></div>';
      await logFraud('FACE_DUPLICATE','[hidden]','[hidden]',currentStudent.section,`Distance: ${closestDist.toFixed(3)}`);
      return;
    }
    await apiPost('/api/faces',{phone:normalizePhone(currentStudent.phone),descriptor,capturedAt:new Date().toISOString()});
  }

  sb.className='status success';
  sb.innerHTML=`✅ Liveness + face verified — Confidence: ${confidence}% · No duplicates found`;
  document.getElementById('cam-hint').textContent='✓ Verified';
  document.getElementById('proceed-face-btn').style.display='block';
  await logEvent('FACE_VERIFIED',`Face verified — confidence ${confidence}%`,'🤖');
}

function loadImageFromDataUrl(d){return new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=d;});}
function euclideanDistance(a,b){let s=0;for(let i=0;i<a.length;i++)s+=(a[i]-b[i])**2;return Math.sqrt(s);}
function proceedAfterFace(){stopCamera();stopLiveDetection();renderCandidates();goToStep(5);}

// ════════════════════════════════════════════════════
//  STEP 5 — VOTE
// ════════════════════════════════════════════════════
function renderCandidates(){
  const cands=CANDIDATES[currentSection]||[];
  const grid=document.getElementById('cands-grid');
  if(!cands.length){grid.innerHTML='<div class="status warning">⚠ No candidates configured. Contact admin.</div>';return;}
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
    phone:normalizePhone(currentStudent.phone),name:currentStudent.name,
    section:currentSection,candidateId:selectedCandidate,
    candidateName:cand.name,voteId:'V'+Date.now(),timestamp:new Date().toISOString()
  };
  const result=await apiPost('/api/votes',vote);
  if(result&&result.error==='Already voted'){
    btn.disabled=false;btn.innerHTML='🗳️ Submit My Vote';
    document.getElementById('vote-warn').innerHTML='⛔ Already voted.';
    document.getElementById('vote-warn').style.display='flex';
    return;
  }
  await logEvent('VOTE_CAST',`Anonymous → ${cand.name} (Section ${currentSection})`,'🗳️');
  showReceipt(vote);
  goToStep(6);
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
//  STEP NAVIGATION — 6 steps
// ════════════════════════════════════════════════════
function goToStep(n){
  for(let i=1;i<=TOTAL_STEPS;i++){
    const card=document.getElementById('step'+i);
    const snum=document.getElementById('s'+i);
    const labels=document.querySelectorAll('.step-label');
    card.classList.remove('active');snum.classList.remove('active','done');
    if(i<n){snum.classList.add('done');snum.textContent='✓';}
    else if(i===n){snum.textContent=i;snum.classList.add('active');}
    else{snum.textContent=i;}
    if(labels[i-1]) labels[i-1].classList.toggle('active',i===n);
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

function openAdmin(){document.getElementById('admin-overlay').classList.add('open');if(!adminAuthed)showAuthScreen();else{showAdminUI();showPage('dashboard');}}
function closeAdmin(){document.getElementById('admin-overlay').classList.remove('open');}
function showAuthScreen(){document.getElementById('admin-auth').style.display='block';document.getElementById('admin-sidebar').style.display='none';}
function showAdminUI(){document.getElementById('admin-auth').style.display='none';document.getElementById('admin-sidebar').style.display='flex';}

async function checkPass(){
  const p=document.getElementById('admin-pass').value;
  settings=await loadSettings();
  if(hashStr(p)===settings.adminPass){adminAuthed=true;showAdminUI();showPage('dashboard');await logEvent('ADMIN_LOGIN','Admin panel accessed','🔐');}
  else{document.getElementById('pass-err').style.display='block';await logEvent('ADMIN_FAIL','Wrong password attempt','⚠️');}
}

async function showPage(page){
  document.querySelectorAll('.admin-page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.getElementById('nav-'+page).classList.add('active');
  const renders={dashboard:renderDashboard,results:renderResults,students:renderStudentsTable,faces:renderFacesTable,fraud:renderFraud,logs:renderLogs,candidates:()=>showCandSection(currentCandSection),countdown:renderCountdown};
  if(renders[page]) await renders[page]();
}

async function renderDashboard(){
  settings=await loadSettings();
  const votes=await apiGet('/api/votes')||[];
  const fraud=await apiGet('/api/fraud')||[];
  const av=votes.filter(v=>v.section==='Alpha').length;
  const bv=votes.filter(v=>v.section==='Beta').length;
  document.getElementById('dash-stats').innerHTML=`
    <div class="stat" style="--accent-line:var(--alpha);--accent-text:var(--alpha);"><div class="stat-val">${av}/${ALPHA_STUDENTS.length}</div><div class="stat-label">Alpha Votes</div><div class="progress-track" style="margin-top:0.6rem;"><div class="progress-fill" style="width:${Math.round(av/ALPHA_STUDENTS.length*100)||0}%;background:var(--alpha);"></div></div></div>
    <div class="stat" style="--accent-line:var(--beta);--accent-text:var(--beta);"><div class="stat-val">${bv}/${BETA_STUDENTS.length}</div><div class="stat-label">Beta Votes</div><div class="progress-track" style="margin-top:0.6rem;"><div class="progress-fill" style="width:${Math.round(bv/BETA_STUDENTS.length*100)||0}%;background:var(--beta);"></div></div></div>
    <div class="stat" style="--accent-line:var(--accent3);--accent-text:var(--accent3);"><div class="stat-val">${votes.length}</div><div class="stat-label">Total Votes</div></div>
    <div class="stat" style="--accent-line:var(--error);--accent-text:var(--error);"><div class="stat-val">${fraud.length}</div><div class="stat-label">Fraud Alerts</div></div>
    <div class="stat"><div class="stat-val">${Math.round(votes.length/(ALPHA_STUDENTS.length+BETA_STUDENTS.length)*100)||0}%</div><div class="stat-label">Turnout</div></div>
    <div class="stat" style="--accent-line:var(--success);--accent-text:var(--success);"><div class="stat-val" style="font-size:1.2rem;">${(settings.electionState||'active').toUpperCase()}</div><div class="stat-label">Status</div></div>
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
    return `<div class="bar-item"><div class="bar-label">${c.name}</div><div class="bar-track"><div class="bar-fill" style="width:${Math.round(cnt/max*100)}%;background:${c.color};"></div></div><div class="bar-count">${cnt}</div></div>`;
  }).join('');
}

async function setElectionState(state){settings=await loadSettings();settings.electionState=state;await saveSettings(settings);updateHeaderStatus();await logEvent('ELECTION_STATE_CHANGED',`State: ${state}`,'⚙️');await renderCountdown();}

async function renderCountdown(){
  settings=await loadSettings();
  if(settings.schedStart) document.getElementById('sched-start').value=settings.schedStart;
  if(settings.schedEnd) document.getElementById('sched-end').value=settings.schedEnd;
  const tog=(id,val)=>{const el=document.getElementById(id);if(el)el.classList.toggle('on',!!val);};
  tog('tog-lock',settings.resultsLocked);tog('tog-reveal',settings.manualReveal);
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

function showCandSection(sec){
  currentCandSection=sec;
  document.getElementById('cand-section-title').textContent=`Section ${sec} Candidates`;
  const cands=CANDIDATES[sec]||[];
  document.getElementById('cand-editor-list').innerHTML=cands.map(c=>`
    <div class="cand-editor">
      <div class="cand-editor-avatar" style="background:${c.bg};color:${c.color}">${c.name.charAt(0)}</div>
      <div class="cand-editor-info"><div class="cand-editor-name">${c.name}</div><div class="cand-editor-meta">${c.role} · Section ${sec}</div></div>
      <div class="cand-editor-actions"><button class="btn btn-danger btn-sm" onclick="removeCandidate('${sec}','${c.id}')">✕</button></div>
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
  const col=colors[(CANDIDATES[sec]||[]).length%colors.length];
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
  if(!votes.length){table.innerHTML='<div class="table-empty">No votes yet</div>';return;}
  table.innerHTML=votes.slice().reverse().map(v=>`
    <div class="table-row" style="grid-template-columns:1fr 1fr auto;">
      <div><span class="pill ${v.section.toLowerCase()}">${v.section}</span></div>
      <div>${v.candidateName}</div>
      <div style="color:var(--muted);font-size:0.68rem;">${new Date(v.timestamp).toLocaleTimeString()}</div>
    </div>
  `).join('');
}

async function renderStudentsTable(){
  const secFilter=document.getElementById('student-sec-filter').value;
  const search=document.getElementById('student-search').value.toLowerCase();
  const disabled=await apiGet('/api/disabled')||[];
  const votes=await apiGet('/api/votes')||[];
  const all=[...ALPHA_STUDENTS.map(s=>({...s,section:'Alpha'})),...BETA_STUDENTS.map(s=>({...s,section:'Beta'}))];
  const filtered=all.filter(s=>{
    const matchSec=secFilter==='all'||s.section===secFilter;
    const matchSearch=!search||s.name.toLowerCase().includes(search)||s.phone.includes(search);
    return matchSec&&matchSearch;
  });
  const table=document.getElementById('students-table');
  if(!filtered.length){table.innerHTML='<div class="table-empty">No students found</div>';return;}
  table.innerHTML=filtered.map(s=>{
    const ph=normalizePhone(s.phone);
    const isDisabled=disabled.includes(ph);
    const hasVoted=votes.find(v=>normalizePhone(v.phone)===ph);
    return `<div class="table-row" style="grid-template-columns:1fr auto auto auto;">
      <div>${s.name}<div style="font-size:0.68rem;color:var(--muted);">${s.phone||'—'}</div></div>
      <div><span class="pill ${s.section.toLowerCase()}">${s.section}</span></div>
      <div>${hasVoted?'<span class="pill success">Voted</span>':isDisabled?'<span class="pill danger">Disabled</span>':'<span class="pill muted">Pending</span>'}</div>
      <div><button class="btn btn-ghost btn-sm" style="font-size:0.65rem;padding:0.3rem 0.6rem;" onclick="${isDisabled?`enableVoter('${ph}')`:`disableVoter('${ph}')`}">${isDisabled?'Enable':'Disable'}</button></div>
    </div>`;
  }).join('');
}

async function disableVoter(phone){await apiPost('/api/disabled',{phone});await logEvent('VOTER_DISABLED',`Phone: [hidden]`,'⛔');renderStudentsTable();}
async function enableVoter(phone){await apiDelete('/api/disabled/'+phone);await logEvent('VOTER_ENABLED',`Phone: [hidden]`,'✅');renderStudentsTable();}

async function renderFacesTable(){
  const faces=await apiGet('/api/faces')||[];
  const allStudents=[...ALPHA_STUDENTS,...BETA_STUDENTS];
  const table=document.getElementById('faces-table');
  if(!faces.length){table.innerHTML='<div class="table-empty">No face data stored</div>';return;}
  table.innerHTML=faces.map(f=>{
    const s=allStudents.find(st=>normalizePhone(st.phone)===normalizePhone(f.phone||''));
    const hasDesc=f.descriptor&&f.descriptor.length===128;
    return `<div class="table-row" style="grid-template-columns:1fr auto auto auto;">
      <div>${s?s.name:'Unknown'}</div>
      <div>${hasDesc?'<span class="pill success">128-d ✓</span>':'<span class="pill warning">—</span>'}</div>
      <div style="font-size:0.68rem;color:var(--muted);">${new Date(f.capturedAt).toLocaleString()}</div>
      <div><button class="btn btn-danger btn-sm" style="font-size:0.65rem;padding:0.3rem 0.6rem;" onclick="deleteFace('${f.phone}')">Delete</button></div>
    </div>`;
  }).join('');
}

async function deleteFace(phone){
  const faces=(await apiGet('/api/faces')||[]).filter(f=>f.phone!==phone);
  await apiDelete('/api/faces');
  for(const f of faces) await apiPost('/api/faces',f);
  await logEvent('FACE_DELETED','Face data deleted','🗑️');
  renderFacesTable();
}
async function deleteAllFaces(){if(!confirm('Delete ALL face data?'))return;await apiDelete('/api/faces');await logEvent('ALL_FACES_DELETED','All biometric data cleared','🗑️');renderFacesTable();}

async function logFraud(type,name,phone,section,detail){
  await apiPost('/api/fraud',{type,name,phone,section,detail,timestamp:new Date().toISOString()});
  const fraud=await apiGet('/api/fraud')||[];
  const el=document.getElementById('fraud-badge');if(el)el.textContent=fraud.length;
}

async function renderFraud(){
  const fraud=await apiGet('/api/fraud')||[];
  const stats=document.getElementById('fraud-stats');
  const dv=fraud.filter(f=>f.type==='DUPLICATE_VOTE_ATTEMPT').length;
  const df=fraud.filter(f=>f.type==='FACE_DUPLICATE').length;
  const fi=fraud.filter(f=>f.type==='FAILED_IDENTITY').length;
  stats.innerHTML=`
    <div class="stat" style="--accent-line:var(--error);--accent-text:var(--error);"><div class="stat-val">${dv}</div><div class="stat-label">Duplicate Votes</div></div>
    <div class="stat" style="--accent-line:var(--warning);--accent-text:var(--warning);"><div class="stat-val">${df}</div><div class="stat-label">Face Duplicates</div></div>
    <div class="stat"><div class="stat-val">${fi}</div><div class="stat-label">Failed Identity</div></div>
  `;
  const list=document.getElementById('fraud-list');
  if(!fraud.length){list.innerHTML='<div class="table-empty">✅ No fraud attempts</div>';return;}
  list.innerHTML=`<div class="table-wrap">
    <div class="table-head" style="grid-template-columns:1fr auto auto;"><div>Type</div><div>Section</div><div>Time</div></div>
    ${fraud.slice().reverse().map(f=>`
      <div class="table-row" style="grid-template-columns:1fr auto auto;">
        <div><span class="pill danger">${f.type}</span></div>
        <div><span class="pill ${(f.section||'').toLowerCase()}">${f.section||'—'}</span></div>
        <div style="font-size:0.68rem;color:var(--muted);">${new Date(f.timestamp).toLocaleTimeString()}</div>
      </div>
    `).join('')}
  </div>`;
}

async function logEvent(action,detail,icon='📝'){await apiPost('/api/logs',{action,detail,icon,timestamp:new Date().toISOString()});}
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
async function clearLogs(){await apiDelete('/api/logs');renderLogs();}

async function exportCSV(type){
  let rows=[],header='';
  const votes=await apiGet('/api/votes')||[];
  const fraud=await apiGet('/api/fraud')||[];
  const logs=await apiGet('/api/logs')||[];
  if(type==='full'){
    header='Vote ID,Section,Candidate,Timestamp\n';
    rows=votes.map(v=>`${v.voteId},${v.section},${v.candidateName},${v.timestamp}`);
  }else if(type==='fraud'){
    header='Type,Section,Detail,Timestamp\n';
    rows=fraud.map(f=>`${f.type},${f.section||''},${f.detail},${f.timestamp}`);
  }else if(type==='turnout'){
    header='Section,Total,Votes,Turnout%\n';
    const av=votes.filter(v=>v.section==='Alpha').length;
    const bv=votes.filter(v=>v.section==='Beta').length;
    rows=[`Alpha,${ALPHA_STUDENTS.length},${av},${Math.round(av/ALPHA_STUDENTS.length*100)}%`,
          `Beta,${BETA_STUDENTS.length},${bv},${Math.round(bv/BETA_STUDENTS.length*100)}%`];
  }else if(type==='logs'){
    header='Action,Detail,Timestamp\n';
    rows=logs.map(l=>`${l.action},"${l.detail}",${l.timestamp}`);
  }
  const blob=new Blob([header+rows.join('\n')],{type:'text/csv'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);
  a.download=`cr_election_${type}_${Date.now()}.csv`;a.click();
}

async function toggleSetting(key){
  settings=await loadSettings();settings[key]=!settings[key];await saveSettings(settings);
  const ids={resultsLocked:'tog-lock',manualReveal:'tog-reveal',faceDetection:'tog-face',sessionTimeout:'tog-timeout',privacyNotice:'tog-privacy',autoDeleteFaces:'tog-autodel'};
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
  if(nw.length<6){err.textContent='Min 6 characters';return;}
  settings.adminPass=hashStr(nw);await saveSettings(settings);
  ok.style.display='flex';
  document.getElementById('old-pass').value='';document.getElementById('new-pass').value='';
  await logEvent('PASS_CHANGED','Admin password updated','🔑');
}

async function resetVotes(){
  if(!confirm('Delete ALL votes? Irreversible!'))return;
  await apiDelete('/api/votes');
  await logEvent('VOTES_RESET','All votes cleared','⚠️');
  renderDashboard();
}

function showModal(title,sub,onConfirm){
  document.getElementById('modal-title').textContent=title;
  document.getElementById('modal-sub').textContent=sub;
  document.getElementById('modal-confirm-btn').onclick=()=>{onConfirm();closeModal();};
  document.getElementById('confirm-modal').classList.add('open');
}
function closeModal(){document.getElementById('confirm-modal').classList.remove('open');}
