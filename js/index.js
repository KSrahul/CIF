window.onload = function() {
    // Try to getting all links from nav
    var sections = document.getElementsByClassName("navLinks");
    for (var i = 0; i < sections.length; i++) {
        sections[i].addEventListener("click", navLinks)
    }
    // Try to getting all links from nav (End)

    // trying to getting the current id and minus header height so that scroll reach exact position
    function navLinks() {
        var ids = (this).getAttribute("href");
        if ($(window).width() > 768) {
            $("html,body").animate({
                scrollTop: $(ids).offset().top - 80
            }, 500);
        } else {
            $("html,body").animate({
                scrollTop: $(ids).offset().top
            }, 500);
        }
    }
    // trying to getting the current id and minus header height so that scroll reach exact position (End)

    // Try to geeting, that if screen size is less than 768 than only this code will be work
    if ($(window).width() > 768) {
        // On scroll navigation highlited or active if reach to perticular section
        $(window).scroll(function() {
            var windscroll = $(window).scrollTop() + 80
            $(".contentStart .pageSection").each(function(i) {
                if ($(this).position().top <= windscroll) {
                    $(".pageLinks li a.active").removeClass("active");
                    $(".pageLinks li a").eq(i).addClass("active");
                } else {
                    $(".pageLinks li a").eq(i).removeClass("active");
                }
            });
        // On scroll navigation highlited or active if reach to perticular section (End)
            var scrollPos = pageYOffset;
            if (scrollPos >= 1) {
                document.querySelector(".header").classList.remove("fixed");
                document.querySelector(".logo").classList.remove("logoSmall");
            } else {
                $(".pageLinks li a.active").removeClass("active");
            }

            // If scroll reach to header on the banner then header should be fixed
            if (window.pageYOffset > document.querySelector(".header").offsetTop) {
                document.querySelector(".header").classList.add("fixed");
                document.querySelector(".logo").classList.add("logoSmall");
            }
            // If scroll reach to header on the banner then header should be fixed (End)
    }).scroll();
    } else {
        document.querySelector(".header").classList.remove("fixed");
        document.querySelector(".logo").classList.remove("logoSmall");
    }
    // Try to geeting, that if screen size is less than 768 that only this code will be work (End)

    // the back to top button visible when screen reached 768px
    if ($(window).width() < 768) {
        // show the back to top button when scroll height is 546px
        function topScroll() {
            if (window.pageYOffset >= 546) {
                document.querySelector(".backTop").classList.add("showBackTop")
            } else {
                document.querySelector(".backTop").classList.remove("showBackTop")
            }
        }
        document.addEventListener("scroll", topScroll);
        // show the back to top button when scroll height is 546px (end)

        // when click on back to top button it will take to the top of the page
        document.querySelector(".backTop").addEventListener("click", function() {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        })
        // when click on back to top button it will take to the top of the (end)
    }
    // the back to top button visible when screen reached 768px

    // reloading.. the website when reached 768px screen for testing.. purpose
    window.addEventListener("resize", function() {
        if (window.matchMedia("(max-width: 768px)").matches) {
            setTimeout(function() {
                if ($(window).width() < 768) {
                    location.reload();
                } else {
                    location.reload();
                }
            }, 100)
        }
    });
    // reloading.. the website when reached 768px screen for testing.. purpose (end)
}