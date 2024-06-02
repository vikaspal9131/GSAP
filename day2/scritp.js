gsap.from(".page1 .box",{
  scale:0,
  delay:1,
  duration:3,
  rotate:360,
}) 
gsap.from(".page2 .box",{
  scale:0,
  delay:1,
  duration:2,
  rotate:360,

  scrollTrigger:{
    trigger:".page2 .box",
    scroller:"body",
    markers:true,
    start:"top 60%",
  }
}) 

const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { duration: 0.2, x: e.clientX, y: e.clientY });
    
});
