(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['nav.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <li class=\"navLink__"
    + alias4(((helper = (helper = helpers.pageLink || (depth0 != null ? depth0.pageLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageLink","hash":{},"data":data}) : helper)))
    + "\"><a class=\"ipl-canary lnk\" href=\""
    + alias4(((helper = (helper = helpers.pageLink || (depth0 != null ? depth0.pageLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageLink","hash":{},"data":data}) : helper)))
    + ".html\">"
    + alias4(((helper = (helper = helpers.pageTitle || (depth0 != null ? depth0.pageTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageTitle","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = 
  "<nav class=\"browserSize--g3 browserSize--g4\">\n  <ul class=\"gel-wrap\">\n";
  stack1 = ((helper = (helper = helpers.navLinks || (depth0 != null ? depth0.navLinks : depth0)) != null ? helper : alias2),(options={"name":"navLinks","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.navLinks) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "  </ul>\n</nav>\n<nav class=\"toggleNav browserSize--g1 browserSize--g2\">\n  <div class=\"toggleNavBtn ipl-canary lnk\">Menu</div>\n  <div id=\"subnav\">\n  <ul>\n";
  stack1 = ((helper = (helper = helpers.navLinks || (depth0 != null ? depth0.navLinks : depth0)) != null ? helper : alias2),(options={"name":"navLinks","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.navLinks) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </ul>\n</div>\n</nav>\n";
},"useData":true});
})();