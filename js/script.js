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
    // Clone applications to get a second collection
    var $data = $(".portfolio-area").clone();
    
    //NOTE: Only filter on the main portfolio page, not on the subcategory pages
    $('.portfolio-categ li').click(function(e) {
        $(".filter li").removeClass("active");    
        // Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)
        var filterClass=$(this).attr('class').split(' ').slice(-1)[0];
        
        if (filterClass == 'all') {
            var $filteredData = $data.find('.portfolio-item2');
        } else {
            var $filteredData = $data.find('.portfolio-item2[data-type=' + filterClass + ']');
        }
        $(".portfolio-area").quicksand($filteredData, {
            duration: 600,
            adjustHeight: 'auto'
        }, function () {
                lightboxPhoto();
                        });        
        $(this).addClass("active");             
        return false;
    });
    jQuery("a[rel^='prettyPhoto']").prettyPhoto({
        animationSpeed:'fast',
        slideshow:5000,
        theme:'light_rounded',
        show_title:false,
        overlay_gallery: false
    });
 
}



const hamburger = document.querySelector('.hamburger'),
    hiddenmenu = document.querySelector('.hiddenmenu'),
    hiddenmenulink = document.querySelector('.hiddenmenu__list'),
    closeElem = document.querySelector('.hiddenmenu__close');
 
hamburger.addEventListener('click', () => {
    hiddenmenu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    hiddenmenu.classList.remove('active');
});

hiddenmenulink.addEventListener('click', () => {
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