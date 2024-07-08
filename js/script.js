
jQuery(document).ready(function($){
  $('#leadForm').submit(function(e){
      
    let formData = new FormData(this);
     
    e.preventDefault();
      
    let action = $.ajax({
            type: 'post',
            url: "https://techversellc.com/send_mail.php",
            data: formData,
            dataType: 'json',
            cache: false,
            contentType: false,
            processData: false
        });
    let parent = $(this);
    action.done(function (response) {
    
     if(response.status){
         toastr.success('Thank you!');
     }   
     else{
         
     toastr.error('Error Occured in submission!');
     }
    
      
    });
    action.fail(function (error) {
     toastr.error('Error Occured in submission!');
    });
      
      
  });  
});



document.addEventListener("DOMContentLoaded", function () {
function applyMouseMoveEffect(sectionClass, containerClass) {
  const sections = document.querySelectorAll(sectionClass);

  sections.forEach((section) => {
    const container = section.querySelector(containerClass);

    section.addEventListener("mousemove", (event) => {
      const rect = section.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const distX = (mouseX - centerX) * 0.1; // Adjust multiplier for desired effect
      const distY = (mouseY - centerY) * 0.1; // Adjust multiplier for desired effect

      gsap.to(container, {
        x: distX,
        y: distY,
        ease: "power1.out",
      });
    });

    section.addEventListener("mouseleave", () => {
      gsap.to(container, {
        x: 0,
        y: 0,
        ease: "power1.out",
      });
    });
  });
}

// Apply the effect to sections with the specified classes
applyMouseMoveEffect(".hoverEffectSec", ".icon-container-hover");
});





jQuery(document).ready(function () {
  let urlStroe = window.location.href;
  jQuery(".locationLink").val(urlStroe);
});

function getCountryByIP() {
  fetch("https://ipinfo.io?token=ab03b394f4fb7c")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const country = data.country;
      document.getElementById("country").value = country;
      document.getElementById("ip").value = data.ip;
      // document.getElementById("country").value = country;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

getCountryByIP();

gsap.registerPlugin(MotionPathPlugin);

gsap.set(".road", { opacity: 1 });
const circles = gsap.utils.toArray(".ani_cnt .icc");
const tl2 = gsap.timeline({ repeat: 20 });

circles.forEach((circle, i) => {
  let start = i / circles.length; // secret sauce for circles
  tl2.to(
    circle,
    {
      motionPath: {
        path: ".mypath",
        align: ".mypath",
        alignOrigin: [0.5, 0.4],
        start: start,
        end: start + 1,
      },
      ease: "none",
      duration: 40,
    },
    0
  );
});

var swiper = new Swiper(".mobileAppCarousel", {
  slidesPerView: 2.1,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
var swiper = new Swiper(".webAppCarousel", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    766: {
    //   slidesPerView: 2.1,
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiperHero = new Swiper(".mySwiperHero", {
//   spaceBetween: 30,
  spaceBetween: 0,
  // effect: "fade",
  speed: 600,
//   parallax: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

jQuery(document).ready(function () {
  jQuery("input#budgetRange").on("change", function () {
    let aa = jQuery(this).val();
    jQuery(".budget-value").text(`$${aa}`);
  });

  jQuery(".testimonial-pic img").click(function () {
    jQuery(this).addClass("active");
    $(this).siblings().removeClass("active");

    jQuery(".testimonial .content").removeClass("active");
    jQuery("#" + $(this).attr("data-alt")).addClass("active");

    // tab1  ==  $(this).attr('data-alt')
  });
});

// jQuery(document).ready(function () {
//   $("#navbarDropdown").on("click", function () {
//     $(".first-dropdown-menu").toggleClass("showing");
//   });
//   //  $("#navbarDropdown").on("click", function() {
//   //    $(".first-dropdown-menu").removeClass("showing");
//   //  });
//   //    $(".first-dropdown-menu").on("mouseover", function() {
//   //    $(this).addClass("showing");
//   //  });

//   // $(".first-dropdown-menu").on("mouseout", function() {
//   //        $(this).removeClass("showing");
//   //      });

//   $("body").on("click", function () {
//     $(".first-dropdown-menu").removeClass("showing");
//   });
// });

jQuery(document).ready(function () {
  $("#navbarDropdown").on("click", function (event) {
    event.stopPropagation();
    $(".first-dropdown-menu").toggleClass("showing");
  });
  $("#navbarDropdown1").on("click", function (event) {
    event.stopPropagation();
    $(".second-dropdown-menu").toggleClass("showing1");
  });

  $("body").on("click", function (event) {
    if (!$(event.target).closest(".first-dropdown-menu").length) {
      $(".first-dropdown-menu").removeClass("showing");
    }
  });
  $("body").on("click", function (event) {
    if (!$(event.target).closest(".second-dropdown-menu").length) {
      $(".second-dropdown-menu").removeClass("showing1");
    }
  });
});




var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-36251023-1"]);
_gaq.push(["_setDomainName", "jqueryscript.net"]);
_gaq.push(["_trackPageview"]);

(function () {
  var ga = document.createElement("script");
  ga.type = "text/javascript";
  ga.async = true;
  ga.src =
    ("https:" == document.location.protocol ? "https://ssl" : "http://www") +
    ".google-analytics.com/ga.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(ga, s);
})();

try {
  fetch(
    new Request(
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      { method: "HEAD", mode: "no-cors" }
    )
  )
    .then(function (response) {
      return true;
    })
    .catch(function (e) {
      var carbonScript = document.createElement("script");
      carbonScript.src =
        "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
      carbonScript.id = "_carbonads_js";
      document.getElementById("carbon-block").appendChild(carbonScript);
    });
} catch (error) {
  console.log(error);
}
