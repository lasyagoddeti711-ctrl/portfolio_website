const roles=["Aspiring Full-Stack Web Developer","Frontend Developer","Java Developer"]
let roleindex=0;
let charindex=0;
function type(){
    const  currentrole=roles[roleindex];
    document.getElementById("roles").textContent=currentrole.substring(0,charindex+1);
    charindex++;
    if(charindex===currentrole.length){
        setTimeout(()=>{
            charindex=0;
            roleindex=(roleindex+1)%roles.length;
            type();
        },2000);
    }else{
         setTimeout(type,100);
    }
}
type();
const themebtn=document.getElementById("themebtn");
themebtn.addEventListener("click",function(){
if(document.body.classList.contains("light-mode")){
   document.body.classList.remove("light-mode");
   themeicon.classList.remove("fa-moon");
   themeicon.classList.add("fa-sun");
}else{
    document.body.classList.add("light-mode");
    themeicon.classList.remove("fa-sun");
   themeicon.classList.add("fa-moon");

}

});
const links=document.querySelectorAll(".tags a");
links.forEach(link=>{
    link.addEventListener("click",()=>{
        links.forEach(item=>{
            item.classList.remove("active");
        });
        link.classList.add("active");
    });
});
const topbtn=document.querySelector(".back-to-top");
// const contactlink=document.querySelector("");
// const homelink=document.querySelector("#home");
topbtn.addEventListener("click",()=>{
    links[4].classList.remove("active");
    links[0].classList.add("active");
})
const year=document.getElementById("year");
const newyear=new Date().getFullYear();
year.textContent=newyear;
const footer =document.querySelector(".footer");
const observer =new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
          if(entry.isIntersecting){
            footer.classList.add("active");
          }else{
            footer.classList.remove("active");
          }
    });
});
observer.observe(footer);
const skillcards=document.querySelectorAll(".skill-cards div");
const skillbuttons=document.querySelectorAll(".skills-btn");
skillbuttons.forEach(button=>{
    button.addEventListener("click",()=>{
        skillcards.forEach(card=>{
            card.classList.remove("selected");
        });
        const selectedcard=document.querySelector("."+ button.dataset.target);
        selectedcard.classList.add("selected");
    });
});
const menubtn=document.querySelector(".menu-btn");
const tags=document.querySelector(".tags");
menubtn.addEventListener("click",()=>{
    tags.classList.toggle("show");
});
const skillsbtn=document.querySelectorAll(".skills-btn");
skillsbtn.forEach(button=>{
    button.addEventListener("click",()=>{
        skillsbtn.forEach(btn=>{
            btn.classList.remove("active");
        })
        button.classList.add("active");
    })
})