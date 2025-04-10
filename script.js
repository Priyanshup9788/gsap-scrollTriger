gsap.from("#page1 .box",{
    opacity:0,
    scale : 0,
    delay : 1,
    duration : 2
})

gsap.from("#page2 .box",{
    rotate : 360,
    // delay:1,
    duration:2,
    
    scrollTrigger:{
        trigger : "#page2 .box",
        scroll : "body",
        // markers : true,
        start : "top 50%",
        end : "top 30%",
        scrub:5
    }
})

gsap.to("#page3 h1",{
    left : "-100%",
    delay:1,
    duration:2,
    scrollTrigger:{
        trigger:"#page3",
        scroll :"body",
        start:"top 0%",
        end:"top -150%",
        markers : true,
        scrub : 2,
        pin:true
    }
})