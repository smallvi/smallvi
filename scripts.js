var isScrolling = false;

// Click to scroll
function scrollToAnchor(aid) {
    var aTag = $(aid);
    isScrolling = true;
    $('html,body').animate({ scrollTop: aTag.offset().top }, 'slow', function () {
        isScrolling = false;
    });
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
    if (isScrolling) return;

    var currentScroll = $(this).scrollTop();

    sections.each(function () {
        var sectionTop = $(this).offset().top - 70;
        var sectionBottom = sectionTop + $(this).outerHeight();

        if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
            var id = $(this).attr('id');

            navLinks.removeClass('font-black text-gray-100 scale-125');
            $('a[href="#' + id + '"]').addClass('font-black text-gray-100 scale-125');
        }
    });
});
