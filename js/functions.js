$(window).on("load",function(){"use strict";$("#status").fadeOut(),$("#preloader").delay(350).fadeOut("slow"),$("body").delay(350).css({overflow:"visible"})}),$(window).on("resize",function(){"use strict";1024<=$(window).width()?$("header").headroom({offset:150,tolerance:5,classes:{initial:"animated",pinned:"slideDown",unpinned:"slideUp"}}):$("header").removeClass("animated")}).resize();const tooltipTriggerList=document.querySelectorAll(".tooltip-1"),tooltipList=[...tooltipTriggerList].map(e=>new bootstrap.Tooltip(e));768<=$(window).width()&&$("footer").footerReveal({shadow:!1,zIndex:0}),$("input.icheck").iCheck({checkboxClass:"icheckbox_square-grey",radioClass:"iradio_square-grey"}),$(function(){"use strict";$(".video").magnificPopup({type:"iframe"}),$(".magnific-gallery").each(function(){$(this).magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}})});for(var e=document.querySelectorAll(".cmn-toggle-switch"),t=e.length-1;0<=t;t--){var i=e[t];i.addEventListener("click",function(e){e.preventDefault(),!0===this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")})}$(window).on("scroll",function(){0!=$(this).scrollTop()?$("#toTop").fadeIn():$("#toTop").fadeOut()}),$("#toTop").on("click",function(){$("body,html").animate({scrollTop:0},500)})}),$(".carousel_testimonials").owlCarousel({items:1,loop:!0,autoplay:!1,animateIn:"flipInX",margin:30,stagePadding:30,smartSpeed:450,responsiveClass:!0,responsive:{600:{items:1},1e3:{items:1,nav:!1}}}),$(".numbers-row").append('<div class="inc button_inc">+</div><div class="dec button_inc">-</div>'),$(".button_inc").on("click",function(){"use strict";var e=$(this),t=e.parent().find("input").val();t="+"==e.text()?parseFloat(t)+1:1<t?parseFloat(t)-1:0,e.parent().find("input").val(t)});