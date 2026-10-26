const lightbox=document.querySelector('.lightbox');
const lightboxImage=lightbox.querySelector('img');
function openImage(src,alt){lightboxImage.src=src;lightboxImage.alt=alt||'作品大图预览';lightbox.showModal()}
document.querySelectorAll('[data-open]').forEach(button=>button.addEventListener('click',()=>openImage(button.dataset.open,'作品大图')));
lightbox.querySelector('button').addEventListener('click',()=>lightbox.close());
lightbox.addEventListener('click',event=>{if(event.target===lightbox)lightbox.close()});

const loader=document.querySelector('.site-loader');
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(loader&&!reduceMotion){
  const loaderValue=loader.querySelector('strong');let progress=0;
  const loaderTimer=setInterval(()=>{progress=Math.min(100,progress+Math.max(2,Math.ceil((100-progress)/6)));loaderValue.textContent=`${progress}%`;loader.style.setProperty('--load',`${progress}%`);if(progress>=100){clearInterval(loaderTimer);setTimeout(()=>loader.classList.add('done'),120)}},35);
  setTimeout(()=>{clearInterval(loaderTimer);loaderValue.textContent='100%';loader.style.setProperty('--load','100%');loader.classList.add('done')},1400);
}else loader?.classList.add('done');
const heroFrames=[...document.querySelectorAll('.hero-reel img')];let heroFrame=0;
if(heroFrames.length>1&&!reduceMotion)setInterval(()=>{if(document.hidden||document.querySelector('dialog[open]'))return;heroFrames[heroFrame].classList.remove('active');heroFrame=(heroFrame+1)%heroFrames.length;heroFrames[heroFrame].classList.add('active')},5200);
const rail=document.querySelector('.rail');const navLinks=[...document.querySelectorAll('.rail nav a')];const navSections=navLinks.map(link=>document.querySelector(link.getAttribute('href'))).filter(Boolean);
function updatePageChrome(){const top=document.documentElement.scrollTop;const max=document.documentElement.scrollHeight-innerHeight;document.querySelector('.scroll-progress').style.width=`${max>0?top/max*100:0}%`;rail?.classList.toggle('scrolled',top>20);let current=navSections[0];for(const section of navSections){if(section.getBoundingClientRect().top<=innerHeight*.42)current=section}navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${current?.id}`))}
addEventListener('scroll',updatePageChrome,{passive:true});updatePageChrome();

const asset=path=>`assets/${path}`;
const seq=(folder,prefix,count,extension='jpg')=>Array.from({length:count},(_,i)=>asset(`projects/${folder}/${prefix}-${String(i+1).padStart(2,'0')}.${extension}`));
const projects={
  editorialWanchuanghui:{title:'上海万创汇产品手册',description:'48 页 · 封面、公司介绍、目录、产品资料与封底 · 按原 PDF 顺序展示',images:seq('catalog/wanchuanghui','page',48)},
  editorialBeauty:{title:'护肤品产品手册',description:'28 页原稿 · 封面与内页 · 按原稿顺序展示',images:seq('catalog','manual',28)},
  aiconMarketingArchive:{title:'i-AICON · 活动与节日海报',description:'i-AICON 品牌应用与商业物料 / 海报设计',images:[...seq('poster-activity','poster-activity',6),...seq('poster-holiday','poster-holiday',4)]},
  aiconBrandSheets:{title:'i-AICON · 品牌宣传单页',description:'i-AICON 品牌应用与商业物料 / 产品与品牌信息',images:seq('brand','brand',6)},
  aiconProductVisuals:{title:'i-AICON · 电商产品视觉',description:'i-AICON 品牌应用与商业物料 / 产品展示与推广',images:[asset('projects/product/product-01.png'),asset('projects/product/product-04.jpg')]},
  beautyCommerce:{title:'护肤品传播与电商详情',description:'手机与网页场景模拟后接海报原稿及完整长图详情',images:[asset('projects/beauty-detail/beauty-detail-scene-01.png'),...seq('beauty-poster','beauty-poster',7),...seq('beauty-detail','beauty-detail',5)]},
  packagingProduct:{title:'包装与产品视觉',description:'品牌包装原稿、应用示意与产品视觉',images:[asset('projects/packaging/packaging-scene-01.png'),...seq('packaging','packaging',3),asset('projects/product/product-02.jpg'),asset('projects/product/product-03.jpg')]},
  terminalSpace:{title:'终端空间物料',description:'补充能力 · 展示物料 · 终端应用',images:[1,2,3,7].map(i=>asset(`projects/space/space-${String(i).padStart(2,'0')}.jpg`))},
  interfaceFlow:{title:'界面与流程展示',description:'设备场景模拟后接界面方案与流程原稿',images:[asset('projects/ui/ui-scene-01.png'),...[1,2,3,6,9,12].map(i=>asset(`projects/ui/ui-${String(i).padStart(2,'0')}.jpg`))]},
  aiconLeafletCB:{title:'CB435A 产品单页',description:'产品宣传单页 · 正面与反面',images:[asset('projects/aicon/15-leaflet-single-front.jpg'),asset('projects/aicon/15-leaflet-single-back.jpg')],fullImages:[asset('projects/aicon/full/15-leaflet-single-front.jpg'),asset('projects/aicon/full/15-leaflet-single-back.jpg')]},
  aiconLeafletStandard:{title:'产品宣传单页',description:'产品信息整理 · 正面与反面',images:[asset('projects/aicon/21-leaflet-standard-front.jpg'),asset('projects/aicon/21-leaflet-standard-back.jpg')],fullImages:[asset('projects/aicon/full/21-leaflet-standard-front.jpg'),asset('projects/aicon/full/21-leaflet-standard-back.jpg')]},
  aiconLeafletVietnam:{title:'越南语产品单页',description:'海外宣传 · 正面与反面',images:[asset('projects/aicon/22-leaflet-vietnam-front.jpg'),asset('projects/aicon/22-leaflet-vietnam-back.jpg')],fullImages:[asset('projects/aicon/full/22-leaflet-vietnam-front.jpg'),asset('projects/aicon/full/22-leaflet-vietnam-back.jpg')]},
  aiconLeafletTrifold:{title:'三折页',description:'产品宣传三折页 · 正面与反面',images:[asset('projects/aicon/16-leaflet-trifold-front.jpg'),asset('projects/aicon/17-leaflet-trifold-back.jpg')],fullImages:[asset('projects/aicon/full/16-leaflet-trifold-front.jpg'),asset('projects/aicon/full/17-leaflet-trifold-back.jpg')]},
  aiconLeafletFourfold:{title:'异形四折页',description:'波浪异形结构 · 正面与反面',images:[asset('projects/aicon/18-leaflet-fourfold-front.png'),asset('projects/aicon/19-leaflet-fourfold-back.png')],fullImages:[asset('projects/aicon/full/18-leaflet-fourfold-front.png'),asset('projects/aicon/full/19-leaflet-fourfold-back.png')]}
};

const gallery=document.querySelector('.project-gallery');
document.querySelectorAll('dialog img,.directory-grid img,.contact img').forEach(image=>{image.loading='lazy';image.decoding='async'});
const stageImage=gallery.querySelector('.gallery-stage img');
const thumbs=gallery.querySelector('.gallery-thumbs');
let currentProject='';let currentIndex=0;
function renderGallery(){
  const item=projects[currentProject];
  stageImage.src=item.images[currentIndex];stageImage.dataset.full=item.fullImages?.[currentIndex]||'';stageImage.alt=`${item.title} 第${currentIndex+1}张`;
  gallery.querySelector('.gallery-count').textContent=`PROJECT GALLERY · ${String(currentIndex+1).padStart(2,'0')} / ${String(item.images.length).padStart(2,'0')}`;
  thumbs.querySelectorAll('button').forEach((button,index)=>{button.classList.toggle('active',index===currentIndex);button.setAttribute('aria-current',index===currentIndex?'true':'false')});
  thumbs.children[currentIndex]?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'nearest',inline:'center'});
}
function openProject(key){
  currentProject=key;currentIndex=0;const item=projects[key];
  if(!item){console.warn(`Unknown project: ${key}`);return}
  gallery.querySelector('h2').textContent=item.title;gallery.querySelector('.gallery-description').textContent=item.description;thumbs.innerHTML='';
  item.images.forEach((src,index)=>{const button=document.createElement('button');button.setAttribute('aria-label',`查看第${index+1}张`);const image=document.createElement('img');image.src=src;image.alt='';image.loading='lazy';button.appendChild(image);button.addEventListener('click',()=>{currentIndex=index;renderGallery()});thumbs.appendChild(button)});
  renderGallery();gallery.showModal();
}

const study=document.querySelector('.aicon-study');
const studyScroll=study.querySelector('.study-scroll');
const studySections=[...study.querySelectorAll('.case-section')];
const studyButtons=[...study.querySelectorAll('.study-nav button')];
function animateStudyMetrics(){
  study.querySelectorAll('[data-value]').forEach(node=>{const target=Number(node.dataset.value);const suffix=node.dataset.suffix||'';const start=performance.now();const duration=900;const tick=now=>{const p=Math.min(1,(now-start)/duration);node.textContent=`${Math.round(target*(1-Math.pow(1-p,3)))}${suffix}`;if(p<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)});
}
function updateStudyProgress(){
  const max=studyScroll.scrollHeight-studyScroll.clientHeight;const ratio=max>0?studyScroll.scrollTop/max:0;
  study.querySelector('.study-progress i').style.width=`${ratio*100}%`;
  let active=studySections[0];for(const section of studySections){if(section.getBoundingClientRect().top<window.innerHeight*.42)active=section}
  studyButtons.forEach(button=>button.classList.toggle('active',button.dataset.target===active.id));
}
function openAiconStudy(){
  study.showModal();studyScroll.scrollTop=0;animateStudyMetrics();updateStudyProgress();
  const items=study.querySelectorAll('.reveal-case');items.forEach(item=>item.classList.add('case-pending'));
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('case-pending');observer.unobserve(entry.target)}}),{root:studyScroll,rootMargin:'0px 0px -8% 0px',threshold:.08});items.forEach(item=>observer.observe(item))}else items.forEach(item=>item.classList.remove('case-pending'));
}
document.querySelectorAll('[data-open-aicon]').forEach(button=>button.addEventListener('click',openAiconStudy));
studyButtons.forEach(button=>button.addEventListener('click',()=>study.querySelector(`#${button.dataset.target}`).scrollIntoView({behavior:'smooth',block:'start'})));
studyScroll.addEventListener('scroll',updateStudyProgress,{passive:true});
study.querySelector('.study-close').addEventListener('click',()=>study.close());
study.querySelector('.study-back').addEventListener('click',()=>study.close());
study.addEventListener('click',event=>{if(event.target===study)study.close()});
const comparison=study.querySelector('.comparison');
comparison.querySelector('input').addEventListener('input',event=>{const value=Number(event.target.value);comparison.style.setProperty('--split',`${value}%`);comparison.style.setProperty('--split-num',value/100)});

document.querySelectorAll('[data-project]').forEach(trigger=>{
  trigger.setAttribute('role','button');
  const activate=()=>trigger.dataset.project==='aicon'?openAiconStudy():openProject(trigger.dataset.project);
  trigger.addEventListener('click',activate);trigger.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();activate()}});
});
gallery.querySelector('.gallery-close').addEventListener('click',()=>gallery.close());
gallery.querySelector('.gallery-prev').addEventListener('click',()=>{const length=projects[currentProject].images.length;currentIndex=(currentIndex-1+length)%length;renderGallery()});
gallery.querySelector('.gallery-next').addEventListener('click',()=>{const length=projects[currentProject].images.length;currentIndex=(currentIndex+1)%length;renderGallery()});
gallery.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'){event.preventDefault();gallery.querySelector('.gallery-prev').click()}if(event.key==='ArrowRight'){event.preventDefault();gallery.querySelector('.gallery-next').click()}});

const aiconFeature=document.querySelector('.aicon-feature');
if(aiconFeature&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  aiconFeature.addEventListener('pointermove',event=>{const rect=aiconFeature.getBoundingClientRect();const x=(event.clientX-rect.left)/rect.width-.5;const y=(event.clientY-rect.top)/rect.height-.5;aiconFeature.style.setProperty('--move-x',`${x*10}px`);aiconFeature.style.setProperty('--move-y',`${y*8}px`)});
  aiconFeature.addEventListener('pointerleave',()=>{aiconFeature.style.setProperty('--move-x','0px');aiconFeature.style.setProperty('--move-y','0px')});
  const coverMetrics=aiconFeature.querySelectorAll('.aicon-metrics strong');
  const coverObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){coverMetrics.forEach(node=>{const match=node.textContent.match(/(\d+)/);if(!match)return;const target=Number(match[1]);const suffix=node.textContent.replace(match[1],'');node.textContent=`0${suffix}`;let value=0;const timer=setInterval(()=>{value=Math.min(target,value+Math.max(1,Math.ceil(target/24)));node.textContent=`${value}${suffix}`;if(value>=target)clearInterval(timer)},32)});coverObserver.disconnect()}}),{threshold:.45});coverObserver.observe(aiconFeature);
}
