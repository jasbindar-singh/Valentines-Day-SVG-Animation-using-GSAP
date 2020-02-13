let lwing = document.querySelector(".lwing path");
let heart = document.querySelector(".heart path");
let fill = document.querySelector(".fill path");
let rwing = document.querySelector(".rwing path");
let crown = document.querySelector(".crown path");
let broke = document.querySelector(".break path");
let yes = document.querySelector(".yes");
let no = document.querySelector(".no");

let t1 = gsap.timeline({ease: 'power4.out'});
let t2 = gsap.timeline({ease: 'power4.out', paused: true});
let t3 = gsap.timeline({ease: 'power4.out', paused: true});

t1
    .to('.heart path', {strokeDashoffset: 0, duration: 4})
    .to('.lwing path', {strokeDashoffset: 0, duration: 2}, '-=3')
    .to('.rwing path', {strokeDashoffset: 0, duration: 2}, '-=2')
    .to('.fill path', {strokeDashoffset: 0, duration: 4}, "-=5")
    .to('.lwing', {duration: 1, yoyo: true, repeat: -1, ease: 'linear', rotation: 7})
    .to('.rwing', {duration: 1, yoyo: true, repeat: -1, ease: 'linear', rotation: -7}, "-=1")
    .to('.wrapper', {y: 40, duration: 5, repeat: -1, yoyo: true, ease: 'linear'}, "-=1")
    .to('.question', {duration: .5, opacity: 1}, "-=5")
    .to('.answer', {duration: .5, opacity: 1});

t2
    .to('.crown', {duration: 0.5, opacity: 1})
    .to('.question', {duration: 0.5, opacity: 0})
    .to('.answer', {duration: 0.5, opacity: 0}, "-=.5")
    .to('.answer', {duration: 0, display: "none"});

t3
    .to('.question', {duration: 0.5, opacity: 0})
    .to('.answer', {duration: 0.5, opacity: 0}, "-=.5")
    .to('.answer', {duration: 0, display: "none"})
    .to('.lwing path', {opacity: 0, duration: 0.5})
    .to('.lwing path', {display: "none", duration: 0})
    .to('.rwing path', {opacity: 0, duration: 0.5})
    .to('.rwing path', {display: "none", duration: 0})
    .to('.fill path', {opacity: 0, duration: 0.5})
    .to('.fill path', {display: "none", duration: 0})
    .to('.break path', {strokeDashoffset: 0, duration: 1});

yes.addEventListener('click', () => {
    t2.play();
});

no.addEventListener('click', () => {
    t3.play();
    t1.kill();
})

// console.log(broke.getTotalLength(), heart.getTotalLength(), rwing.getTotalLength(), fill.getTotalLength());