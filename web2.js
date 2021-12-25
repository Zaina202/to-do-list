"use strict";
(function () {
    window.addEventListener("load", init);
    let object = {
        imageArray: ["https://gcdn.pbrd.co/images/DFXqxGsDIOHB.jpg?o=1%22", "https://gcdn.pbrd.co/images/6FVlbd734aIY.jpg?o=1%22", "https://gcdn.pbrd.co/images/zCZn4ULT93aj.jpg?o=1%22",
            "https://gcdn.pbrd.co/images/LW1y7dEVjXwz.jpg?o=1%22", "https://gcdn.pbrd.co/images/ROLiOxxlLOi8.jpg?o=1%22", "https://gcdn.pbrd.co/images/NR8c1mAfvfeJ.jpg?o=1%22",
            "https://gcdn.pbrd.co/images/DKRxepulTVUb.jpg?o=1%22", "https://gcdn.pbrd.co/images/PfZJzjYr1gs4.jpg?o=1%22", "https://gcdn.pbrd.co/images/dZdtsviTrlMt.jpg?o=1%22",
            "https://gcdn.pbrd.co/images/IOxuNy0iN4c3.jpg?o=1%22", "https://gcdn.pbrd.co/images/qIROcTXmPlqf.jpg?o=1%22", "https://gcdn.pbrd.co/images/m5FfRjyPhaE3.jpg?o=1%22",
            "https://gcdn.pbrd.co/images/DFXqxGsDIOHB.jpg?o=1%22", "https://gcdn.pbrd.co/images/6FVlbd734aIY.jpg?o=1%22", "https://gcdn.pbrd.co/images/zCZn4ULT93aj.jpg?o=1%22",
            "https://gcdn.pbrd.co/images/LW1y7dEVjXwz.jpg?o=1%22", "https://gcdn.pbrd.co/images/ROLiOxxlLOi8.jpg?o=1%22", "https://gcdn.pbrd.co/images/NR8c1mAfvfeJ.jpg?o=1%22",
            "https://gcdn.pbrd.co/images/DKRxepulTVUb.jpg?o=1%22", "https://gcdn.pbrd.co/images/PfZJzjYr1gs4.jpg?o=1%22", "https://gcdn.pbrd.co/images/dZdtsviTrlMt.jpg?o=1%22",
            "https://gcdn.pbrd.co/images/IOxuNy0iN4c3.jpg?o=1%22", "https://gcdn.pbrd.co/images/qIROcTXmPlqf.jpg?o=1%22", "https://gcdn.pbrd.co/images/m5FfRjyPhaE3.jpg?o=1%22"]
        ,
        timeArray: ["5h ago  •  Full Time", "20h ago  •  Part Time", "1d ago  •  Part Time",
            "2d ago  •  Full Time", "2d ago  •  Part Time", "4d ago  •  Part Time",
            "1w ago  •  Full Time", "1w ago  •  Full Time", "1w ago  •  Part Time",
            "2w ago  •  Freelance", "1mo ago  •  Part Time", "1mo ago  •  Part Time",
            "5h ago  •  Full Time", "20h ago  •  Part Time", "1d ago  •  Part Time",
            "2d ago  •  Full Time", "2d ago  •  Part Time", "4d ago  •  Part Time",
            "1w ago  •  Full Time", "1w ago  •  Full Time", "1w ago  •  Part Time",
            "2w ago  •  Freelance", "1mo ago  •  Part Time", "1mo ago  •  Part Time"]
        ,
        jobArray: ["Senior Software Engineer", "Haskell and PureScript Dev", "Midlevel Back End Engineer",
            "Senior Application Engineer", "Remote DevOps Engineer", "Desktop Support Manager",
            "iOS Engineer", "Senior EJB Developer", "Senior Frontend Developer",
            "App & Website Designer", "Fullstack Developer", "Technical Lead Engineer",
            "Senior Software Engineer", "Haskell and PureScript Dev", "Midlevel Back End Engineer",
            "Senior Application Engineer", "Remote DevOps Engineer", "Desktop Support Manager",
            "iOS Engineer", "Senior EJB Developer", "Senior Frontend Developer",
            "App & Website Designer", "Fullstack Developer", "Technical Lead Engineer"]
        ,
        companyArray: ["Scoot", "Blogr", "Vector",
            "Office Lite", "Pod", "Creative",
            "Pomodoro", "Maker", "Coffeeroasters",
            "Mastercraft", "Crowdfund", "Typemaster",
            "Scoot", "Blogr", "Vector",
            "Office Lite", "Pod", "Creative",
            "Pomodoro", "Maker", "Coffeeroasters",
            "Mastercraft", "Crowdfund", "Typemaster"]
        ,
        areaArray: ["United Kingdom", "United states", "Russia",
            "Japan", "Thailand", "Garmany",
            "United states", "United Kingdom", "Singapore",
            "United states", "New Zealand", "United Kingdom",
            "United Kingdom", "United states", "Russia",
            "Japan", "Thailand", "Garmany",
            "United states", "United Kingdom", "Singapore",
            "United states", "New Zealand", "United Kingdom"]
    }
function init(){
    let mydiv = qs('.jobContainer');
    for (let i = 0; i < 12; i++) {
        let div1 = `<div class = "job">
                   <a href = "index.html"><img src = "${object.imageArray[i]}" alt = "Error image" class = "imageAlt"></a>
                   <p class = "p1">${object.timeArray[i]}</p>
                   <p class = "p2"><a href = "index.html">${object.jobArray[i]}</a></p>
                   <p class = "p1">${object.companyArray[i]}</p>
                   <p class = "p3">${object.areaArray[i]}</p>
                   </div>`;
        mydiv.innerHTML += div1;
    }
    for (let i = 12; i < 24; i++) {
        let div2 = `<div class = "job1">
        <a href = "index.html"><img src = "${object.imageArray[i]}" alt = "Error image" class = "imageAlt"></a>
                   <p class = "p1">${object.timeArray[i]}</p>
                   <p class = "p2"><a href = "index.html">${object.jobArray[i]}</a></p>
                   <p class = "p1">${object.companyArray[i]}</p>
                   <p class = "p3">${object.areaArray[i]}</p>
                   </div>`;
        mydiv.innerHTML += div2;
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
    let input2=qs("#inputPosition");
    input2.addEventListener("click",add);
    let check=qs("#check");
    check.addEventListener("click",full); 
    let igon=qs(".divIcon");
    igon.addEventListener("click",igon7);
    let btnL = qs("#btnL");
    btnL.addEventListener("click",loadM);
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
    let loc = qs("#inputPosition").value;
    if (loc !== "") {
        let flag2=0; 
        let jobs = qsa(".job");
        let jobs2 = qsa(".job1");
        for (let i = 0; i < jobs.length; i++) {
            let text = jobs[i].lastElementChild.textContent.toLowerCase();
            if (!text.includes(loc)) {
                jobs[i].style.display = "none";
                jobs2[i].style.display = "none";
                flag2++;
            }
            else{
                if(bool2===false){
                    jobs2[i].style.display="block";
                }
            }
        }
        if(flag2===12){
            style1();
        }
        btn1.style.display = "none";
    }
    else {
        for (let i = 0; i < 12; i++) {
            let temp2 = object.jobArray[i].toLowerCase().replace(regExp, '');
            let element = qsa(".job");
            let element2 = qsa(".job1");
            if (!temp2.includes(temp)) {
                flag += 2;
                element[i].style.display = "none";
                element2[i].style.display = "none";
            }
            else {//اذا بدي اظهر اللود مور بدون لا اكون عامل لود
                if(bool2===false){
                    element2[i].style.display = "block";
                }
            }
            if (flag === object.jobArray.length) {
                style1();
            }
            btn1.style.display = "none";
        }
    }
}
function add(){
    let btn1=qs("#btnL");
    let input=qs("#inputSearch");
    let element=qsa(".job");
    let element2=qsa(".job1");
    let input2=qs("#inputPosition");
    input2.value="";
    let check=qs("#check");
    if(check.checked===true){
        check.checked=false;
        bool=false;
        bool2=false;
        bool5=false;
    }
    input.value="";
    for(let i=0;i<12;i++){
        element[i].style.display="block";
        element2[i].style.display="none";//اذا بدي لما اضغط ع الانبت يروحو اللود مور
    }
    btn1.style.display="block";
    let found=qsa(".found");
    for(let i=0;i<found.length;i++){
       found[i].remove();
    }
}
function full(){
    let input=qs("#inputSearch");
    let input2=qs("#inputPosition");
    if(input.value==="" && input2.value===""){
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
    let element2=qsa(".job1");
    let temp=time.value.toLowerCase();
    if(bool===false){
        for(let i = 0 ; i < 12 ; i++){
            let temp2=object.timeArray[i].toLowerCase();
            if(!temp2.includes(temp)){
                element[i].style.display="none";
                element2[i].style.display="none";
                btn1.style.display="none";
            }
            else{
                element2[i].style.display="block";
            }
        }
        bool=true;
    }
    else {
        let btn1=qs("#btnL");
        for(let i=0;i<12;i++){
            element[i].style.display="block";
            element2[i].style.display="none";
        }
        btn1.style.display="block";
        bool=false;
    }
}
let bool2=false;
function fullAndSearch(){
    let time=qs("#check");
    let element=qsa(".job");
    let element2=qsa(".job1");
    let btn1=qs("#btnL");
    let input=qs("#inputSearch");
    let tempTime=time.value.toLowerCase();
    let tempSearch=input.value.toLowerCase();
    let flag=0
    let inputLoc=qs("#inputPosition");
    if (inputLoc.value !== "") {
        if (bool2 === false) {
            locAndFull();
            bool2=true;
        }
        else{
            locAndNotFull();
            bool2=false;
        }
    }
    else {
        if (bool2 === false) {
            for (let i = 0; i < 12; i++) {
                let tempSearch2 = object.jobArray[i].toLowerCase();
                let tempTime2 = object.timeArray[i].toLowerCase();
                if (element[i].style.display !== "none") {
                    if (!tempSearch2.includes(tempSearch)) {
                        element[i].style.display = "none";
                        element2[i].style.display = "none";
                        flag++;
                    }
                    else {
                        if (!tempTime2.includes(tempTime)) {
                            element[i].style.display = "none";
                            element2[i].style.display = "none";
                            flag++;
                        }
                        else {
                            element2[i].style.display = "block";
                        }
                    }
                }
            }
            if (flag === 12) {
                style1();
            }
            btn1.style.display = "none";
            bool2 = true;
        }
        else {
            let flag = 0;
            let btn1 = qs("#btnL");
            let input = qs("#inputSearch");
            let tempInput = input.value.toLowerCase();
            for (let i = 0; i < 12; i++) {
                let tempSearch2 = object.jobArray[i].toLowerCase();
                if (element[i].style.display === "none") {
                    if (tempSearch2.includes(tempInput)) {
                        element[i].style.display = "block";
                        element2[i].style.display = "block";
                        flag++;
                    }
                }
            }
            if (flag === 12) {
                btn1.style.display = "block";
            }
            bool2 = false;
        }
    }
}
function locAndFull(){
    let time=qs("#check");
    let element=qsa(".job");
    let element2=qsa(".job1");
    let btn1=qs("#btnL");
    let tempTime=time.value.toLowerCase();
    let inputLoc=qs("#inputPosition");
    let jobs = qsa(".job");
    let jobs2 = qsa(".job1");
    let flag=0
    for (let i = 0; i < jobs.length; i++) {
        let time = object.timeArray[i].toLowerCase();
        let text = jobs[i].lastElementChild.textContent.toLowerCase();
        if (!text.includes(inputLoc.value.toLowerCase())) {
            jobs[i].style.display = "none";
            jobs2[i].style.display = "none";
            flag++;
        }
        else {
            if (!time.includes(tempTime)) {
                element[i].style.display = "none";
                element2[i].style.display = "none";
                flag++;
            }
            else {
                jobs2[i].style.display = "block";
            }
        }
    }
    if(flag===12){console.log(flag);style1();}
    btn1.style.display = "none";
}
function locAndNotFull(){
    let flag = 0;
    let element=qsa(".job");
    let element2=qsa(".job1");
    let btn1 = qs("#btnL");
    let input = qs("#inputPosition");
    let tempInput = input.value.toLowerCase();
    for (let i = 0; i < 12; i++) {
        let tempSearch2 = element2[i].lastElementChild.textContent.toLowerCase();
        if (element[i].style.display === "none") {
            if (tempSearch2.includes(tempInput)) {
                element[i].style.display = "block";
                element2[i].style.display = "block";
                flag++;
            }
        }
    }
    if (flag === 12) {
        btn1.style.display = "block";
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
        let job2=qsa(".job1");
        i.removeAttribute("id","igon2");
        i.setAttribute("id","igon3");
        for(let i=0;i<job.length ;i++){
            job[i].style.backgroundColor="rgba(189, 189, 189, 0.473)";
            job2[i].style.backgroundColor="rgba(189, 189, 189, 0.473)";
        }
        for(let i=0;i<object.jobArray.length;i++){
            p3[i].style.color="rgb(12, 12, 51)";
        }
        for(let i=0;i<p1.length;i++){
            p1[i].style.color="white";
        }
        for (let i = 0; i < btn.length; i++) {
            btn[i].style.backgroundColor = "gray";
            btn[i].style.color = "black";
            btn[i].style.border = "gray";
            btn[i].style.marginRight="12px";
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
        let job2=qsa(".job1");
        i2.removeAttribute("id","igon3");
        i2.setAttribute("id","igon2");
        for(let i=0;i<job.length;i++){
            job[i].style.backgroundColor="white";
            job2[i].style.backgroundColor="white";
        }
        for(let i=0;i<p3.length;i++){
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
        div.style.fontSize = "300%";
        div.style.margin = "6.5% 0 0 32%";
        div.style.paddingLeft = "0.8%";
        div.style.width = "18%";
        bool4=true;
    }
    else{
        bool4=false;
    }
}
let bool5=false;
function loadM(){
    let mydiv=qs('.jobContainer');
    let job=qsa(".job1");
    let btnDiv = qs("#btnL");
    btnDiv.style.display="none";
    for(let i=0;i<job.length;i++){
        job[i].style.display="block";
    }
    bool5=true;
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