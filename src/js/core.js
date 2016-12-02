Handlebars.registerHelper('toLowerCase', function(str) {
  return str.toLowerCase();
});

  $(".toggleNav").click(function () {
    $("#subnav").toggleClass("active");
    $(".toggleNavButton").toggleClass("active");
 });
