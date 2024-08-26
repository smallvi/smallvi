function hideExampleCode() {
    let example = document.getElementsByClassName('example');

    for (let i = 0; i < example.length; i++) {
        example[i].classList.add('hidden');
    }
}

yoyoTooltip({
    id: '#text',
    content: '😎 <strong>Advance Tooltip</strong> on text',
    direction: 'top',
    delay: '0',
    trigger: 'hover',
    backgroundColor: '#ff0000',
    color: '#ffffff',
    boxShadow: 'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px',
    targetHighlight: true,
    targetTextDecoration: 'underline wavy black 2px',
    targetUnderlineOffset: '10px',
    targetBackgroundColor: 'yellow',
    targetFontWeight: 'bold',
});

document.getElementById('text').onmouseover = function () {
    hideExampleCode();
    document.getElementById('text_code').classList.remove('hidden');
}

yoyoTooltip({
    id: '#top',
    content: '😍 Hello Worlds',
});

document.getElementById('top').onmouseover = function () {
    hideExampleCode();
    document.getElementById('top_code').classList.remove('hidden');
}

yoyoTooltip({
    id: '#bottom',
    direction: 'bottom',
    content: '😁 Hello Worlds',
});

document.getElementById('bottom').onmouseover = function () {
    hideExampleCode();
    document.getElementById('bottom_code').classList.remove('hidden');
}

yoyoTooltip({
    id: '#left',
    direction: 'left',
    content: '😊 Hello Worlds',
});

document.getElementById('left').onmouseover = function () {
    hideExampleCode();
    document.getElementById('left_code').classList.remove('hidden');
}

yoyoTooltip({
    id: '#right',
    direction: 'right',
    content: '😉 Hello Worlds',
});

document.getElementById('right').onmouseover = function () {
    hideExampleCode();
    document.getElementById('right_code').classList.remove('hidden');
}

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

    $('.nav-link').removeClass('font-black text-gray-50');

    $(this).addClass('font-black text-gray-50');

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

            navLinks.removeClass('font-black text-gray-50');
            $('button[href="#' + id + '"]').addClass('font-black text-gray-50');
        }
    });
});