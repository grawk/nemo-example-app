require(["jquery"], function ($) {
  $("input[type='button']").on("click", function (evt) {
    var fortextId = $(evt.target).data().fortext,
      text = $("#" + fortextId).val();
    $("#outy").text($("#outy").text() + text);

  });
  $("select").on("change", function (evt) {
    $("#outy").text($("#outy").text() + $("select").val());
  });
  if ($("#latent").length === 1) {
    setTimeout(function() {
       $("#latent").append('<input type="text" id="addedByScript"/><div>Added by script!</div>');
    }, 3000);
  }
});


