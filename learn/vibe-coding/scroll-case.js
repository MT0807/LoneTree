(()=>{
  let frame=0;
  function update(){
    frame=0;
    const section=document.querySelector('#case-scroll');
    if(!section)return;
    const video=document.querySelector('#case-video');
    const range=section.offsetHeight-section.querySelector('.case-screen').offsetHeight;
    const progress=Math.max(0,Math.min(1,-section.getBoundingClientRect().top/Math.max(1,range)));
    const time=progress*5.184;
    if(video.readyState>=1&&Math.abs(video.currentTime-time)>.03)video.currentTime=Math.min(time,Math.max(0,(video.duration||5.184)-.015));
    section.querySelectorAll('.case-caption').forEach(el=>el.classList.toggle('is-visible',time>=Number(el.dataset.start)&&time<=Number(el.dataset.end)));
    document.querySelector('#case-progress-fill').style.width=(progress*100)+'%';
    document.querySelector('#case-time').textContent=`00:${String(Math.floor(time)).padStart(2,'0')} / 00:05`;
  }
  function schedule(){if(!frame)frame=requestAnimationFrame(update)}
  addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);addEventListener('hashchange',()=>setTimeout(schedule,0));addEventListener('loadedmetadata',schedule,true);schedule();
})();
