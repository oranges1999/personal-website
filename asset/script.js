function toggleLoader(){
    if($("#loader").hasClass("loader--hidden")){
        $("#loader").removeClass("loader--hidden");
    }else{
        $("#loader").addClass("loader--hidden");
    }
}

function toggleTab(id){
    if($("#"+id).hasClass("show")){
        $("#"+id).removeClass("show");
    }else{
        $("#"+id).addClass("show");
    }
}


$(document).ready(function(){
    setTimeout(toggleLoader,1500);
    var second = new Typed('#typed', {
        strings: ['Gamer', 'Sleeper.', 'Developer.', 'Perfectionist.'],
        typeSpeed: 80,
        backSpeed: 40,
        smartBackspace: true,
        loop: true,
        loopCount: Infinity,
    });
})

$(".tab-btn").on("click",function(){
    toggleLoader();
    var id = $(this).data("id");
    setTimeout(function(){toggleTab(id)},500)
    setTimeout(toggleLoader,1000);
})

$(".close-btn").on("click",function(){
    toggleLoader();
    var id = $(this).data("id");
    setTimeout(function(){toggleTab(id)},500)
    setTimeout(toggleLoader,1000);
})

