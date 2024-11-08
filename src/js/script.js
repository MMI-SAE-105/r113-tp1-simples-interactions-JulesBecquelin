// TODO
const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge")
aMettreEnRouge.style.color="red";

const enRougSuiteAClick = document.querySelector("#en-rouge-suite-a-click")
enRougSuiteAClick.addEventListener("click",(elm)=>{
    enRougSuiteAClick.style.color = "red"
});

const collH2 = document.querySelectorAll("h2")
collH2.forEach((elm)=>{
    elm.addEventListener("click",(evt)=>{
evt.target.style.color = "red"
    })
});
