$('.modal-overlay').on('click', function(e) {
    if($(e.target).closest('.modal').length == 0) {
        $(this).fadeOut();
    }
});

$('.close').on('click', function() {
    $(this).parents('.modal-overlay').fadeOut()
})

// $('.modal-video').on('click', function(e) {
//     if($(e.target).closest('.modal-video').length == 0) {
//         $(this).fadeOut();
//     }
// });

$('.close').on('click', function() {
    $('.video').prop('muted', true);
    $(this).parents('.modal-video').fadeOut()
})

$('#play_video').on('click', function() {
    $('.modal-video').fadeIn()
})

$('.modal_button').on('click', function() {
    $('.modal-overlay').fadeIn()
})