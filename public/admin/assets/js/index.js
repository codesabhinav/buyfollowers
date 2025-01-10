// Sidebar js
$("#sidebar-toggle").click(function () {
  var getattr = $(".sidebar-wrap").attr("class");
  if (getattr == "sidebar-wrap") {
    $(".sidebar-wrap").addClass("active");
  } else {
    $(".sidebar-wrap").removeClass("active");
  }
});

$(".sidebar-wrap .bg-shadow").click(function () {
  $(".sidebar-wrap").removeClass("active");
});

// Select2
$(document).ready(function () {
  $(".select2").select2({});

  $("#member-details-select2").select2({
    dropdownParent: $("#member-details"),
  });
});

function initSelect2(){
    $(".select2").select2({});
}
// File upload
$(function() {
  $('.fileUpload').change(function () {
      var filePath = $(this).val().split('\\').pop();
      $(this).parent().parent().find(".filePath").val(filePath);
  });
});
