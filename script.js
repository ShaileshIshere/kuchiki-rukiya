let time = gsap.timeline();

time.from("#navbar h2", {
    y: -50,
    opacity: 0,
    delay: 0.2,
    duration: 0.8,
    /* this property enables the linewise apppearance of
    objects in this case all the "h2" will appear one by
    one all performing the above animations */
    stagger: 0.7
})
time.from("#main h1", {
    x: -500,
    duration: 0.8,
    opacity: 0,
    delay: 0.2,
    stagger: 0.7
})
time.from("img", {
    x: 120,
    rotate: 45,
    opacity: 0,
    duration:1,
    delay: 0.2,
    stagger: 0.8
})