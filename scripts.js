function scrollToAnchor(aid) {
    var aTag = $("#" + aid);
    $('html,body').animate({ scrollTop: aTag.offset().top }, 'slow');
}

$('.nav-link').on('click', function (e) {
    e.preventDefault();

    // Navigation
    $('.nav-link').removeClass('font-black');
    $('.nav-link').removeClass('text-gray-100');
    $('.nav-link').removeClass('scale-125');

    $(this).addClass('font-black');
    $(this).addClass('text-gray-100');
    $(this).addClass('scale-110');

    const targetId = $(this).attr('href');
    // alert(targetId);
    scrollToAnchor(targetId);
});