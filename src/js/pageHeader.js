(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['pageHeader.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"page-header\">\n  <div class=\"gel-wrap\">\n    <div class=\"browserSize gel-layout\">\n      <div class=\"gel-layout__item\">\n        <p class=\"ipl-canary browserSize browserSize--g1\">Breakpoint: G1</p>\n        <p class=\"ipl-canary browserSize browserSize--g2\">Breakpoint: G2</p>\n        <p class=\"ipl-canary browserSize browserSize--g3\">Breakpoint: G3</p>\n        <p class=\"ipl-canary browserSize browserSize--g4\">Breakpoint: G4</p>\n    </div>\n  </div>\n    <div class=\"gel-layout\">\n      <div class=\"gel-layout__item\">\n        <h1 class=\"ipl-eagle-bold title\">"
    + alias4(((helper = (helper = helpers.pageTitle || (depth0 != null ? depth0.pageTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageTitle","hash":{},"data":data}) : helper)))
    + "</h1>\n        <p class=\"ipl-skylark body-copy gel-8/12@m\">"
    + alias4(((helper = (helper = helpers.pageDescription || (depth0 != null ? depth0.pageDescription : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageDescription","hash":{},"data":data}) : helper)))
    + "</p>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
})();
