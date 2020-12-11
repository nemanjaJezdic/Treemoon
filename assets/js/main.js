$(document).ready(function(){
  /*dinamicki ispis-poziv funkcija*/
    ispisMenu();
    ispisMobileMenu();
    ispisIcon();
    ispisHeaderSlider();
    ispisGallery();
    ispisOurwork();
    ispisAutor();
    

    /*------------------------Pre-loader--------------------------------*/
    load(2);

    function load(opacity){
       if(opacity <=0 ) {
         removeLoader();
       }
       else{
        document.getElementById("load").style.opacity=opacity;
        window.setTimeout( () =>{
          load(opacity-0.05);
        },100);
       }
    }
    
    function removeLoader(){
      document.getElementById("load").style.display="none";
    }
    /*--------------------------------------------------------*/
     console.log(document.clientY);
    /*------------------------Custom-made-scroll--------------------------------*/
    var cursor=$("#cursor");

    $(document).on("mousemove",(e) => {
      let x=e.pageX;
      let y=e.pageY;
      $(cursor).css("left",x+"px");
      $(cursor).css("top",y+"px");
  });

  $(document).on("click",(e) => {
    $(cursor).addClass("grow");
    setTimeout(() =>{
      $(cursor).removeClass("grow");
    },500)
});

  $('a').mouseover(() => {
      $(cursor).addClass("ca");
      $(cursor).css(
      {"background-color":"transparent",
       "animation":"none"
      });
  })
  $('a').mouseout(() => {
      $(cursor).removeClass("ca");
      $(cursor).css(
      {"background-color":"#0fc690",
      "animation":"puls 0.5s infinite alternate"
    });
  })
  $('form').mouseover(() => {
    $(cursor).css("display","none");
  })
  $('form').mouseout(() => {
    $(cursor).css("display","block");
  })
  $('button').mouseover(() => {
    $(cursor).addClass("ca");
    $(cursor).css(
    {"background-color":"transparent",
     "animation":"none"
    });
  })
  $('button').mouseout(() => {
    $(cursor).removeClass("ca");
    $(cursor).css(
    {"background-color":"#0fc690",
    "animation":"puls 0.5s infinite alternate"
    });
  })
    /*--------------------------------------------------------*/
    /*------------------------Header na scroll--------------------------------*/
    window.addEventListener("scroll", function(e){
       setTimeout(
        function() {
          if(window.scrollY>300){
            $(".header").css(
              {"position": "fixed", 
                "z-index": "900",
                "width":"100%",
                "padding":"20px 0px",
                "padding-bottom":"15px",
                "box-shadow":"0px 0px 20px"
               }
            );
          }
          else
           {
            $(".header").css(
              {"position": "relative", 
                "width":"100%",
                "padding":"40px 0px",
                "padding-bottom":"35px",
                "box-shadow":"none"
               }
            );
           }
        }        
        ,100);
    })
  /*--------------------------------------------------------*/
/*------------------------Hamburger meni--------------------------------*/
    var mobileMenuButton = document.querySelector(".btn-menu");
    var mobileMenuButtonIcon = document.querySelector(".btn-menu span");
    var mobileMenu = document.querySelector("#mobile-menu");



    var toggleMenu = function () {
      if (mobileMenu.classList.contains("active")) {         
          mobileMenu.classList.remove("active");            
          mobileMenuButtonIcon.classList.add("fa-bars");
          mobileMenuButtonIcon.classList.remove("fa-times");
      } else {
          mobileMenu.classList.add("active");
          mobileMenuButtonIcon.classList.remove("fa-bars");
          mobileMenuButtonIcon.classList.add("fa-times");
      }
  }
 
   mobileMenuButton.addEventListener("click", function (e) {
      toggleMenu();
  });

  
   var mobileMenuItems = document.querySelectorAll("#mobile-menu ul li a");
   mobileMenuItems.forEach(function (i) {
      i.addEventListener("click", function (e) {
          toggleMenu();
      });
  });
/*--------------------------------------------------------*/
   
   /*------------------------Validacija forme--------------------------------*/


   /*-------------Valdicaija u contactu----------------*/
   $("#contactbtn").on("click", (e) => {
    e.preventDefault();
    validationName();
    validationPhone();
    validationEmail();
    validationCheck();
    if(validationName() && validationPhone() && validationEmail() && validationCheck()){
      alert("Thank you!We will contact you as fast as possible.");
      document.getElementById("firstform").reset();
    }
    else{
      alert("Please enter valid form");
    }
 })
 /*------Name polje----*/
 var newP1=document.createElement("P");
 newP1.textContent="Use only letters(3 min)";
 newP1.style.color="red";

 var stavi1=document.getElementById("inputcol1");

 function validationName(){
  var nameValue=document.getElementById("inputName").value;
  var nameRegex=/^[a-z A-Z]{3,}$/g
  if(nameRegex.test(nameValue)){
    $("#inputName").removeClass("is-valid");
    newP1.style.display="none";
    return true;
  }
  else{
    newP1.style.display="block";
    newP1.textContent="Use only letters(3 min)";
    newP1.style.color="red";
    $("#inputName").removeClass("is-valid").addClass("is-invalid");
    stavi1.insertBefore(newP1,document.getElementById("inputName"));
    return false;
  }
}

$("#inputName").on("keyup",() => {
  var nameValue=document.getElementById("inputName").value;
  var nameRegex=/^[a-z A-Z]{3,}$/g
  if(nameRegex.test(nameValue)){
    newP1.style.color="green";
    newP1.textContent="Valid name";
    $("#inputName").removeClass("is-invalid").addClass("is-valid");
  }
  else{
    newP1.style.display="block";
    newP1.style.color="red";
    newP1.textContent="Use only letters(3 min)";
    $("#inputName").removeClass("is-valid").addClass("is-invalid");   
    stavi1.insertBefore(newP1,document.getElementById("inputName"));  
  }
})
/*--------------------*/

/*------Phone polje----*/
var newP2=document.createElement("P");
newP2.textContent="+38164-123-4567";
newP2.style.color="red";

var stavi2=document.getElementById("inputcol2");

function validationPhone(){
 var nameValue=document.getElementById("inputPhone").value;
 var nameRegex=/^([+]381(60|61|62|63|64)[-]([0-9]{3})[-]([0-9]{4}))$/g
 if(nameRegex.test(nameValue)){
   $("#inputPhone").removeClass("is-valid");
   newP2.style.display="none";
   return true;
 }
 else{
   newP2.style.display="block";
   newP2.textContent="+38164-123-4567";
   newP2.style.color="red";
   $("#inputPhone").removeClass("is-valid").addClass("is-invalid");
   stavi2.insertBefore(newP2,document.getElementById("inputPhone"));
   return false;
 }
}

$("#inputPhone").on("keyup",() => {
 var nameValue=document.getElementById("inputPhone").value;
 var nameRegex=/^([+]381(60|61|62|63|64)[-]([0-9]{3})[-]([0-9]{4}))$/g
 if(nameRegex.test(nameValue)){
   newP2.style.color="green";
   newP2.textContent="Valid phone";
   $("#inputPhone").removeClass("is-invalid").addClass("is-valid");
 }
 else{
   newP2.style.display="block";
   newP2.style.color="red";
   newP2.textContent="+38164-123-4567";
   $("#inputPhone").removeClass("is-valid").addClass("is-invalid");   
   stavi2.insertBefore(newP2,document.getElementById("inputPhone"));  
 }
})
/*--------------------*/

/*------Email polje----*/
var newP3=document.createElement("P");
newP3.textContent="example1@gmail.com";
newP3.style.color="red";

var stavi3=document.getElementById("inputcol3");

function validationEmail(){
 var nameValue=document.getElementById("inputEmail").value;
 var nameRegex=/^[a-z A-Z 0-9]{3,}@[a-z A-Z 0-9]{4,}(.com|.rs|.io)$/g
 if(nameRegex.test(nameValue)){
   $("#inputEmail").removeClass("is-valid");
   newP3.style.display="none";
   return true;
 }
 else{
   newP3.style.display="block";
   newP3.textContent="example1@gmail.com";
   newP3.style.color="red";
   $("#inputEmail").removeClass("is-valid").addClass("is-invalid");
   stavi3.insertBefore(newP3,document.getElementById("inputEmail"));
   return false;
 }
}

$("#inputEmail").on("keyup",() => {
 var nameValue=document.getElementById("inputEmail").value;
 var nameRegex=/^[a-z A-Z 0-9]{3,}@[a-z A-Z 0-9]{4,}(.com|.rs|.io)$/g
 if(nameRegex.test(nameValue)){
   newP3.style.color="green";
   newP3.textContent="Valid email";
   $("#inputEmail").removeClass("is-invalid").addClass("is-valid");
 }
 else{
   newP3.style.display="block";
   newP3.style.color="red";
   newP3.textContent="example1@gmail.com";
   $("#inputEmail").removeClass("is-valid").addClass("is-invalid");   
   stavi3.insertBefore(newP3,document.getElementById("inputEmail"));  
 }
})
/*--------------------*/

/*------Checkbox polja----*/
  /*create element*/
   let divcheck=document.createElement("div");
   divcheck.classList.add("col-sm-12")
   divcheck.setAttribute("id","inputcol6");

   let pcheck=document.createElement("div");
   pcheck.textContent="What is your favourite trees? (check at least 2)"

   divcheck.appendChild(pcheck);

   let divhold=document.createElement("div");
   divhold.setAttribute("id","checkcol1");

   pcheck.appendChild(divhold);

   let nizID=["inlineCheckbox1","inlineCheckbox2","inlineCheckbox3","inlineCheckbox4","inlineCheckbox5"];
   let nizValue=["option1","option2","option3","option4","option5"];
   let nizTekst=["Maple","Oak","Sycamore","Pine","Sequoia"];
   
   let checkboxlist="";
   for(let i=0;i<5;i++){
      checkboxlist+=`
      <div class="form-check form-check-inline">
       <input class="form-check-input check1" type="checkbox" id="${nizID[i]}" value="${nizValue[i]}">
       <label class="form-check-label" for="${nizID[i]}">${nizTekst[i]}</label>
      </div>
      `
   }

   divhold.innerHTML=checkboxlist;
   document.getElementById("red").insertBefore(divcheck,document.getElementById("inputcol5"));
  /*--------------*/
  var newP14=document.createElement("P");
  newP14.textContent="Please check at least 2";
  newP14.style.color="red";

  var t12=document.getElementById("checkcol1");

function validationCheck(){
   var br=0;
   for(i=0;i<5;i++)
    {
         if(document.getElementById("checkcol1").children[i].children[0].checked)
         {
           br++;
          }
    }
   if(br>1)
   {  
     newP14.style.display="none";
     return true;
   }
   else
   {
    newP14.style.display="block";
    newP14.style.color="red"
    newP14.textContent="Please check at least 2"
    t12.insertBefore(newP14,t12.lastChild);
    return false;
   }
}

for(i=0;i<5;i++)
{
  document.getElementsByClassName("check1")[i].addEventListener("click",function(){
        var br=0;
        for(i=0;i<5;i++)
        {
          if(document.getElementById("checkcol1").children[i].children[0].checked)
            {
              br++;
            }
        }
        if(br>1)
        {
          newP14.style.color="green"
          newP14.textContent="Valid check"
        }
        else
        {
          newP14.style.color="red"
          newP14.textContent="Please check at least 2";
        }
  });
}
/*--------------------*/

   /*-----------------------------------------------------*/


  /*-------------Valdicaija u footeru----------------*/
  $("#newsletterbtn").on("click", (e) => {
    e.preventDefault();
    if(validationEmailfooter()){
      alert("Thank you!");
      document.getElementById("secondform").reset();
    }
    else{
      alert("Please enter valid email");
    }
 })
  
   var newP=document.createElement("P");
   newP.textContent="example1@gmail.com";
   newP.style.color="red";

   var stavi=document.getElementById("secondform");

   function validationEmailfooter(){
    var nameValue=document.getElementById("newsletter").value;
    var nameRegex=/^[a-z A-Z 0-9]{3,}@[a-z A-Z 0-9]{4,}(.com|.rs|.io)$/g
    if(nameRegex.test(nameValue)){
      $("#newsletter").removeClass("is-valid");
      newP.style.display="none";
      return true;
    }
    else{
      newP.style.display="block";
      newP.textContent="example1@gmail.com";
      newP.style.color="red";
      $("#newsletter").removeClass("is-valid").addClass("is-invalid");
      stavi.insertBefore(newP,document.getElementById("newsletter"));
      return false;
    }
  }
  
  $("#newsletter").on("keyup",() => {
    var nameValue=document.getElementById("newsletter").value;
    var nameRegex=/^[a-z A-Z 0-9]{3,}@[a-z A-Z 0-9]{4,}(.com|.rs|.io)$/g
    if(nameRegex.test(nameValue)){
      newP.style.color="green";
      newP.textContent="Valid email";
      $("#newsletter").removeClass("is-invalid").addClass("is-valid");
    }
    else{
      newP.style.display="block";
      newP.style.color="red";
      newP.textContent="example1@gmail.com";
      $("#newsletter").removeClass("is-valid").addClass("is-invalid"); 
      stavi.insertBefore(newP,document.getElementById("newsletter"));    
    }
  })
   /*-----------------------------------------------------*/
  });

