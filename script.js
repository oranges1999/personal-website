$(document).ready(function(){
    var showPage = function(){
        $("#loader").addClass("loader--hidden");
    }
    setTimeout(showPage,3000);
    var second = new Typed('#second', {
        strings: ['Developer.', 'Perfectionist.'],
        typeSpeed: 80,
        backSpeed: 40,
        smartBackspace: true,
        loop: true,
        loopCount: Infinity,
    });
})

