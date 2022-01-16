// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        document.getElementById("myBtn1").style.display = "block";
    } else {
        document.getElementById("myBtn1").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


/* $(() => {
    //=========================== Menu nav-bar ============================\\
    $(document).scroll(() => {
        if ($(window).scrollTop() > 200) {
            $(".nav-bar").addClass("nav-bar-scroll");
            $(".nav-bar-inner").addClass("nav-bar-inner-scroll");
        } else {
            $(".nav-bar").removeClass("nav-bar-scroll");
            $(".nav-bar-inner").removeClass("nav-bar-inner-scroll");
        }
    });



    //=========================== Scroll up ============================\\

    $(document).scroll(() => {
        if ($(window).scrollTop() > 600) {
            $(".up-arrow").addClass("up-arrow_visible");
        } else {
            $(".up-arrow").removeClass("up-arrow_visible");
        }
    });

    //=========================== Pics about us ============================\\

    $(document).scroll(() => {
        if ($(window).scrollTop() > 600) {
            $(".img-first").addClass("img-showing");
        }
    });

    $(document).scroll(() => {
        if ($(window).scrollTop() > 1300) {
            $(".img-second").addClass("img-showing");
        }
    });


    //=========================== Pics in Gallery ============================\\

    $(document).scroll(() => {
        if ($(window).scrollTop() > 3175) {
            $(".left-picture").addClass("visible");
        }
    });
    $(document).scroll(() => {
        if ($(window).scrollTop() > 3175) {
            $(".right-pictures__first-img").addClass(
                "right-pictures__first-img_visible"
            );
        }
    });
    $(document).scroll(() => {
        if ($(window).scrollTop() > 3175) {
            $(".right-pictures__second-img").addClass(
                "right-pictures__second-img_visible"
            );
        }
    });
    $(document).scroll(() => {
        if ($(window).scrollTop() > 3175) {
            $(".right-pictures__third-img").addClass(
                "right-pictures__third-img_visible"
            );
        }
    });
    $(document).scroll(() => {
        if ($(window).scrollTop() > 3175) {
            $(".right-pictures__fourth-img").addClass(
                "right-pictures__fourth-img_visible"
            );
        }
    });

    //=========================== Menu ============================\\

    $(document).scroll(() => {
        if ($(window).scrollTop() < 600) {
            $(".menu__link_checked").removeClass("menu__link_checked");
            $(".menu__link-about-us").addClass("menu__link_checked");
        }
    });

    $(document).scroll(() => {
        if ($(window).scrollTop() > 600 && $(window).scrollTop() < 2200) {
            $(".menu__link_checked").removeClass("menu__link_checked");
            $(".menu__link-projects").addClass("menu__link_checked");
        }
    });

    $(document).scroll(() => {
        if ($(window).scrollTop() > 2200 && $(window).scrollTop() < 4400) {
            $(".menu__link_checked").removeClass("menu__link_checked");
            $(".menu__link-news").addClass("menu__link_checked");
        }
    });

    $(document).scroll(() => {
        if ($(window).scrollTop() > 4200) {
            $(".menu__link_checked").removeClass("menu__link_checked");
            $(".menu__link-contact").addClass("menu__link_checked");
        }
    });
    //=========================== Header slider ============================\\

    $(document).ready(function () {
        $(".up-arrow").click(function () {
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top + "px",
            }, {
                duration: 750,
                easing: "swing",
            });
            return false;
        });
    });

    $(document).ready(function () {
        $(".menu__link-about-us").click(function () {
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top + "px",
            }, {
                duration: 750,
                easing: "swing",
            });
            return false;
        });
    });

    $(document).ready(function () {
        $(".menu__link-projects").click(function () {
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top + "px",
            }, {
                duration: 750,
                easing: "swing",
            });
            return false;
        });
    });

    $(document).ready(function () {
        $(".menu__link-news").click(function () {
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top + "px",
            }, {
                duration: 750,
                easing: "swing",
            });
            return false;
        });
    });

    $(document).ready(function () {
        $(".menu__link-contact").click(function () {
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top + "px",
            }, {
                duration: 750,
                easing: "swing",
            });
            return false;
        });
    });

    $(document).ready(function () {
        $(".arrow").click(function () {
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top + "px",
            }, {
                duration: 1000,
                easing: "swing",
            });
            return false;
        });
    });

    $(".burger-menu__button").click(() => {
        if ($(".menu").hasClass("menu_visible")) {
            $(".menu").removeClass("menu_visible");
        } else {
            $(".menu").addClass("menu_visible");
        }
    });

    $(".header-slider-block").slick({
        dots: true,
        slidesToShow: 1,
        focusOnSelect: false,
        accessibility: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 1200,
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: false,
            },
        }, ],
    });

    // slider для блока news

    $(".news-block").slick({
        dots: true,
        slidesToShow: 3,
        focusOnSelect: false,
        accessibility: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1200,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: false,
                },
            },
        ],
    });
});
 */
