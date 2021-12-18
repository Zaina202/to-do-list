"use strict";
(function(){
    window.addEventListener("load",init);
let object = {
imageArray:["https://gcdn.pbrd.co/images/DFXqxGsDIOHB.jpg?o=1%22","https://gcdn.pbrd.co/images/6FVlbd734aIY.jpg?o=1%22","https://gcdn.pbrd.co/images/zCZn4ULT93aj.jpg?o=1%22",
            "https://gcdn.pbrd.co/images/LW1y7dEVjXwz.jpg?o=1%22","https://gcdn.pbrd.co/images/ROLiOxxlLOi8.jpg?o=1%22","https://gcdn.pbrd.co/images/NR8c1mAfvfeJ.jpg?o=1%22",
            "https://gcdn.pbrd.co/images/DKRxepulTVUb.jpg?o=1%22","https://gcdn.pbrd.co/images/PfZJzjYr1gs4.jpg?o=1%22","https://gcdn.pbrd.co/images/dZdtsviTrlMt.jpg?o=1%22",
            "https://gcdn.pbrd.co/images/IOxuNy0iN4c3.jpg?o=1%22","https://gcdn.pbrd.co/images/qIROcTXmPlqf.jpg?o=1%22","https://gcdn.pbrd.co/images/m5FfRjyPhaE3.jpg?o=1%22"]
,
timeArray:["5h ago  •  Full Time","20h ago  •  Part Time","1d ago  •  Part Time",
           "2d ago  •  Full Time","2d ago  •  Part Time","4d ago  •  Part Time",
           "1w ago  •  Full Time","1w ago  •  Full Time","1w ago  •  Part Time",
           "2w ago  •  Freelance","1mo ago  •  Part Time","1mo ago  •  Part Time"]
,
jobArray:["Senior Software Engineer","Haskell and PureScript Dev","Midlevel Back End Engineer",
          "Senior Application Engineer","Remote DevOps Engineer","Desktop Support Manager",
          "iOS Engineer","Senior EJB Developer","Senior Frontend Developer",
          "App & Website Designer","Fullstack Developer","Technical Lead Engineer"]
,
companyArray:["Scoot","Blogr","Vector",
              "Office Lite","Pod","Creative",
              "Pomodoro","Maker","Coffeeroasters",
              "Mastercraft","Crowdfund","Typemaster"]
,        
areaArray:["United Kingdom","United states","Russia",
           "Japan","Thailand","Garmany",
           "United states","United Kingdom","Singapore",
           "United states","New Zealand","United Kingdom"]
}
function init(){
    let mydiv=qs('.jobContainer');
    for(let i = 0;i<12;i++){
       let div1 = `<div class = "job">
                   <img src = "${object.imageArray[i]}" alt = "Error image" class = "imageAlt">
                   <p class = "p1">${object.timeArray[i]}</p>
                   <a href="index.html"><p class = "p2">${object.jobArray[i]}</p></a>
                   <p class = "p1">${object.companyArray[i]}</p>
                   <p class = "p3">${object.areaArray[i]}</p>
                   </div>`;
       mydiv.innerHTML += div1;
    }
    let myBtn = `<div id = "btnDiv"><button id = "btnL" class= "button" >Load More</button></div>`;
    mydiv.innerHTML+=myBtn;
    let btn=qs("#imageSearch");
    btn.addEventListener("click",focusSearch);
    let btn1=qs("#imagePosition");
    btn1.addEventListener("click",focusPosition);
    let btn2=qs("#btnS");
    btn2.addEventListener("click",search);
    let input =qs("#inputSearch");
    input.addEventListener("click",add);
    let check=qs("#check");
    check.addEventListener("click",full); 
    let igon=qs(".divIcon");
    igon.addEventListener("click",igon7);
    btn2.addEventListener("click",filterloc);
   
}

function focusSearch(){
    let input=qs("#inputSearch");
    input.focus();
}
function focusPosition(){
    let input=qs("#inputPosition");
    input.focus();
}
let bool4=false;
function search(){
    let input=qs("#inputSearch");
    let btn1=qs("#btnL");
    let regExp = /[^a-z]/g;
    let temp = input.value.toLowerCase().replace(regExp, '');
    let flag=0;
    for(let i=0;i<object.jobArray.length;i++){
        let temp2=object.jobArray[i].toLowerCase().replace(regExp,'');
        let element=qsa(".job");
        if(!temp2.includes(temp)){
            flag++;
            element[i].style.display="none";
            btn1.style.display="none";
        }
        if(flag===object.jobArray.length){
            style1(); 
        }
    }
}
function add(){
    let btn1=qs("#btnL");
    let input=qs("#inputSearch");
    let element=qsa(".job");
    let check=qs("#check");
    if(check.checked===true){
        check.checked=false;
    }
    input.value="";
    for(let i=0;i<object.jobArray.length;i++){
        element[i].style.display="block";
    }
    btn1.style.display="block";
    let found=qsa(".found");
    for(let i=0;i<found.length;i++){
       found[i].remove();
    }
}
function full(){
    let input=qs("#inputSearch");
    if(input.value===""){
        fullOnly()
    }
    else{
        fullAndSearch();
    }
}
let bool=false;
function fullOnly(){
    let time=qs("#check");
    let btn1=qs("#btnL");
    let element=qsa(".job");
    let temp=time.value.toLowerCase();
    if(bool===false){
        for(let i=0;i<object.timeArray.length;i++){
            let temp2=object.timeArray[i].toLowerCase();
            if(!temp2.includes(temp)){
                element[i].style.display="none";
                btn1.style.display="none";
            }
        }
        bool=true;
    }
    else {
        let btn1=qs("#btnL");
        for(let i=0;i<object.timeArray.length;i++){
            element[i].style.display="block";
        }
        btn1.style.display="block";
        bool=false;
    }
}
let bool2=false;
function fullAndSearch(){
    let time=qs("#check");
    let element=qsa(".job");
    let btn1=qs("#btnL");
    let input=qs("#inputSearch");
    let tempTime=time.value.toLowerCase();
    let tempSearch=input.value.toLowerCase();
    let flag=0
    if(bool2===false){
        for (let i = 0; i < object.jobArray.length; i++) {
            let tempSearch2 = object.jobArray[i].toLowerCase();
            let tempTime2 = object.timeArray[i].toLowerCase();
            if (element[i].style.display !== "none") {
                if (!tempSearch2.includes(tempSearch)) {
                    element[i].style.display = "none";
                    flag++;
                }
                else {
                    if (!tempTime2.includes(tempTime)) {
                        element[i].style.display = "none";
                        flag++;
                    }
                }
            }
        }
        if(flag===object.jobArray.length){
            style1();
        }
        btn1.style.display="none";
        bool2=true;
    }
    else{
        let flag=0;
        let btn1=qs("#btnL");
        let input=qs("#inputSearch");
        let tempInput=input.value.toLowerCase();
        for (let i = 0; i < object.timeArray.length; i++) {
            let tempSearch2 = object.jobArray[i].toLowerCase();
            if (element[i].style.display === "none") {
                if (tempSearch2.includes(tempInput)) {
                    element[i].style.display = "block";
                    flag++;
                }
            }
        }
        if (flag === object.timeArray.length) {
            btn1.style.display = "block";
        }
        bool2=false;
    }
}
let bool3=true;
function igon7(){
    let i=qs("#igon2");
    let i2=qs("#igon3");
    let header=qs(".header");
    let p1=qsa(".p1");
    let p3=qsa(".p3");
    let btn=qsa(".button");
    let btnL=qs("#btnL");
    let imageP=qs("#imagePosition");
    if(bool3===true){
        let job=qsa(".job");
        i.removeAttribute("id","igon2");
        i.setAttribute("id","igon3");
        for(let i=0;i<job.length ;i++){
            job[i].style.backgroundColor="rgba(189, 189, 189, 0.473)";
            p3[i].style.color="rgb(12, 12, 51)";
        }
        for(let i=0;i<p1.length;i++){
            p1[i].style.color="white";
        }
        for (let i = 0; i < btn.length; i++) {
            btn[i].style.backgroundColor = "gray";
            btn[i].style.color = "black";
            btn[i].style.border = "gray";
            btn[i].style.marginRight="28px"
        }
        document.body.style.backgroundColor="rgba(0, 0, 0, 0.977)";
        header.style.backgroundImage = "url('https://ak.picdn.net/shutterstock/videos/24223834/thumb/1.jpg')";
        imageP.src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-positioning-icon-image_1257306.jpg";
        imageP.style.width="2.4%";
        imageP.style.height="40%";
        imageP.style.marginTop="2%";
        imageP.style.marginLeft="3%"
        bool3=false;
    }
    else{
        let job=qsa(".job");
        i2.removeAttribute("id","igon3");
        i2.setAttribute("id","igon2");
        for(let i=0;i<job.length;i++){
            job[i].style.backgroundColor="white";
            p3[i].style.color="rgb(82, 82, 201)";
        }
        for(let i=0;i<p1.length;i++){
            p1[i].style.color="rgb(143, 141, 141)";
        }
        document.body.style.backgroundColor="rgba(189, 189, 189, 0.473)";
        for(let i=0;i<btn.length;i++){
            btn[i].style.backgroundColor = "rgb(82, 82, 201)";
            btn[i].style.color = "white";
            btn[i].style.border = "rgb(82, 82, 201)";
        }
        imageP.src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/66-512.png";
        imageP.style.height="57%";
        imageP.style.width="3.5%";
        imageP.style.marginTop="1.5%";
        header.style.backgroundImage = "url('https://gcdn.pbrd.co/images/9s8dhepfQKU3.png?fbclid=IwAR3opU1rRLU9ZZXcJI-wFXWZqkT8BQrp5K6CyVzLDZThUn__gf-pmzHf3cQ')";
        bool3=true; 
    }
}

function style1(){
    if (bool4 === false) {
        let container = qs(".jobContainer");
        let div = document.createElement("div");
        let par = document.createTextNode("Not Found!");
        div.appendChild(par);
        div.setAttribute("class", "found");
        container.appendChild(div);
        div.style.color = "rgb(82, 82, 201)";
        div.style.fontSize = "250%";
        div.style.margin = "6.5% 0 0 35%";
        div.style.paddingLeft = "0.8%";
        div.style.width = "18%";
        bool4=true;
    }
    else{
        bool4=false;
    }
}
function filterloc(){
    let loc = qs("#inputPosition").value;
    let jobs = qsa(".job");
    for(let i = 0;i<jobs.length;i++){
        let text = jobs[i].lastElementChild.textContent.toLowerCase();
        if(!(text.includes(loc))){
            jobs[i].style.display="none";
        }
    }
}







function id(selector){
        return document.getElementById(selector);
}
function qs(selector){
    return document.querySelector(selector);
}
function qsa(selector){
    return document.querySelectorAll(selector);
}
})();
