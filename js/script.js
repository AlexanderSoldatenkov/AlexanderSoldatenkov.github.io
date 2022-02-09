// $(document).ready(function () {
//     $("#first").blowup({
//         "scale": 2,
//         "width" : 700,
//         "height" : 700,
//         "round": false
//     });
    
// });


// $(document).ready(function () {
//     var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

//     $('.gallery a').on('open.simplelightbox',function () {
        
//           // do something…
          

//         });
        

// });


const hamburger = document.querySelector('.hamburger'),
    hiddenmenu = document.querySelector('.hiddenmenu'),
    closeElem = document.querySelector('.hiddenmenu__close');
 
hamburger.addEventListener('click', () => {
    hiddenmenu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    hiddenmenu.classList.remove('active');
});

$(document).ready(function () {
// Smooth scroll and page up
$(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});


// Mail sender
$('form').submit(function (e) {
    e.preventDefault();

    // if (!$(this).valid()) {
    //     return;
    // }

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find("input").val("");
        // $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});
});