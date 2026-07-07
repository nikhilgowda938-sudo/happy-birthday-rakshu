document.body.addEventListener('click',()=>{
const m=document.getElementById('music');
if(m.paused)m.play().catch(()=>{});
},{once:true});

function showGift(){
document.getElementById('gift').style.display='block';
for(let i=0;i<120;i++){
let h=document.createElement('div');
h.className='heart';
h.innerHTML=['❤️','🌹','✨','🎈'][Math.floor(Math.random()*4)];
h.style.left=Math.random()*100+'vw';
h.style.animationDuration=(4+Math.random()*4)+'s';
document.body.appendChild(h);
setTimeout(()=>h.remove(),8000);
}
window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});
}
