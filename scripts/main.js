var anchors = document.querySelectorAll('a[href*="#"]');
for (let e of anchors)
  e.addEventListener("click", function (t) {
    t.preventDefault();
    var n = e.getAttribute("href").substr(1);
    document
      .getElementById(n)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  });
var swiper1 = new Swiper(".multi__slider", {
    spaceBetween: 60,
    autoHeight: !0,
    pagination: { el: ".swiper-pagination", type: "fraction" },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }),
  swiper2 = new Swiper(".reviews__slider", {
    spaceBetween: 60,
    autoHeight: !0,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
(function (m, e, t, r, i, k, a) {
  m[i] =
    m[i] ||
    function () {
      (m[i].a = m[i].a || []).push(arguments);
    };
  m[i].l = 1 * new Date();
  (k = e.createElement(t)),
    (a = e.getElementsByTagName(t)[0]),
    (k.async = 1),
    (k.src = r),
    a.parentNode.insertBefore(k, a);
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(82752496, "init", {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true,
});
document.addEventListener(
  "scroll",
  function (e) {
    swiper2.update();
  },
  { once: !0 }
),
  $(".feedback").click(function () {
    $(".popup-window").show();
  }),
  $(".close-popup").click(function () {
    $(".popup-window").hide();
  });
