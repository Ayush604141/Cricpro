var modal = document.getElementById("myModal");
var Ima = document.getElementById("information")
var Clicking1 = document.getElementById("1")
var Clicking2 = document.getElementById("2")
var Clicking3 = document.getElementById("3")
var Clicking4 = document.getElementById("4")
var Clicking5 = document.getElementById("5")
var Clicking6 = document.getElementById("6")
var Clicking7 = document.getElementById("7")
var Clicking8 = document.getElementById("8")
var Clicking9 = document.getElementById("9")
var Clicking10 = document.getElementById("10")
var Clicking11 = document.getElementById("11")


Clicking1.onclick = function(){
    Ima.src = "./assets/cricpro-sehwag.png";
    modal.style.display = "block";
    Ima.style.position = "relative";
    Ima.style.top = "30%";
    Ima.style.left = "30%";
}
Clicking2.onclick = function(){
    Ima.src = "./assets/cricpro-sachin.png";
    modal.style.display = "block";
    Ima.style.position = "relative";
    Ima.style.top = "30%";
    Ima.style.left = "30%";
}
Clicking3.onclick = function(){
    Ima.src = "./assets/cricpro-gambhir.png";
    modal.style.display = "block";
    Ima.style.position = "relative";
    Ima.style.top = "30%";
    Ima.style.left = "30%";
}
Clicking4.onclick = function(){
    Ima.src = "./assets/cricpro-virat-kohli.png";
    modal.style.display = "block";
    Ima.style.position = "relative";
    Ima.style.top = "30%";
    Ima.style.left = "30%";
}
Clicking5.onclick = function(){
    Ima.src = "./assets/cricpro-dhoni.png";
    modal.style.display = "block";
    Ima.style.position = "relative";
    Ima.style.top = "30%";
    Ima.style.left = "30%";
}
Clicking6.onclick = function(){
    Ima.src = "./assets/cricpro-yuvraj.png";
    modal.style.display = "block";
    Ima.style.position = "relative";
    Ima.style.top = "30%";
    Ima.style.left = "30%";
}
Clicking7.onclick = function(){
    Ima.src = "./assets/cricpro-suresh-raina.jpg";
    modal.style.display = "block";
    Ima.style.position = "relative";
    Ima.style.top = "30%";
    Ima.style.left = "30%";
}
Clicking8.onclick = function(){
    Ima.src = "./assets/cricpro-harbhajan.jpg";
    modal.style.display = "block";
    Ima.style.position = "relative";
    Ima.style.top = "30%";
    Ima.style.left = "30%";
}
Clicking9.onclick = function(){
    Ima.src = "./assets/cricpro-zaheer-khan.jpg";
    modal.style.display = "block";
    Ima.style.position = "relative";
    Ima.style.top = "30%";
    Ima.style.left = "30%";
}
Clicking10.onclick = function(){
    Ima.src = "./assets/cricpro-munaf-patel.jpg";
    modal.style.display = "block";
    Ima.style.position = "relative";
    Ima.style.top = "30%";
    Ima.style.left = "30%";
}
Clicking11.onclick = function(){
    Ima.src = "./assets/cricpro-sreesanth.jpg";
    modal.style.display = "block";
    Ima.style.position = "relative";
    Ima.style.top = "30%";
    Ima.style.left = "30%";
}



window.onclick = function(event){
    if (event.target == modal){
      modal.style.display = "none";
    }
}