// ===========================
// MEMENTO VIVERE V2
// ===========================

// ---------- LOADER ----------

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},1000);

},1200);

});

const loader=document.getElementById("loader");

// ---------- ROTATING QUOTES ----------

const quotes=[

"Capturing things that would've been forgotten.",

"Everything becomes a memory eventually.",

"Beauty waits for those who notice.",

"Some photographs are just feelings with pixels.",

"Maybe today is someone's future nostalgia.",

"Life isn't measured in years. It's measured in moments.",

"The ordinary is only ordinary until someone notices it."

];

const changingQuote=document.getElementById("changingQuote");

let current=0;

setInterval(()=>{

current++;

if(current>=quotes.length){

current=0;

}

changingQuote.style.opacity=0;

setTimeout(()=>{

changingQuote.innerHTML=quotes[current];

changingQuote.style.opacity=1;

},300);

},5000);

// ---------- IMAGE LIGHTBOX ----------

const photos=document.querySelectorAll(".photo img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

lightbox.innerHTML="<img>";

document.body.appendChild(lightbox);

lightbox.style.position="fixed";
lightbox.style.inset="0";
lightbox.style.display="none";
lightbox.style.justifyContent="center";
lightbox.style.alignItems="center";
lightbox.style.background="rgba(0,0,0,.95)";
lightbox.style.zIndex="999999";
lightbox.style.cursor="zoom-out";

const bigImg=lightbox.querySelector("img");

bigImg.style.maxWidth="90%";
bigImg.style.maxHeight="90%";
bigImg.style.borderRadius="18px";

photos.forEach(photo=>{

photo.addEventListener("click",()=>{

lightbox.style.display="flex";

bigImg.src=photo.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});

// ---------- CREATE YOURS ----------

const createBtn=document.getElementById("createBtn");

createBtn.addEventListener("click",()=>{

alert(

`Go outside.

Notice something ordinary.

Take one photo.

Keep creating.

— Memento Vivere`

);

});

// ---------- SECRET EASTER EGG ----------

let typed="";

const secret=document.getElementById("secretMessage");

document.addEventListener("keydown",(e)=>{

typed+=e.key.toLowerCase();

if(typed.length>30){

typed=typed.slice(-30);

}

if(typed.includes("mementovivere")){

secret.style.display="flex";

}

});

secret.addEventListener("click",()=>{

secret.style.display="none";

});

// ---------- HERO PARALLAX ----------

const heroImage=document.querySelector(".hero-right img");

window.addEventListener("scroll",()=>{

heroImage.style.transform=

`translateY(${window.scrollY*0.08}px)`;

});

// ---------- FADE ----------

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});

// ---------- VISITOR COUNTER ----------

let visits=localStorage.getItem("visits");

if(!visits){

visits=1;

}else{

visits++;

}

localStorage.setItem("visits",visits);

const footer=document.querySelector("footer");

const counter=document.createElement("p");

counter.style.marginTop="25px";

counter.style.opacity=".6";

counter.innerHTML=`Visitor #${visits}`;

footer.appendChild(counter);

// ---------- END ----------