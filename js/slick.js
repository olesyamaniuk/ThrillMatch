$(function () {
  $(".q-n-why-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".q-n-why-list-left",
    nextArrow: ".q-n-why-list-right",
  });
});
