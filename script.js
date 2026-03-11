/* ==============================
   SECTION REVEAL
================================ */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
},{
  threshold:0.2
});

document.querySelectorAll(".reveal").forEach(el=>{
  observer.observe(el);
});


/* ==============================
   STARFIELD
================================ */

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let stars = [];

for(let i=0;i<65;i++){
  stars.push({
    x:Math.random()*canvas.width,
    y: Math.random()*(canvas.height*1.2),
    size:Math.random()*2,
    speed:Math.random()*0.15,
    opacity:Math.random(),
    twinkle:Math.random()*0.02
  });
}

function animateStars(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  stars.forEach(star=>{

    star.y += star.speed;

    if(star.y > canvas.height){
      star.y = 0;
      star.x = Math.random()*canvas.width;
    }

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI*2);
    star.opacity += star.twinkle;
    if(star.opacity > 1 || star.opacity < 0.2){
      star.twinkle *= -1;
    }
    ctx.fillStyle="rgba(255,255,255,"+star.opacity+")";
    ctx.fill();

  });

  requestAnimationFrame(animateStars);
}

animateStars();

