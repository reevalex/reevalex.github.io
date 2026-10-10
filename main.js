// <!-- EDIT ME: landing intro + what I'm looking for (please confirm wording) -->
const INTRO='AI & data engineer finishing my MSc in AI at Linköping, building Rögle BK’s data platform on the side.';
const LOOKING_FOR='Looking for my next role in AI or data engineering, from 2027 (open to internships and part-time now).';
const C={
 nowaste:{t:'Nowaste Logistics',y:'2016–2021 · Helsingborg',d:'2016',s:'Warehouse',p:'Five years on a warehouse floor taught me how things actually move. Somewhere between the pallets, I started wondering how to make it smarter.'},
 halmstad:{t:'Halmstad University',y:'2022–2025 · BSc Data Science',d:'2022',s:'BSc Data Science',p:'I went back to school to learn how. My thesis asked whether a model could catch rare diseases that are easy to miss.'},
 farjestad:{t:'Färjestad BK',y:'2025–2026 · Data science intern',d:'2025',s:'Data science intern',p:'My first taste of hockey data. I trained an expected-goals model on 1.5 million shots, and it beat the data provider’s own.'},
 liu:{t:'Linköping University',y:'2025–2027 · MSc AI & ML',d:'2025',s:'MSc AI & ML',p:'Wanting to go deeper, I moved to Linköping for a master’s in AI and machine learning.'},
 idainfront:{t:'Ida Infront',y:'Summer 2026 · AI engineering intern',d:'Summer 2026',s:'AI engineering intern',p:'A summer spent teaching AI agents to read business documents and hand back configurations you can actually trust.'},
 rogle:{t:'Rögle BK',y:'2026–now · Software engineer',d:'2026',s:'Software engineer',p:'Back in hockey, this time building Rögle’s data platform from the ground up. This is where the story is now.'}
};
// PLACEHOLDER project images: assets/project-clip.png and assets/project-cbt.png are copies of projects.png. Swap the files to replace.
Object.assign(C,{
 clip:{t:'CLIP for satellite images',y:'Course project · LiU',d:'Project',p:'I fine-tuned CLIP to recognise what satellite images show. It placed first on the course leaderboard for zero-shot classification.',img:'project-clip'},
 cbt:{t:'CBT chatbot with RAG',y:'Course project · LiU',d:'Project',p:'A chatbot for cognitive behavioural therapy that retrieves from trusted material. I evaluated it with an LLM judge and checked that against human ratings.',img:'project-cbt'}
});
const B={
 story:{t:'Story',ids:['nowaste','halmstad','farjestad','liu','idainfront','rogle']},
 projects:{t:'Projects',ids:['clip','cbt']}
};
const NIGHT=new Set(['nowaste','halmstad','farjestad','liu','idainfront','rogle','me']);
const $=s=>document.querySelector(s);
const home=$('#home'),tl=$('#timeline'),strip=$('#strip'),scrub=$('#scrub'),heroImg=$('#heroImg'),hero=$('#hero'),themeBtn=$('#themeBtn'),crumb=$('#crumb'),upBtn=$('#upBtn');
const isDark=()=>document.documentElement.classList.contains('dark');
function setImgEl(el,id){const n=isDark()&&NIGHT.has(id);const src=`assets/${id}${n?'-night':''}.png`;if(el.getAttribute('src')!==src)el.src=src;el.classList.toggle('night',n);el.dataset.imgId=id}
function syncImages(){document.querySelectorAll('img[data-img-id]').forEach(el=>setImgEl(el,el.dataset.imgId))}
Object.keys(C).map(id=>C[id].img||id).concat('me').forEach(id=>{new Image().src=`assets/${id}.png`;if(NIGHT.has(id))new Image().src=`assets/${id}-night.png`});

const I={
 mail:'<path d="M3 6h18v12H3z"/><path d="m3 7 9 6 9-6"/>',
 in:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
 gh:'<path d="M9 19c-4 1.5-4-2-6-2.5m12 4.5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.8 2.8 5.8 3.1 5.8 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
 cv:'<path d="M12 4v11m-5-5 5 5 5-5M5 20h14"/>'};