/*------------------------dinamicki ispis-funkcije--------------------------------*/

/*meni u navigaciji*/
  function ispisMenu(){
      let nizHref=["#","#about","#gallerys","#ourwork","#contacts"];
      let nizIme=["Home","About","Gallery","Our work","Contact us"];
      let navi=document.getElementById("navigation");
      let html="";
      for(var i=0;i<nizHref.length;i++){
        html+=`
          <li><a href="${nizHref[i]}">${nizIme[i]}</a></li>
        `
      }
      navi.innerHTML=html;
  }
/*---------*/
/*meni za manje rezolucije*/
  function ispisMobileMenu(){
    var ul=document.createElement("ul");
    ul.setAttribute("id","navigationmenu");
    var mobilemenu=document.getElementById("mobile-menu");
    mobilemenu.appendChild(ul);
    let nizHref=["#","#about","#gallerys","#ourwork","#contacts"];
    let nizIme=["Home","About","Gallery","Our work","Contact us"];
    let html="";
    for(var i=0;i<nizHref.length;i++){
      html+=`
        <li><a href="${nizHref[i]}">${nizIme[i]}</a></li>
      `
    }
    ul.innerHTML=html;
  }
/*---------*/
/*slijder u headeru*/
function ispisHeaderSlider(){
    let nizSlide=["first-slide","second-slide","third-slide"];
    let nizSrc=["assets/images/banner1.jpg","assets/images/banner2.jpg","assets/images/banner3.jpg"];
    let nizAlt=["Forest","tree in forest","Foggy forest"];
    let nizP=["Our trees are planted in agroforestry projects that promote virtuous interaction among different species and sustainable use of resources and land.",
    "All trees are good for the environment: they absorb CO2, emit oxygen, promote biodiversity, counteract soil erosion and much more.",
    "Treemoon is a home to 263 planting projects from 33 differents countries. They use Treemoon to share with you their stories and get help in their journey to reforest the world."];
    let nizH1=["Welcome to Treemoon",
    "We plant trees",
    "You reforest the world"
    ];
    let banner=document.getElementById("headerBanner");
    let html="";
    for(var i=0;i<nizSlide.length;i++){
      html+=`
      <div class="carousel-item">
      <img class="${nizSlide[i]}" src="${nizSrc[i]}" alt="${nizAlt[i]}">
      <div class="container">
         <div class="carousel-caption relative">
            <h1>${nizH1[i]}</h1>
            <p>${nizP[i]}</p>
            <a  href="#about">View More</a>
         </div>
      </div>
     </div>
    `
    }
    banner.innerHTML=html;
    banner.children[0].classList.add("active");
} 
/*---------*/
/*Galerija*/
function ispisGallery(){
  let nizSlike=["assets/images/small1.jpg","assets/images/small2.jpg","assets/images/small3.jpg","assets/images/small4.jpg","assets/images/small5.jpg","assets/images/small6.jpg"];
  let nizAlt=["lake forest","summer trees","big tree","huge forest","park trees","trees on sun"];
  let nizBig=["assets/images/big1.jpg","assets/images/big2.jpg","assets/images/big3.jpg","assets/images/big4.jpg","assets/images/big5.jpg","assets/images/big6.jpg"]
  let gallery=document.querySelector("#gallery");
  let html="";
  for(var i=0;i<nizSlike.length;i++){
    html+=`
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
    <div class="service-box">
       <figure>
          <a  data-fancybox="gallery" href="${nizBig[i]}"><img  src="${nizSlike[i]}" class="zoom img-fluid "  alt="${nizAlt[i]}"></a>       
       </figure>
    </div>
 </div>
  `
  }
  gallery.innerHTML=html;
}
/*---------*/
/*slijder u Our work*/
  function ispisOurwork(){
  let nizSlike=["assets/images/tree1.jpg","assets/images/tree2.jpg","assets/images/tree3.jpg"];
  let nizAlt=["plant tree","workers plant","tree planting"];
  let nizClass=["first-slide","second-slide","third-slide"];
  let slider=document.querySelector("#work");
  let html="";
  for(var i=0;i<nizSlike.length;i++){
    html+=`
    <div class="carousel-item"> <img class="${nizClass[i]}" src="${nizSlike[i]}" alt="${nizAlt[i]}"> </div>
  `
  }
  slider.innerHTML=html;
  slider.children[0].classList.add("active");
}
/*---------*/
/*slijder u contact*/
 function ispisAutor(){
  let nizSlike=["assets/images/slika1.jpg","assets/images/slika2.jpg"];
  let nizAlt=["author","author photo"];
  let nizClass=["first-slide","second-slide"];
  let slider=document.querySelector("#autorslide");
  let html="";
  for(var i=0;i<nizSlike.length;i++){
    html+=`
    <div class="carousel-item">
    <img class="img-fluid ${nizClass[i]}" src="${nizSlike[i]}" alt="${nizAlt[i]}">
    <div class="container">
       <div class="carousel-caption relat">
          <h3>Nemanja Jezdic 30/19</h3>
          <span><i class="fa fa-quote-left"></i> ( Author )<i class="fa fa-quote-right"></i></span>
          <p>I would describe myself as positive hard working person that's ready for new challenges. So far i'm skilled in HTML,CSS,Bootstrap,C,Java,C#,JavaScript,Jquery,AJAX and i'm also trying to improve by learing new technologies.</p>
       </div>
    </div>
 </div>
  `
  }
  slider.innerHTML=html;
  slider.children[0].classList.add("active");
 }
/*---------*/
/*social ikonice u footeru*/
  function ispisIcon(){
      let nizSrc=["assets/icon/fb.png","assets/icon/tw.png","assets/icon/lin (2).png","assets/icon/instagram.png"];
      let nizAlt=["facebook icon","twitter icon","linkedin icon","instagram icon"];
      let nizSajt=["https://sr-rs.facebook.com/","https://twitter.com/?lang=sr","https://www.linkedin.com/","https://www.instagram.com/"]
      let contactIcon=$(".contant_icon")[0];
      let html="";
      for(var i=0;i<nizSrc.length;i++){
          html+=`
             <li><a href="${nizSajt[i]}" target="_blank"><img src="${nizSrc[i]}" alt="${nizAlt[i]}"/></a></li>
          `
      }
      contactIcon.innerHTML=html;
  }

  /*--------*/
