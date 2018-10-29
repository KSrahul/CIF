// For onscroll hamburger menu up
document.addEventListener("scroll", function() {
        var scroll = window.scrollY;
        if ((document.querySelector(".hamContainer").className = "hamContainer") && (scroll > 122)) {
            document.querySelector(".hamContainer").className = "hamContainer upHam";
        }
    })
    // For onscroll hamburger menu up


// For onlick hamburger Animation
var toggleMenu = document.querySelector(".mobileMenusContainer");
document.querySelector(".hamContainer").addEventListener("click", function() {
        toggleMenu.classList.toggle("open");
        if (toggleMenu.className == "mobileMenusContainer open") {
            document.body.style.overflow = "hidden";
            document.querySelector(".overlay").className = "overlay showOverlay";
            document.querySelector(".hamContainer").className = "hamContainer animate";

        } else {
            document.body.style.overflow = "scroll";
            document.querySelector(".overlay").className = "overlay";
            document.querySelector(".hamContainer").className = "hamContainer";

        }

    })
    // For onlick hamburger Animation


// Outside click hamburger menu close
document.querySelector(".overlay").addEventListener("click", function() {
        if (toggleMenu.className = "mobileMenusContainer open") {
            toggleMenu.className = "mobileMenusContainer";
            document.body.style.overflow = "scroll";
            document.querySelector(".overlay").className = "overlay";
            document.querySelector(".hamContainer").className = "hamContainer";
        }
    })
    // Outside click hamburger menu close


// For Loader
document.onreadystatechange = function() {
    setTimeout(function() {
        if (document.readyState == "complete") {
            document.body.style.overflow = "scroll";
            document.querySelector(".content").className = "content showContent";
            document.querySelector(".loaderContainer").className = "loaderContainer removeLoader";
        } else {
            document.body.style.overflow = "hidden";
            document.querySelector(".content").className = "content";
            document.querySelector(".loaderContainer").className = "loaderContainer";
        }
    }, 2500)
}

// For Loader

// Find if browser other than chrome
var isChromium = window.chrome;
var winNav = window.navigator;
var vendorName = winNav.vendor;
var isOpera = typeof window.opr !== "undefined";
var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
var isIOSChrome = winNav.userAgent.match("CriOS");

if (isIOSChrome) {
    console.log('is Google Chrome on IOS');
    alert('is Google Chrome on IOS');
} else if (
    isChromium !== null &&
    typeof isChromium !== "undefined" &&
    vendorName === "Google Inc." &&
    isOpera === false &&
    isIEedge === false
) {

} else {
    alert("May be for now, you will be able see few issues on this browser, but please open it on chrome browser to see the actual result");
}
// Find if browser other than chrome