const svg=(k,s=20)=>`<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[k]}</svg>`;
const LINKS=[['mail','Email','mailto:alexreev.ai@gmail.com',''],['in','LinkedIn','https://linkedin.com/in/alexander-reevcrona','target="_blank" rel="noopener"'],['gh','GitHub','https://github.com/reevalex','target="_blank" rel="noopener"'],['cv','Download CV','Alexander_Reevcrona_CV.pdf','download']];
const contactRow=(cls)=>`<div class="${cls}">${LINKS.map(([k,l,h,a])=>`<a href="${h}" ${a} aria-label="${l}">${svg(k,cls==='mini'?16:20)}<span>${l}</span></a>`).join('')}</div>`;


const flowV=$('#flowView'),flow=$('#flow'),dots=$('#dots');
const RM=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
let secs=[],cur=0,flowB=null,lock=false;
function buildFlow(b){if(flowB===b)return;flowB=b;const ids=B[b].ids;
 flow.innerHTML=ids.map((id,i)=>{const c=C[id];return`<section class="ch" data-i="${i}"><div class="im"><img alt="${c.t}" data-img-id="${c.img||id}"></div><div class="tx"><div class="d">${c.d}</div><h2>${c.t}</h2><div class="sub">${c.y}</div><p class="story">${c.p}</p></div></section>`}).join('')+
 `<section class="ch end" data-i="${ids.length}"><div class="tx"><p class="story close">${b==='story'?'That’s where I am today.':'More on GitHub.'}</p><p class="story seek">Want to talk? I’m reachable below.</p><div class="foot">${contactRow('icons')}<button class="all" data-go="#/">Back to start ↑</button></div></div></section>`;
 secs=[...flow.children];dots.innerHTML=secs.map((_,k)=>`<i data-k="${k}"></i>`).join('');syncImages();
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)setCur(+e.target.dataset.i)}),{root:flow,threshold:.6});secs.forEach(s=>io.observe(s))}
function setCur(i){cur=i;secs.forEach((s,k)=>s.classList.toggle('on',k===i));[...dots.children].forEach((d,k)=>d.classList.toggle('on',k===i));
 const h=hashOf(flowB,i);if(location.hash!==h)history.replaceState(null,'',h);setCrumb(state())}
function scrollTo_(i,inst){i=Math.max(0,Math.min(secs.length-1,i));secs[i].scrollIntoView({behavior:inst||RM()?'instant':'smooth',block:'center'})}
dots.onclick=e=>{const d=e.target.closest('i');if(d)scrollTo_(+d.dataset.k)};
let wl=0;flow.addEventListener('wheel',e=>{if(e.deltaY<0&&flow.scrollTop<=secs[0].offsetTop-flow.clientHeight*.09+4){const n=Date.now();if(n-wl>600){wl=n;e.preventDefault();go('#/')}}},{passive:false});
let ty=0;flow.addEventListener('touchstart',e=>ty=e.touches[0].clientY,{passive:true});
flow.addEventListener('touchend',e=>{if(flow.scrollTop<=secs[0].offsetTop-flow.clientHeight*.09+4&&e.changedTouches[0].clientY-ty>90)go('#/')},{passive:true});

