// hero image
const heroImg = () => {
    let tl = gsap.timeline();
    tl.from("#hero-img", { left: 500, width: 0, duration: 3 })
        .from("#hero-image", { left: -500, duration: 3 });
};
// interiors
const interior = () => {
    gsap.from(".animate", { borderRadius: 500, width: 100, height: 100, duration: 3 });

};

const vid = () => {
    gsap.from(".vid-animate", { x: -800, duration: 3, });
    gsap.from(".vid-container", { width: 100, height: 100, borderRadius: 500, duration: 3 });
};



// portfolio
const portfolio = () => {
    if (innerWidth > 800) {
        gsap.to('.port-1', { y: 300, duration: 1.5 });
        gsap.to('.port-5', { y: -300, duration: 1.5 });
        gsap.to('.port-3', { y: 300, duration: 1.5 });
    }

};
// contact form
const contactForm = () => {
    if (innerWidth > 500) {
        gsap.to('.contact-form-animate', { scale: 1.2, duration: 1 });
    }
};

const contactFormRe = () => {
    if (innerWidth > 500) {
        gsap.to('.contact-form-animate', { scale: 1, duration: 1 });
    }

};

const animate_lvl_1 = (target, fun, className, ...el) => {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 1
    };

    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && document.querySelector(el).classList.contains(className)) {
                fun();
                removeClass(className, ...el);
            }
        });
    };

    let observer = new IntersectionObserver(callback, options);


    observer.observe(document.querySelector(target));
};

const ready = () => {
    document.body.style.display = 'block';
    if (innerWidth > 800) {
        let animationClass = document.getElementsByClassName("animation");
        for (let el of animationClass) {
            el.style.visibility = "hidden";
        }
    }
    if (innerWidth < 500) {
        let animationClass = document.getElementsByClassName("mb-animation");
        for (let el of animationClass) {
            el.style.visibility = "hidden";
        }
    }
};

const removeClass = (className, ...el) => {
    for (let element of el) {

        document.querySelector(element).classList.remove(className);
    }
};
const addClass = (className, ...el) => {
    for (let element of el) {

        document.querySelector(element).classList.add(className);
    }
};

const videoPlay = () => {
    let video = document.getElementById("video");
    video.autoplay = true;
    video.load();
};


const animate_lvl_2 = (target, fun, className) => {

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const callback = (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting && document.querySelector(target).classList.contains(className)) {
                removeClass("animation", target);
                addClass("animation-show", target);
                let animation = document.getElementsByClassName("animation-show");
                for (let el of animation) {
                    el.style.visibility = "visible";
                }
                fun();

                removeClass(className, target);
            }
        });
    };



    let observer = new IntersectionObserver(callback, options);

    observer.observe(document.querySelector(target));
};

const mobileAnimate_lvl_1 = (fun, className, ...target) => {

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const callback = (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting && document.querySelector(target).classList.contains(className)) {

                for (let el of target) {
                    removeClass("mb-animation", el);

                    addClass("animation-show", el);
                    let animation = document.getElementsByClassName("animation-show");
                    for (let el of animation) {
                        el.style.visibility = "visible";
                    }
                    removeClass(className, el);
                }
                fun();

            }
        });

    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(document.querySelector(target));

};




//////////// enable and disable scrolling///////////

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
let keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function() { supportsPassive = true; }
    }));
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';


const disableScroll = () => {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
};

const enableScroll = () => {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
};


/////////////////////////// mobile///////////////////////

//toggle

const toggleBtn = document.getElementById("toggle-btn");
const menuSm = document.getElementById("mobile-menu");
const menuSmItemList = document.getElementsByClassName("mb-menu-item");
const playToggle = () => {
    toggleBtn.addEventListener("load", e => {
        let svgDoc = toggleBtn.contentDocument;
        let svgIcon = svgDoc.getElementById("toggle-menu");
        let line1 = svgDoc.getElementById("line-1");
        let line2 = svgDoc.getElementById("line-2");
        let line3 = svgDoc.getElementById("line-3");
        let stroke1 = line2.getAttribute('stroke');
        let stroke2 = "#52442a";
        let active = false;
        svgIcon.addEventListener("click", e => {

            if (active) {
                line3.animate([
                    { transform: 'rotate(0deg)' }
                ], {
                    duration: 300,
                    fill: 'forwards'
                });
                line2.animate([
                    { transform: 'rotate(0deg)' }
                ], {
                    duration: 300,
                    fill: 'forwards'
                });

                line3.animate([
                    { transform: 'translateY(' + (line2.getAttribute('x1') / 2) + 'px)' }
                ], {
                    delay: 300,
                    duration: 200,
                    fill: 'forwards',
                });
                line1.animate([
                    { transform: 'rotate(0deg)' }
                ], {
                    delay: 500,
                    duration: 200,
                    fill: 'forwards',
                });
                toggleBtn.animate([
                    { transform: 'rotate(0deg)' }
                ], {
                    delay: 700,
                    duration: 300,
                    fill: 'forwards',
                });
                setTimeout(() => {
                    line2.setAttribute('stroke', stroke1);
                    line3.setAttribute('stroke', stroke1);
                }, 490);
                active = false;

            } else {
                toggleBtn.animate([
                    { transform: 'rotate(-90deg)' }
                ], {
                    duration: 300,
                    fill: 'forwards',
                });
                line1.animate([
                    { transform: 'rotate(-90deg)' }
                ], {
                    delay: 300,
                    duration: 200,
                    fill: 'forwards',
                });
                line3.animate([
                    { transform: 'translateY(' + (-line2.getAttribute('x1') / 2) + 'px)' }
                ], {
                    delay: 500,
                    duration: 200,
                    fill: 'forwards',
                });
                line3.setAttribute('y1', line2.getAttribute('y1'));
                line3.setAttribute('y2', line2.getAttribute('y2'));
                line2.style.transformOrigin = "center center";
                line3.style.transformOrigin = "center center";

                line2.animate([
                    { transform: 'rotate(-45deg)' }
                ], {
                    delay: 700,
                    duration: 200,
                    fill: 'forwards'
                });
                line3.animate([
                    { transform: 'rotate(45deg)' }
                ], {
                    delay: 700,
                    duration: 200,
                    fill: 'forwards'
                });
                setTimeout(() => {

                    line2.setAttribute('stroke', stroke2);
                    line3.setAttribute('stroke', stroke2);
                }, 490);
                active = true;
            }
            // menu components load
            if (active) {
                setTimeout(() => {
                    menuSm.style.display = 'block';
                    toggleBtn.style.position = "fixed";
                    toggleBtn.style.left = "70%";
                    disableScroll();
                }, 500);


            } else {
                setTimeout(() => {
                    menuSm.style.display = 'none';
                    toggleBtn.style.position = 'initial';
                    toggleBtn.style.left = "0";
                    enableScroll();
                }, 400);

            }

        });
    });
};


