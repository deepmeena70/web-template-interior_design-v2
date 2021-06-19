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
    gsap.to('.port-1', { y: 300, duration: 1.5 });
    gsap.to('.port-5', { y: -300, duration: 1.5 });
    gsap.to('.port-3', { y: 300, duration: 1.5 });
};
// contact form
const contactForm = () => {
    gsap.to('.contact-form-animate', { scale: 1.2, duration: 1 });
};

const contactFormRe = () => {
    gsap.to('.contact-form-animate', { scale: 1, duration: 1 });
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
    let animationClass = document.getElementsByClassName("animation");
    for (let el of animationClass) {
        el.style.visibility = "hidden";
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



// load
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

    videoPlay();

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