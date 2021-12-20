"use strict";
(function(){
    window.addEventListener("load", init);

    function init() {
        let igon = qs(".divIcon");
        igon.addEventListener("click", icon);
    }
    let bool = true;
    function icon() {
        let i = qs("#igon2");
        let i2 = qs("#igon3");
        let header = qs(".header");
        let par = qsa(".W");
        let foo = qs(".foo");
        let divsit = qsa(".sit");
        let bodydiv = qs(".bodydiv");
        let btn1 = qs("#btn1");
        let btn = qsa(".btn");

        if (bool === true) {
            i.removeAttribute("id", "igon2");
            i.setAttribute("id", "igon3");
            document.body.style.backgroundColor = "rgba(0, 0, 0, 0.977)";
            header.style.backgroundImage = "url('https://ak.picdn.net/shutterstock/videos/24223834/thumb/1.jpg')";
            bodydiv.style.backgroundColor = "rgb(143, 141, 141)";
            for(let i=0;i<divsit.length;i++){
                divsit[i].style.backgroundColor = "rgb(143, 141, 141)";
            }
            for (let i = 0; i < par.length; i++) {
                par[i].style.color = "white";
            }
            foo.style.backgroundColor = "rgb(143, 141, 141)";
            btn1.style.backgroundColor = "rgba(0, 0, 0, 0.977)";
            btn1.style.color = "white"
            btn1.style.border = "2px solid rgba(0, 0, 0, 0.977)"
            for (let i = 0; i < btn.length; i++) {
                btn[i].style.border = "2px solid rgba(0, 0, 0, 0.977)"
                btn[i].style.backgroundColor = "rgba(0, 0, 0, 0.977)";
            }

            bool = false;
        }
        else {
            i2.removeAttribute("id", "igon3");
            i2.setAttribute("id", "igon2");
            document.body.style.backgroundColor = "rgba(189, 189, 189, 0.473)";
            header.style.backgroundImage = "url('https://gcdn.pbrd.co/images/9s8dhepfQKU3.png?fbclid=IwAR3opU1rRLU9ZZXcJI-wFXWZqkT8BQrp5K6CyVzLDZThUn__gf-pmzHf3cQ')";
            for(let i=0;i<divsit.length;i++){
                divsit[i].style.backgroundColor = "white";
            }
            bodydiv.style.backgroundColor = "white";
            for (let i = 0; i < par.length; i++) {
                par[i].style.color = "rgb(143, 141, 141)";
            }
            foo.style.backgroundColor = "white";
            btn1.style.backgroundColor = "rgba(199, 196, 196, 0.473)";
            btn1.style.color = "rgb(82, 82, 201)";
            btn1.style.border = "2px solid rgba(199, 196, 196, 0.473)"
            for (let i = 0; i < btn.length; i++) {
                btn[i].style.backgroundColor = "rgb(82, 82, 201)";
                btn[i].style.border = "2px solid rgb(82, 82, 201)";
            }
            bool = true;
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