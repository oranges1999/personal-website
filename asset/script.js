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
        strings: ['Gamer.', 'Sleeper.', 'Developer.', 'Perfectionist.'],
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
    setTimeout(function(){$(".navbar").addClass("bg-black")},500)
    setTimeout(function(){$(".tag").removeClass("show");},500);
    setTimeout(function(){toggleTab(id)},500)
    setTimeout(toggleLoader,1000);
})

$(".close-btn").on("click",function(){
    toggleLoader();
    var id = $(this).data("id");
    setTimeout(function(){$(".navbar").removeClass("bg-black")},500)
    setTimeout(function(){toggleTab(id)},500)
    setTimeout(toggleLoader,1000);
});

$(".close-nav-btn").on("click",function(){
    if($(".navbar").hasClass("expand")){
        $(".navbar").removeClass("expand")
        $(".close-nav-btn").removeClass("rotate-180")
    }else{
        $(".navbar").addClass("expand")
        $(".close-nav-btn").addClass("rotate-180")
    }
});

