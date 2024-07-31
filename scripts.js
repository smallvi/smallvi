// Click to scroll
function scrollToAnchor(aid) {
    var aTag = $(aid);
    $('html,body').animate({ scrollTop: aTag.offset().top }, 'slow');
}

$('.nav-link').on('click', function (e) {
    e.preventDefault();

    $('.nav-link').removeClass('font-black text-gray-100 scale-125');

    $(this).addClass('font-black text-gray-100 scale-125');

    const targetId = $(this).attr('href');
    scrollToAnchor(targetId);
});

// Scroll effect navigation
var sections = $('div[id^="section"]');
var navLinks = $('.nav-link');

$(window).on('scroll', function () {
    var currentScroll = $(this).scrollTop();

    sections.each(function () {
        var sectionTop = $(this).offset().top - 70; // Adjust for fixed nav height
        var sectionBottom = sectionTop + $(this).outerHeight();

        if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
            var id = $(this).attr('id');

            navLinks.removeClass('font-black text-gray-100 scale-125');
            $('a[href="#' + id + '"]').addClass('font-black text-gray-100 scale-125');
        }
    });
});
