const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
},{
  threshold:0.25
});

document.querySelectorAll(".reveal").forEach(el=>{
  observer.observe(el);
});const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for(let i=0;i<120;i++){
  stars.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    size:Math.random()*2,
    speed:Math.random()*0.2
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

    ctx.fillStyle="white";
    ctx.beginPath();
    ctx.arc(star.x,star.y,star.size,0,Math.PI*2);
    ctx.fill();
  });

  requestAnimationFrame(animateStars);
}

animateStars();