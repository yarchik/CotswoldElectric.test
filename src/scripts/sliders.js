window.addEventListener("load", function () {
    $(".section-js").addClass("load");
});


$(window).on('load', function () {

   /* let recommendedVehicles = new Swiper(".s-recommended-chargers .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,


        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });*/
    let introduce = new Swiper(".s-introduce .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 2,
        pagination: {
            el: ".s-introduce .swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 2,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
        },
    });

    /*let gallerySwiper = new Swiper(".swiper-gallery", {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".swiper-gallery .swiper-button-next",
            prevEl: ".swiper-gallery .swiper-button-prev"
        },
        pagination: {
            el: ".swiper-gallery__pagination",
            clickable: true,
        },
    });
*/
    var vehiclesSlider = new Swiper(".s-vehicles__slider", {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        autoHeight: true,
        observer: true,
        observeParents: true,
        calculateHeight:true,
        loop: true,
        navigation: {
            nextEl: ".s-vehicles__slider-wrap .swiper-button-next",
            prevEl: ".s-vehicles__slider-wrap .swiper-button-prev"
        },
        pagination: {
            el: ".s-vehicles__slider-wrap .swiper-pagination",
            clickable: true,
        },
    });

    $(".characteristic").each(function() {

        const $items = $(this).find(".characteristic__item");
        if ($items.length > 5) {
            $items.each(function(i) {
                if (i > 4) $(this).hide();
            });
            const $this = $(this);
            const $showMore = $("<a>").attr("href", "").addClass("showmore").text("Показати більше").click(function() {
                $this.find(".characteristic__item").show();
                $(this).hide();

                vehiclesSlider.update();
                $this.find(".showless").show();


                return false;
            });
            const $showLess = $("<a>").attr("href", "").addClass("showless").text("Згорнути").click(function() {
                if ($items.length > 5) {
                    $items.each(function(i) {
                        if (i > 4) $(this).hide();
                    });
                }

                vehiclesSlider.update()
                $this.find(".showmore").show();
                $this.find(".showless").hide();
                return false;
            });
            $(this).append($showMore);
            $(this).append($showLess);
        }
    });




});


