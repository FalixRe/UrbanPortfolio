(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });
    
    new WOW().init();
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

})(jQuery);

window.onload = function() {
    let myQuotes = ['Hi! Welcome, hello!',
                    'Let\'s sail!',
                    'And he set sail again...',
                    'Staying home today.',
                    'We and the crater :)',
                    'Whoa, there are more islands here',
                    'Pigeons, pigeons everywhere!',
                    'Kitty, kitty, meow',
                    'Waves',
                    'Nice',
                    'Emm, what now?'
                    ];
    document.getElementById('my-quote').innerHTML = '"'+ myQuotes[Math.floor(myQuotes.length * Math.random())]+'"';  
};