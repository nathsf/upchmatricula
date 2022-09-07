$(document).ready(function(){
    
var current_fs, next_fs, previous_fs; //fieldsets
var opacity;

$(".next").click(function(){
    
    current_fs = $(this).parent(); 
    next_fs = $(this).parent().next();
    prev_fs = $(this).parent().prev();
    
    //Add Class Active
    $(".steps-icon li").eq($("fieldset").index(next_fs)).addClass("active");
    $(".steps-icon li").eq($("fieldset").index(current_fs)).removeClass("active");
    $(".steps-icon li").eq($("fieldset").index(current_fs)).addClass("completed");
 
 console.log('0 ' + current_fs.text());
 console.log('A ' + prev_fs.text());
 console.log('B ' + next_fs.text());
    
    //show the next fieldset

    next_fs.show(); 
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function(now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
                'display': 'none',
                'position': 'relative'
            });
            next_fs.css({'opacity': opacity});
        }, 
        duration: 600
    });
});

$(".previous").click(function(){
    
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    
    //Remove class active
    $(".steps-icon li").eq($("fieldset").index(current_fs)).removeClass("active");
    $(".steps-icon li").eq($("fieldset").index(previous_fs)).removeClass("completed");
    $(".steps-icon li").eq($("fieldset").index(previous_fs)).addClass("active");
    
    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function(now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
                'display': 'none',
                'position': 'relative'
            });
            previous_fs.css({'opacity': opacity});
        }, 
        duration: 600
    });
});

$('.radio-group .radio').click(function(){
    $(this).parent().find('.radio').removeClass('selected');
    $(this).addClass('selected');
});

$(".submit").click(function(){
    return false;
})
    
});




