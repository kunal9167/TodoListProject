$("li").on("click", function() {
  $(this).toggleClass("completed");
});

$("span").on("click", function() {
  $(this).fadeOut(2000, function() {
    $(this).remove();
  });
});
