function toggler(){
    $('body').toggleClass('side-expanded');
    
}

// $(".toggler").mouseover(function(){
//     if($('body').hasClass('side-expanded')){
//         //do nothing
//     }
//     else{
//         $('body').addClass('side-hovered');
//     }
// });
// $(".sidebar").mouseout(function(){
//    if($('body').hasClass('side-expanded')){
//        //do nothing
//    }
//    else{
//     $('body').removeClass('side-hovered');
//    }
// });

$(document).ready(function(){
    $("button").click(function(){
  $("p").toggleClass("main");
});
});



// $(".toggler").mouseover(function(){
//     if($('body').hasClass('side-expanded')){
//         //do nothing
//     }
//     else{
//         $('body').addClass('side-hovered');
//     }
// });
// $(".sidebar").mouseout(function(){
//    if($('body').hasClass('side-expanded')){
//        //do nothing
//    }
//    else{
//     $('body').removeClass('side-hovered');
//    }
// });