$(document).ready(function () {
  //SCROLL ON BUTTONS
  $(".jq--scroll-to-arts").click(function () {
    $("html, body").animate({ scrollTop: $(".jq--arts").offset().top }, 6000);
  });

  $(".jq--scroll-to-services").click(function () {
    $("html, body").animate(
      { scrollTop: $(".jq--services").offset().top },
      1000
    );
  });

  $(".jq--scroll-to-footer").click(function () {
    $("html, body").animate({ scrollTop: $(".jq--footer").offset().top }, 3000);
  });

  /* Mobile navigation */
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon");

    nav.slideToggle(200);

    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
    }
  });
});
