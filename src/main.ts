// Options
const timing = 600;

//
$(".info").removeClass("hidden");
$(".info").slideUp(-1);

const slideIn = (target: string) => {
  $(".links").slideUp(timing, () => {
    $(target).slideDown(timing);
  });
};
$(".back").on("click", (e) => {
  e.stopPropagation();
  if (e.target.classList.contains("bi")) {
    e.target.parentElement?.classList.forEach((c) => {
      if (c !== "back") {
        $("." + c).slideUp(timing, () => {
          $(".links").slideDown(timing);
        });
      }
    });
    return;
  }
  e.target.classList.forEach((c) => {
    if (c !== "back") {
      $("." + c).slideUp(timing, () => {
        $(".links").slideDown(timing);
      });
    }
  });
});

$(".movie-db").on("click", () => {
  slideIn(".movie");
});
$(".three-js").on("click", () => {
  slideIn(".three");
});

$(".landing-page").on("click", () => {
  slideIn(".landing");
});

$(".jq-game").on("click", () => {
  slideIn(".game");
});
const time = new Date();
$("#date-el").text(time.getFullYear());
export default {};