// routes: #/  #b/<branch>[/<id>|/end]
function state(){const m=location.hash.match(/^#b\/(\w+)(?:\/(\w+))?/);if(!m||!B[m[1]])return{v:'land'};const b=m[1],ids=B[b].ids;
 if(!m[2])return{v:'flow',b,i:0};if(m[2]==='end')return{v:'flow',b,i:ids.length};const i=ids.indexOf(m[2]);return{v:'flow',b,i:Math.max(0,i)}}
const hashOf=(b,i)=>i==null?`#b/${b}`:i>=B[b].ids.length?`#b/${b}/end`:`#b/${b}/${B[b].ids[i]}`;
function up(){if(!tlEl.hidden){setTL(false);return}if(state().v==='flow')go('#/')}
document.addEventListener('keydown',e=>{const s=state();if(e.key==='Escape'){up();return}
 if(s.v!=='flow'||!tlEl.hidden)return;
 if(['ArrowDown','PageDown','ArrowRight'].includes(e.key)){e.preventDefault();scrollTo_(cur+1)}
 else if(['ArrowUp','PageUp','ArrowLeft'].includes(e.key)){e.preventDefault();cur===0?go('#/'):scrollTo_(cur-1)}});
upBtn.onclick=up;
document.addEventListener('click',e=>{const b=e.target.closest('[data-go]');if(!b)return;e.preventDefault();const g=b.dataset.go;if(b.dataset.tl!=null){setTL(false);history.replaceState(null,'',g);requestAnimationFrame(()=>scrollTo_(+b.dataset.tl,true));return}go(g)});
// Timeline overview (story only)
const tlEl=$('#tl'),tlBtn=$('#tlBtn');
function setTL(on){flowV.classList.toggle('tlon',on);tlEl.hidden=!on;tlBtn.textContent=on?'Scroll':'Timeline';tlBtn.setAttribute('aria-pressed',on);
 if(on){tlEl.innerHTML=B.story.ids.map((id,i)=>{const c=C[id];return`<button class="tc${i===cur?' on':''}" data-tl="${i}" data-go="${hashOf('story',i)}"><span class="ti"><img alt="" data-img-id="${id}"></span><span class="d">${c.d}</span><span class="tt">${c.t}</span><span class="ts">${c.s}</span></button>`}).join('');syncImages()}}
tlBtn.onclick=()=>setTL(tlEl.hidden);
function go(h){if(location.hash===h){render();return}history.pushState(null,'',h);route()}
function setCrumb(s){if(s.v==='land'){crumb.innerHTML='';upBtn.hidden=true;return}upBtn.hidden=false;const ids=B[s.b].ids;
 const last=s.i>=ids.length?'Contact':C[ids[s.i]].t;
 crumb.innerHTML=`<a href="#/" data-go="#/">Alexander</a><span class="sep">/</span><a href="#b/${s.b}" data-go="${hashOf(s.b,0)}">${B[s.b].t}</a><span class="sep">/</span><span class="here">${last}</span>`;
 document.title=`${last} · Alexander Reevcrona`}
function render(){const s=state();setCrumb(s);
 if(s.v==='flow'){home.hidden=true;flowV.hidden=false;flowV.classList.remove('enter');void flowV.offsetWidth;flowV.classList.add('enter');const ob=flowB;tlBtn.hidden=s.b!=='story';if(ob!==s.b)setTL(false);buildFlow(s.b);
  requestAnimationFrame(()=>{scrollTo_(s.i,true);setCur(s.i)});flow.focus({preventScroll:true});return}
 flowV.hidden=true;home.hidden=false;flowB=null;setTL(false);tlBtn.hidden=true;
 hero.hidden=false;hero.classList.add('bust');setImgEl(heroImg,'me');heroImg.alt='Alexander Reevcrona';
 $('#body').innerHTML=`<h1>Hi, I’m Alexander.</h1><p class="story">${INTRO}</p><p class="story seek">${LOOKING_FOR}</p>
 <div class="cta"><button class="pill primary" data-go="#b/story">Explore my story ↓</button><button class="pill choice" data-go="#b/projects">Projects</button><a class="sec" href="Alexander_Reevcrona_CV.pdf" download>Download CV</a><a class="sec" href="mailto:alexreev.ai@gmail.com">Get in touch</a></div>
`;syncImages();document.title='Alexander Reevcrona'}
function route(){if(document.startViewTransition&&!RM())document.startViewTransition(render);else render()}
addEventListener('popstate',route);
function setTheme(d){document.documentElement.classList.toggle('dark',d);themeBtn.textContent=d?'Light':'Dark';try{localStorage.setItem('theme',d?'dark':'light')}catch(e){}syncImages()}
themeBtn.onclick=()=>{const d=!isDark();document.startViewTransition?document.startViewTransition(()=>setTheme(d)):setTheme(d)};
themeBtn.textContent=isDark()?'Light':'Dark';
render();
