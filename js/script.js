$(document).ready(function() {
    $('.tabs-triggers__item').click(function(e) {
        e.preventDefault();

        $('.tabs-triggers__item').removeClass('tabs-triggers__item--active');
        $('.tabs-content__item').removeClass('tabs-content__item--active');

        $(this).addClass('tabs-triggers__item--active');
        $($(this).attr('href')).addClass('tabs-content__item--active');
    });
    $('#main').click();

    $('.slider').slick({
        // centerMode: true,
        // centerPadding: '100px',
        // variableWidth: true,
        focusOnSelect: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        // draggable: false,
        // swipe: false,
        touchMove: false,
        // useTransform: false,
        asNavFor: ".sliderbig",
    });
    $('.sliderbig').slick({
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 3,
        arrows: false,
        fade: true,
        infinite: false,
        // draggable: false,
        // swipe: false,
        // touchMove: false,
        // useTransform: false,
        asNavFor: ".slider"
    });
    // ------------popup------------------
    var stopVideo = function(player) {
        var vidSrc = player.prop('src');
        player.prop('src', ''); // to force it to pause
        player.prop('src', vidSrc);
    };
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

    });

    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.popup');

        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');


        // at some appropriate time later in your code
        stopVideo($('.video'));
        stopVideo($('.video2'));
        stopVideo($('.video3'));
        stopVideo($('.video4'));
        stopVideo($('.video5'));
        stopVideo($('.video6'));
        stopVideo($('.video7'));
        stopVideo($('.video8'));
        stopVideo($('.video9'));
        stopVideo($('.video10'));
        stopVideo($('.video11'));
    });

    $('.popup').on("click", function(event) {

        $(this).removeClass('show');
        $("body").removeClass('no-scroll');
        stopVideo($('.video'));
        stopVideo($('.video2'));
        stopVideo($('.video3'));
        stopVideo($('.video4'));
        stopVideo($('.video5'));
        stopVideo($('.video6'));
        stopVideo($('.video7'));
        stopVideo($('.video8'));
        stopVideo($('.video9'));
        stopVideo($('.video10'));
        stopVideo($('.video11'));
    });

    $('.popup__content').on("click", function(event) {
        event.stopPropagation()
    });


    $('.slider').slick('setPosition');

    $("main").css("display", "none");
    $("main").fadeIn(1800);
    $("a.btn").click(function(event) {
        event.preventDefault();
        linkLocation = this.href;
        $("main").fadeOut(900, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
});
setTimeout(function() {
    document.getElementById("test1").click();
}, 1000);