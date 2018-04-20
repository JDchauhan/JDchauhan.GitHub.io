window.onload = function (){
    document.getElementById("page-content").className = "display";
    document.getElementById("preloader").className = "hidden";
}

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
    }
    element.className = arr1.join(" ");
}                  

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("btn active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

filterSelection("all");

// Add active class to the current button (highlight it)
var navContainer = document.getElementById("navbar");
var navs = navContainer.getElementsByClassName("nav-list");
for (var i = 0; i < navs.length; i++) {
    navs[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("nav-active");
        current[0].className = current[0].className.replace(" nav-active", "");
        this.className += " nav-active";
        hide_nav();
    });
}


window.onscroll = function changeClass(){
    var scrollPosY = window.pageYOffset | document.body.scrollTop;

    var homeHeight = document.getElementById('home').clientHeight;
    var aboutHeight = homeHeight + document.getElementById('about').clientHeight;
    var skillsHeight = aboutHeight + document.getElementById('skills').clientHeight;
    var portfolioHeight = skillsHeight + document.getElementById('portfolio').clientHeight;
    var resumeHeight = portfolioHeight + document.getElementById('resume').clientHeight;
    
    var current = document.getElementsByClassName("nav-active");
    current[0].className = current[0].className.replace(" nav-active", "");

    //change parallax
    if(scrollPosY <= homeHeight / 1.1){
        document.getElementById("home").className="home";
    }else{
        document.getElementById("home").className="";
    }
    
    //change div
    if(scrollPosY <= homeHeight / 1.1){
        document.getElementById("home-nav").className = "nav-list nav-active";
    }else if(scrollPosY <= aboutHeight / 1.05) {   
        document.getElementById("about-nav").className = "nav-list nav-active";
    }else if(scrollPosY <= skillsHeight /1.02) {   
        document.getElementById("skills-nav").className = "nav-list nav-active";
    }else if(scrollPosY <= portfolioHeight ) {   
        document.getElementById("portfolio-nav").className = "nav-list nav-active";
    }else if(scrollPosY <= resumeHeight) {   
        document.getElementById("resume-nav").className = "nav-list nav-active";
    }else{
        document.getElementById("contact-nav").className = "nav-list nav-active";
    }
};

function display_nav(){
    if(document.getElementById("navbar").style.display == "block"){
        document.getElementById("navbar").style.display = "none";
    }else{
        document.getElementById("navbar").style.display = "block";
    }
}

function hide_nav(){
    if(window.innerWidth >= 700){
        return 1;
    }
    document.getElementById("navbar").style.display = "none";
}
