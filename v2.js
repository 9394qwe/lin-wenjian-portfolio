const progressBar=document.querySelector('.scroll-progress');
function updateProgress(){
  const height=document.documentElement.scrollHeight-window.innerHeight;
  const progress=height>0?(window.scrollY/height)*100:0;
  progressBar.style.width=`${Math.min(100,Math.max(0,progress))}%`;
}
window.addEventListener('scroll',updateProgress,{passive:true});
window.addEventListener('resize',updateProgress,{passive:true});
updateProgress();

if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const cards=document.querySelectorAll('.directory-card');
  cards.forEach(card=>card.classList.add('reveal-pending'));
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.remove('reveal-pending');observer.unobserve(entry.target)}
    });
  },{rootMargin:'0px 0px -8% 0px',threshold:.08});
  cards.forEach(card=>observer.observe(card));
}