const mobilePortfolio = () => {
    if (innerWidth < 500) {
        gsap.from(".port-3", { height: 0, borderTopLeftRadius: 200, borderBottomLeftRadius: 200, duration: 3 });
        gsap.from(".port-4", { width: 0, borderTopRightRadius: 200, borderBottomRightRadius: 200, duration: 2 });
    }
};

const mobilePortfolio_2 = () => {
    if (innerWidth < 500) {
        gsap.from(".port-6", { height: 0, width: 0, borderBottomRightRadius: 200, duration: 3 });
    }

};

const mobilePortfolioText = () => {
    if (innerWidth < 500) {
        gsap.from(".port-text", { y: -30, duration: 2 });
    }
};



// load all
document.addEventListener('DOMContentLoaded', () => {

    ready();
    heroImg();
    animate_lvl_1(".the-interiors",
        interior,
        "animate",
        "#int-img-1",
        "#int-img-2",
        "#int-img-3");


    animate_lvl_2(".video-1", vid, "vid-container");

    mobileAnimate_lvl_1(mobilePortfolio, 'inactive', ".port-3", ".port-4");
    mobileAnimate_lvl_1(mobilePortfolio_2, 'inactive', ".port-6");
    mobileAnimate_lvl_1(mobilePortfolioText, 'inactive', ".port-7", ".port-8",
        ".port-9");

    videoPlay();

    playToggle();

});

document.getElementById("portfolio").addEventListener("mouseover", e => {
    portfolio();
});



document.querySelector(".form-filling").addEventListener("mouseover", e => {
    contactForm();
})
document.querySelector(".form-filling").addEventListener("mouseleave", e => {
    contactFormRe();
});



let darkColor = "#52442a";
let lightColor = "#faf3ed";
let lightColor2 = "#D6D6B1";
let darkColor2 = "#0D090A";
const dark = document.getElementsByClassName("dark");
const light = document.getElementsByClassName("light");

const themeDark = () => {

    document.body.style.backgroundColor = darkColor2;
    document.body.style.opacity = "0.8";
    document.body.style.color = lightColor2;

    for (let el of dark) {
        el.style.display = "block";
    }
    for (let el of light) {
        el.style.display = "none";
    }

    //input
    for (let el of document.getElementsByTagName("input")) {
        el.style.borderColor = lightColor2;
    }
    //textarea
    for (let el of document.getElementsByTagName("textarea")) {
        el.style.borderColor = lightColor2;
    }
    // ham menu icon
    document.getElementById("toggle-btn").setAttribute("data", "/assets/media/img/ham_menu_dark.svg");

    document.getElementById("mobile-menu").style.backgroundColor = darkColor2;



};

const themeLight = () => {
    document.body.style.backgroundColor = lightColor;
    document.body.style.opacity = "initial";
    document.body.style.color = darkColor;

    for (let el of dark) {
        el.style.display = "none";
    }
    for (let el of light) {
        el.style.display = "block";
    }

    //input
    for (let el of document.getElementsByTagName("input")) {
        el.style.borderColor = darkColor;
    }
    //textarea
    for (let el of document.getElementsByTagName("textarea")) {
        el.style.borderColor = darkColor;
    }
    //ham_menu_icon
    document.getElementById("toggle-btn").setAttribute("data", "/assets/media/img/ham_menu.svg");

    document.getElementById("mobile-menu").style.backgroundColor = lightColor;



};

document.querySelector("#theme-dark").addEventListener("click", e => {
    themeDark();
});
document.querySelector("#theme-light").addEventListener("click", e => {
    themeLight();
});