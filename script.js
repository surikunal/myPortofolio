TweenMax.to(".overlay h1", 2.5, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
})

TweenMax.to(".overlay span", 2.5, {
    delay: .3,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
})

TweenMax.to(".overlay", 2.5, {
    delay: 1,
    y: "-100%",
    ease: Expo.easeInOut
})

TweenMax.from(".ellipse-container", 1, {
    delay: 2,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".yellow", 1, {
    delay: 2.5,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".circle1", 1, {
    delay: 2.4,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".circle2", 1, {
    delay: 2.6,
    opacity: 0,
    ease: Expo.easeInOut
})


TweenMax.from(".logo", 1, {
    delay: 3,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".menu-links ul li", 1, {
    delay: 3.2,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
}, 0.1)

TweenMax.from(".scrolldown", 1, {
    delay: 3.4,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut
})

TweenMax.from(".text .title", 1, {
    delay: 3,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut
})

TweenMax.from(".text p", 1, {
    delay: 3.2,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut
})

TweenMax.from(".watchnow", 1, {
    delay: 3.4,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".media ul li", 1, {
    delay: 3,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut
}, 0.1)

// TweenMax.to(".circle1", 2.5, {
//     delay: 1,
//     y: "-100%",
//     ease: Expo.easeInOut
// })

// $(document).ready(function () {
//     TweenMax.set(".circle1", { width: 0 });

//     var t1 = new TimelineLite();

//     $(document)
//         .on("mouseover", ".circle1", function (e) {
//             t1 = new TimelineLite();
//             t1.to($(".circle1"), 2, {
//                 width: "600px",
//                 ease: Expo.easeInOut
//             });
//         })
//         .on("mouseout", ".circle1", function (e) {
//             tl = new TimelineLite();
//             tl.to($(".circle1"), 0.5, {
//                 width: 0,
//                 ease: Expo.easeInOut
//             });
//         });

// });
// $(".circle1").hover(function () {
//     $(".circle1").css({ "font-size": "large" });
// });