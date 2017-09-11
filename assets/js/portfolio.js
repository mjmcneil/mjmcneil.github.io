$(document).ready(function () {
    $("#ap-content").load("portfolio/aerialphoto.html");
    $("#ar-content").load("portfolio/assemblyrequired.html");
    $("#hack-content").load("portfolio/hackathon.html");
    $("#personal-content").load("portfolio/personal.html");
    $(".parallax-flipping-cards").collapse('show');
    
    $(".collapse.portfolio-detail").on('show.bs.collapse', function(){
        $(".parallax-flipping-cards").collapse('hide');
    });    
    $(".collapse.portfolio-detail").on('hide.bs.collapse', function(){
        $(".parallax-flipping-cards").collapse('show');
    });
});