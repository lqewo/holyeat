import * as flsFunction from "./modules/functions.js";
flsFunction.isWebp();

 import Swiper, { Navigation, Pagination } from 'swiper';

  const swiper = new Swiper();


  $(function () {

    $('.header__burger').on('click', function (e) {
        e.preventDefault()
        $('.header__burger, .header__burger-menu' ).toggleClass('active');
        $('body').toggleClass('lock');

        })

    $('.header__burger-menu').on('click', function (e) {
        e.preventDefault()
        $(' .active' ).toggleClass('active');
        $('body').toggleClass('lock');

        })




    $(".item__user-star").rateYo({
        rating: 5,
		readOnly: true,
        starWidth: "20px",
        "starSvg": '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.9998 1.33301L10.0688 5.8186L14.9742 6.40022L11.3475 9.75408L12.3102 14.5991L7.9998 12.1863L3.68938 14.5991L4.65209 9.75408L1.02539 6.40022L5.9308 5.8186L7.9998 1.33301Z" fill="#F0B14E" stroke="#F0B14E" stroke-width="1.33333" stroke-linejoin="round"/></svg>'
    });

  });