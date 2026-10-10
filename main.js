// All user-facing copy lives here. EN + SV.
const STRINGS={
 en:{
  greet:'Hi, I’m Alexander.',
  intro:'AI & ML Engineer · MSc in Computer Science at Linköping\u00a0University.',
  looking:'Looking for a master’s thesis and roles in AI/ML for 2027.',
  cardStory:'My story',cardProjects:'Projects',
  bStory:'Story',bProjects:'Projects',contact:'Contact',
  endStory:'That’s where I am today.',more:'More',seeProj:'See projects →',prevP:'Previous',nextP:'More about this chapter',endProjects:'',
  seek:'Want to talk? I’m reachable below.',backStart:'Back to start ↑',
  email:'Email',linkedin:'LinkedIn',github:'GitHub',cv:'CV',
  back:'Back (Esc)',breadcrumb:'Breadcrumb',storyView:'Story view',scrollView:'Scroll view',timeline:'Timeline overview',chapters:'Chapters',
  toDark:'Switch to dark theme',toLight:'Switch to light theme',darkT:'Dark theme',lightT:'Light theme',
  langBtn:'SV',langLabel:'Byt till svenska',
  desc:'Alexander Reevcrona went from a warehouse floor to building data and AI for hockey clubs.',
  c:{
   nowaste:{t:'Nowaste Logistics',y:'2016–2021 · Helsingborg',d:'2016',s:'Warehouse',p:'Five years on a warehouse floor taught me how things actually move. Somewhere between the pallets, I started wondering how to make it smarter.',x:[{l:'What I did',p:'I started out picking orders. Later I shared responsibility for goods receiving at Trademax’s warehouse, making sure what came in was right before it went anywhere else.'},{l:'What it taught me',p:'Operations run on flow and reliability. When one step stalls, everything behind it waits. Seeing that up close is why I wanted to build the systems, not just work inside them.'}]},
   halmstad:{t:'Halmstad University',y:'2022–2025 · BSc Data Science',d:'2022',s:'BSc Data Science',p:'I went back to school to learn how. My thesis asked whether a model could catch rare diseases that are easy to miss.',x:[{l:'The thesis',p:'I predicted rare diseases from patient records in MIMIC-III. Switching to a specialised loss, Asymmetric Loss, raised F1 on the rare diagnoses from 0.136 to 0.220.',k:['MIMIC-III','Asymmetric Loss','Multi-label']},{l:'Along the way',p:'Along the way I received scholarships from Getinge Sterilization and Sparbanksstiftelsen Kronan, which helped me go all in on my studies.'}]},
   farjestad:{t:'Färjestad BK',y:'2025–2026 · Data science intern',d:'2025',s:'Data science intern',p:'My first taste of hockey data. I trained an expected-goals model on 1.5 million shots, and it beat the data provider’s own.',x:[{l:'The model',p:'I built an expected goals model on 1.5 million shots, with features for shot location, shot type, game state and the play leading up to it. It beat the provider’s model.',k:['xG','1.5M shots','Python']},{l:'Doing it right',p:'I tested feature groups one at a time to see what really helped, and removed flags that quietly leaked the outcome. A model that cheats only looks good.'},{l:'Off the ice',p:'Off the ice, I set up an hourly Azure pipeline that fed ticket sales into Power BI.',k:['Azure','Power BI']}]},
   liu:{t:'Linköping University',y:'2025–2027 · MSc AI & ML',d:'2025',s:'MSc AI & ML',p:'Wanting to go deeper, I moved to Linköping for a master’s in AI and machine learning.',x:[{l:'Focus',p:'My courses centre on deep learning, NLP, AI robotics, big data and distributed systems.',k:['Deep learning','NLP','Robotics','Distributed systems']},{l:'Side quests',p:'Along the way I fine-tuned CLIP for satellite images and built a CBT chatbot grounded in trusted material.',go:1}]},
   idainfront:{t:'Ida Infront',y:'Summer 2026 · AI engineering intern',d:'Summer 2026',s:'AI engineering intern',p:'A summer spent teaching AI agents to read business documents and hand back configurations you can actually trust.',x:[{l:'The system',p:'In a team of two, I built a multi-agent system in LangGraph, integrated into the product. Users upload business documents, chat, and get a verified configuration package back.',k:['LangGraph','Multi-agent','LLMs']},{l:'The trick',p:'The agents never write XML. They write a validated spec, and rule-based templates turn it into XML. The LLM does the thinking; the templates guarantee the format.'}]},
   rogle:{t:'Rögle BK',y:'2026–now · Software engineer',d:'2026',s:'Software engineer',p:'Back in hockey, this time building Rögle’s data platform from the ground up. This is where the story is now.',x:[{l:'The platform',p:'I’m building it in Python with FastAPI, Postgres and DuckDB. It holds tracking data from SHL and HockeyAllsvenskan games, along with player careers.',k:['Python','FastAPI','Postgres','DuckDB']},{l:'Built to last',p:'A nightly pipeline stores every raw API response and rebuilds the database from that archive. Players are linked across two data providers, so one person is one record.'}]},
   clip:{t:'CLIP for satellite images',y:'Course project · LiU',d:'Project',p:'I fine-tuned CLIP to recognise what satellite images show. It placed first on the course leaderboard for zero-shot classification.'},
   cbt:{t:'CBT chatbot with RAG',y:'Course project · LiU',d:'Project',p:'A chatbot for cognitive behavioural therapy that retrieves from trusted material. I evaluated it with an LLM judge and checked that against human ratings.'}
  }},
 sv:{
  greet:'Hej, jag heter Alexander.',
  intro:'AI- & ML-ingenjör · Masterstudent i datavetenskap vid Linköpings\u00a0universitet.',
  looking:'Söker exjobb och roller inom AI/ML till 2027.',
  cardStory:'Min historia',cardProjects:'Projekt',
  bStory:'Historia',bProjects:'Projekt',contact:'Kontakt',
  endStory:'Det är där jag är i dag.',more:'Mer',seeProj:'Se projekt →',prevP:'Föregående',nextP:'Mer om det här kapitlet',endProjects:'',
  seek:'Vill du prata? Du når mig här nedanför.',backStart:'Tillbaka till början ↑',
  email:'E-post',linkedin:'LinkedIn',github:'GitHub',cv:'CV',
  back:'Tillbaka (Esc)',breadcrumb:'Brödsmulor',storyView:'Visningsläge',scrollView:'Scrollvy',timeline:'Tidslinje',chapters:'Kapitel',
  toDark:'Byt till mörkt tema',toLight:'Byt till ljust tema',darkT:'Mörkt tema',lightT:'Ljust tema',
  langBtn:'EN',langLabel:'Switch to English',
  desc:'Alexander Reevcrona gick från ett lagergolv till att bygga data och AI för hockeyklubbar.',
  c:{
   nowaste:{t:'Nowaste Logistics',y:'2016–2021 · Helsingborg',d:'2016',s:'Lager',p:'Fem år på ett lagergolv lärde mig hur saker faktiskt rör sig. Någonstans mellan pallarna började jag fundera på hur det kunde göras smartare.',x:[{l:'Vad jag gjorde',p:'Jag började med orderplock. Senare delade jag ansvaret för godsmottagningen på Trademax lager och såg till att det som kom in stämde innan det gick vidare.'},{l:'Vad det lärde mig',p:'Drift handlar om flöde och pålitlighet. När ett steg stannar väntar allt bakom. Att se det på nära håll fick mig att vilja bygga systemen, inte bara arbeta i dem.'}]},
   halmstad:{t:'Högskolan i Halmstad',y:'2022–2025 · Kandidat i data science',d:'2022',s:'Kandidat i data science',p:'Jag gick tillbaka till skolan för att lära mig hur. Mitt examensarbete undersökte om en modell kunde upptäcka sällsynta sjukdomar som är lätta att missa.',x:[{l:'Examensarbetet',p:'Jag förutsade sällsynta sjukdomar utifrån patientjournaler i MIMIC-III. Med en specialiserad förlustfunktion, Asymmetric Loss, steg F1 för de sällsynta diagnoserna från 0,136 till 0,220.',k:['MIMIC-III','Asymmetric Loss','Multi-label']},{l:'På vägen',p:'Under studierna fick jag stipendier från Getinge Sterilization och Sparbanksstiftelsen Kronan, vilket hjälpte mig att satsa fullt på studierna.'}]},
   farjestad:{t:'Färjestad BK',y:'2025–2026 · Praktikant inom data science',d:'2025',s:'Praktikant, data science',p:'Mitt första möte med hockeydata. Jag tränade en expected goals-modell på 1,5 miljoner skott, och den slog dataleverantörens egen.',x:[{l:'Modellen',p:'Jag byggde en expected goals-modell på 1,5 miljoner skott, med features för skottplats, skottyp, spelläge och spelet före skottet. Den slog leverantörens modell.',k:['xG','1,5 milj. skott','Python']},{l:'Att göra rätt',p:'Jag testade featuregrupper en i taget för att se vad som verkligen hjälpte, och tog bort flaggor som i smyg avslöjade utfallet. En modell som fuskar ser bara bra ut.'},{l:'Utanför isen',p:'Utanför isen satte jag upp en Azure-pipeline som varje timme matade biljettförsäljningen in i Power BI.',k:['Azure','Power BI']}]},
   liu:{t:'Linköpings universitet',y:'2025–2027 · Master i AI & ML',d:'2025',s:'Master i AI & ML',p:'Jag ville gå djupare, så jag flyttade till Linköping för en master i AI och maskininlärning.',x:[{l:'Inriktning',p:'Mina kurser kretsar kring djupinlärning, NLP, AI-robotik, big data och distribuerade system.',k:['Djupinlärning','NLP','Robotik','Distribuerade system']},{l:'Sidospår',p:'På vägen finjusterade jag CLIP för satellitbilder och byggde en KBT-chattbot som hämtar från pålitligt material.',go:1}]},
   idainfront:{t:'Ida Infront',y:'Sommaren 2026 · Praktikant inom AI-utveckling',d:'Sommaren 2026',s:'Praktikant, AI-utveckling',p:'En sommar där jag lärde AI-agenter att läsa affärsdokument och lämna tillbaka konfigurationer man faktiskt kan lita på.',x:[{l:'Systemet',p:'I ett team på två byggde jag ett multiagentsystem i LangGraph, integrerat i produkten. Användare laddar upp affärsdokument, chattar och får tillbaka ett verifierat konfigurationspaket.',k:['LangGraph','Multiagent','LLM']},{l:'Knepet',p:'Agenterna skriver aldrig XML. De skriver en validerad specifikation, och regelbaserade mallar gör om den till XML. Språkmodellen tänker, mallarna garanterar formatet.'}]},
   rogle:{t:'Rögle BK',y:'2026–nu · Mjukvaruutvecklare',d:'2026',s:'Mjukvaruutvecklare',p:'Tillbaka i hockeyn, den här gången för att bygga Rögles dataplattform från grunden. Det är här historien är nu.',x:[{l:'Plattformen',p:'Jag bygger den i Python med FastAPI, Postgres och DuckDB. Den rymmer trackingdata från matcher i SHL och HockeyAllsvenskan, och spelarnas karriärer.',k:['Python','FastAPI','Postgres','DuckDB']},{l:'Byggd för att hålla',p:'En nattlig pipeline sparar varje rått API-svar och bygger om databasen från det arkivet. Spelare kopplas ihop mellan två dataleverantörer, så en person blir en post.'}]},
   clip:{t:'CLIP för satellitbilder',y:'Kursprojekt · LiU',d:'Projekt',p:'Jag finjusterade CLIP för att känna igen vad satellitbilder visar. Det hamnade först på kursens topplista för zero-shot-klassificering.'},
   cbt:{t:'KBT-chattbot med RAG',y:'Kursprojekt · LiU',d:'Projekt',p:'En chattbot för kognitiv beteendeterapi som hämtar från pålitligt material. Jag utvärderade den med en LLM-domare och jämförde det mot mänskliga bedömningar.'}
  }}
};
let LANG=document.documentElement.lang==='sv'?'sv':'en';
const T=()=>STRINGS[LANG];
// PLACEHOLDER project images: assets/project-clip.png and assets/project-cbt.png are copies of projects.png.
const IMG={clip:'project-clip',cbt:'project-cbt'};
const C=new Proxy({},{get:(_,id)=>T().c[id]&&Object.assign({img:IMG[id]},T().c[id]),ownKeys:()=>Object.keys(STRINGS.en.c),getOwnPropertyDescriptor:()=>({enumerable:true,configurable:true})});
const B={
 story:{get t(){return T().bStory},ids:['nowaste','halmstad','farjestad','liu','idainfront','rogle']},
 projects:{get t(){return T().bProjects},ids:['clip','cbt']}
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
const LINKS=[['mail','email','mailto:alexreev.ai@gmail.com',''],['in','linkedin','https://linkedin.com/in/alexander-reevcrona','target="_blank" rel="noopener"'],
 // GitHub link: re-enable later -> ['gh','github','https://github.com/reevalex','target="_blank" rel="noopener"'],
 ['cv','cv','Alexander_Reevcrona_CV.pdf','download']];
const contactRow=(cls)=>`<div class="${cls}">${LINKS.map(([k,l,h,a])=>`<a href="${h}" ${a} aria-label="${T()[l]}">${svg(k,cls==='mini'?16:20)}<span>${T()[l]}</span></a>`).join('')}</div>`;


const flowV=$('#flowView'),flow=$('#flow'),dots=$('#dots');
const RM=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
let secs=[],cur=0,flowB=null,lock=false;
function buildFlow(b,force){if(flowB===b&&!force)return;flowB=b;const ids=B[b].ids;
 flow.innerHTML=ids.map((id,i)=>{const c=C[id];const x=c.x||[],n=x.length+1;const p0=`<div class="tx"><div class="d">${c.d}</div><h2>${c.t}</h2><div class="sub">${c.y}</div><p class="story">${c.p}</p></div>`;
 if(!x.length)return`<section class="ch" data-i="${i}"><div class="im"><img alt="${c.t}" data-img-id="${c.img||id}"></div>${p0}</section>`;
 return`<section class="ch hp" data-i="${i}" data-n="${n}" data-p="0"><div class="im"><img alt="${c.t}" data-img-id="${c.img||id}"></div><div class="vp"><div class="trk"><div class="pn">${p0}</div>${x.map((q,j)=>`<div class="pn" aria-hidden="true"><div class="tx"><div class="pl">${q.l}</div><p class="story">${q.p}</p>${q.k?`<div class="tags">${q.k.map(t=>`<span>${t}</span>`).join('')}</div>`:''}${q.go?`<button class="seep" data-go="#b/projects" tabindex="-1">${T().seeProj}</button>`:''}</div></div>`).join('')}</div>
 <button class="chev l" data-pm="-1" aria-label="${T().prevP}" tabindex="-1"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg></button><button class="chev r" data-pm="1" aria-label="${T().nextP}"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg></button></div>
 <div class="pd">${Array.from({length:n},(_,k)=>`<i data-pk="${k}"${k?'':' class="on"'}></i>`).join('')}${i===0&&b==='story'?`<button class="more" data-pm="1">${T().more} →</button>`:''}</div></section>`}).join('')+
 `<section class="ch end" data-i="${ids.length}"><div class="tx"><p class="story close">${b==='story'?T().endStory:T().endProjects /* was 'More on GitHub.' - re-enable later */}</p><p class="story seek">${T().seek}</p><div class="foot">${contactRow('icons')}<button class="all" data-go="#/">${T().backStart}</button></div></div></section>`;
 secs=[...flow.children];dots.innerHTML=secs.map((_,k)=>`<i data-k="${k}"></i>`).join('');syncImages();
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)setCur(+e.target.dataset.i)}),{root:flow,threshold:.6});secs.forEach(s=>io.observe(s))}
function setP(sec,p){if(!sec||!sec.classList.contains('hp'))return false;const n=+sec.dataset.n;p=Math.max(0,Math.min(n-1,p));if(p===+sec.dataset.p)return false;sec.dataset.p=p;
 sec.classList.toggle('deep',p>0);sec.querySelector('.trk').style.transform=`translateX(${-p*100}%)`;
 sec.querySelectorAll('.pn').forEach((e,k)=>{e.setAttribute('aria-hidden',k!==p);e.querySelectorAll('button').forEach(b=>b.tabIndex=k===p?0:-1)});
 sec.querySelectorAll('.pd i').forEach((e,k)=>e.classList.toggle('on',k===p));sec.querySelector('.chev.l').tabIndex=p?0:-1;sec.querySelector('.chev.r').tabIndex=p<n-1?0:-1;
 sec.classList.add('seen');return true}
