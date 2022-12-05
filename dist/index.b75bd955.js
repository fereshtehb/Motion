const ball = document.querySelector(".ball");
//https://popmotion.io/
popmotion.animate({
    from: "0px",
    to: "50px",
    repeat: Infinity,
    repeatType: "mirror",
    type: "spring",
    //the part that update the dom
    onUpdate (update) {
        console.log(update);
        //top
        //ball.style.top = update;
        ball.style.left = update;
    }
});

//# sourceMappingURL=index.b75bd955.js.map
