$(document).ready(function() {
    $('.tabs-triggers__item').click(function(e){
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
    });

    $('.popup').on("click", function(event) {
        
        $(this).removeClass('show');
        $("body").removeClass('no-scroll');              
    });

    $('.popup__content').on("click", function(event) {
        event.stopPropagation()
    });
    

    $('.slider').slick('setPosition');
});