const P=d=>setP(secs[cur],(+(secs[cur]&&secs[cur].dataset.p)||0)+d);
flow.addEventListener('click',e=>{const b=e.target.closest('[data-pm],[data-pk]');if(!b)return;const sec=b.closest('.ch');if(+sec.dataset.i!==cur){scrollTo_(+sec.dataset.i);return}
 b.dataset.pk!=null?setP(sec,+b.dataset.pk):P(+b.dataset.pm)});
let hw=0;flow.addEventListener('wheel',e=>{if(Math.abs(e.deltaX)>Math.abs(e.deltaY)*1.2&&Math.abs(e.deltaX)>8){e.preventDefault();const n=Date.now();if(n-hw>650){hw=n;P(e.deltaX>0?1:-1)}}},{passive:false});
let tx0=0,ty0=0;flow.addEventListener('touchstart',e=>{tx0=e.touches[0].clientX;ty0=e.touches[0].clientY},{passive:true});
flow.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-tx0,dy=e.changedTouches[0].clientY-ty0;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.5)P(dx<0?1:-1)},{passive:true});
function setCur(i){if(i!==cur)secs.forEach((s,k)=>{if(k!==i)setP(s,0)});cur=i;secs.forEach((s,k)=>s.classList.toggle('on',k===i));[...dots.children].forEach((d,k)=>d.classList.toggle('on',k===i));
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
function up(){if(!tlEl.hidden){setTL(false);return}if(state().v==='flow'&&setP(secs[cur],0))return;if(state().v==='flow')go('#/')}
document.addEventListener('keydown',e=>{const s=state();if(e.key==='Escape'){up();return}
 if(s.v!=='flow'||!tlEl.hidden)return;
 if(e.key==='ArrowRight'){e.preventDefault();P(1)}else if(e.key==='ArrowLeft'){e.preventDefault();P(-1)}
 else if(['ArrowDown','PageDown'].includes(e.key)){e.preventDefault();scrollTo_(cur+1)}
 else if(['ArrowUp','PageUp'].includes(e.key)){e.preventDefault();cur===0?go('#/'):scrollTo_(cur-1)}});
upBtn.onclick=up;
document.addEventListener('click',e=>{const b=e.target.closest('[data-go]');if(!b)return;e.preventDefault();const g=b.dataset.go;if(b.dataset.tl!=null){setTL(false);history.replaceState(null,'',g);requestAnimationFrame(()=>scrollTo_(+b.dataset.tl,true));return}go(g)});
// Timeline overview (story only)
const tlEl=$('#tl'),seg=$('#seg'),segS=$('#segScroll'),segT=$('#segTl');
function setTL(on){flowV.classList.toggle('tlon',on);tlEl.hidden=!on;segT.setAttribute('aria-pressed',on);segS.setAttribute('aria-pressed',!on);
 if(on){tlEl.innerHTML=B.story.ids.map((id,i)=>{const c=C[id];return`<button class="tc${i===cur?' on':''}" data-tl="${i}" data-go="${hashOf('story',i)}"><span class="ti"><img alt="" data-img-id="${id}"></span><span class="d">${c.d}</span><span class="tt">${c.t}</span><span class="ts">${c.s}</span></button>`}).join('');syncImages()}}
segT.onclick=()=>setTL(true);segS.onclick=()=>{if(!tlEl.hidden){setTL(false);requestAnimationFrame(()=>scrollTo_(cur,true))}};
function go(h){if(location.hash===h){render();return}history.pushState(null,'',h);route()}
function setCrumb(s){if(s.v==='land'){crumb.innerHTML='';upBtn.hidden=true;return}upBtn.hidden=false;const ids=B[s.b].ids;
 const last=s.i>=ids.length?T().contact:C[ids[s.i]].t;
 crumb.innerHTML=`<a href="#/" data-go="#/">Alexander</a><span class="sep">/</span><a href="#b/${s.b}" data-go="${hashOf(s.b,0)}">${B[s.b].t}</a><span class="sep">/</span><span class="here">${last}</span>`;
 document.title=`${last} · Alexander Reevcrona`}
function render(){const s=state();setCrumb(s);
 if(s.v==='flow'){home.hidden=true;flowV.hidden=false;flowV.classList.remove('enter');void flowV.offsetWidth;flowV.classList.add('enter');const ob=flowB;seg.hidden=s.b!=='story';if(ob!==s.b)setTL(false);buildFlow(s.b);
  requestAnimationFrame(()=>{scrollTo_(s.i,true);setCur(s.i)});flow.focus({preventScroll:true});return}
 flowV.hidden=true;home.hidden=false;flowB=null;setTL(false);seg.hidden=true;
 hero.hidden=false;hero.classList.add('bust');setImgEl(heroImg,'me');heroImg.alt='Alexander Reevcrona';
 $('#body').innerHTML=`<h1>${T().greet}</h1><p class="story">${T().intro}</p><p class="story seek">${T().looking}</p>
 <div class="cards"><button class="card" data-go="#b/story"><span class="cim"><img alt="" data-img-id="card-story" data-fb="rogle"></span><span class="ct">${T().cardStory}</span></button><button class="card" data-go="#b/projects"><span class="cim"><img alt="" data-img-id="card-projects" data-fb="projects"></span><span class="ct">${T().cardProjects}</span></button></div>
 <div class="foot land">${contactRow('icons')}</div>
`;document.querySelectorAll('img[data-fb]').forEach(el=>el.onerror=()=>{el.onerror=null;setImgEl(el,el.dataset.fb)});syncImages();document.title='Alexander Reevcrona'}
function route(){if(document.startViewTransition&&!RM())document.startViewTransition(render);else render()}
addEventListener('popstate',route);
const SUN='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',MOON='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>';
function themeIcon(){const d=isDark();themeBtn.innerHTML=d?SUN:MOON;themeBtn.setAttribute('aria-label',d?T().toLight:T().toDark);themeBtn.title=d?T().lightT:T().darkT}
function setTheme(d){document.documentElement.classList.toggle('dark',d);themeIcon();try{localStorage.setItem('theme',d?'dark':'light')}catch(e){}syncImages()}
themeBtn.onclick=()=>{const d=!isDark();document.startViewTransition?document.startViewTransition(()=>setTheme(d)):setTheme(d)};
const langBtn=$('#langBtn');
function applyStatic(){const t=T();document.documentElement.lang=LANG;langBtn.textContent=t.langBtn;langBtn.setAttribute('aria-label',t.langLabel);langBtn.title=t.langLabel;langBtn.setAttribute('lang',LANG==='sv'?'en':'sv');
 upBtn.setAttribute('aria-label',t.back);upBtn.title=t.back;crumb.setAttribute('aria-label',t.breadcrumb);seg.setAttribute('aria-label',t.storyView);
 segS.setAttribute('aria-label',t.scrollView);segS.title=t.scrollView;segT.setAttribute('aria-label',t.timeline);segT.title=t.timeline;
 flow.setAttribute('aria-label',t.chapters);tlEl.setAttribute('aria-label',t.timeline);document.querySelector('meta[name=description]').content=t.desc;themeIcon()}
function setLang(l){LANG=l;try{localStorage.setItem('lang',l)}catch(e){}applyStatic();const s=state();
 if(s.v==='flow'){const keep=cur,tlOn=!tlEl.hidden,top=flow.scrollTop,kp=+(secs[cur]&&secs[cur].dataset.p)||0;buildFlow(s.b,true);flow.scrollTop=top;setCur(keep);setP(secs[keep],kp);if(tlOn)setTL(true)}else render()}
langBtn.onclick=()=>setLang(LANG==='sv'?'en':'sv');
applyStatic();
render();
