(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['typoRow.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<tr>\n  <td class=\"ipl-skylark-bold\">"
    + alias4(((helper = (helper = helpers.typeSize || (depth0 != null ? depth0.typeSize : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeSize","hash":{},"data":data}) : helper)))
    + "</td>\n  <td class=\"ipl-canary\">"
    + alias4(((helper = (helper = helpers.usedFor || (depth0 != null ? depth0.usedFor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"usedFor","hash":{},"data":data}) : helper)))
    + "</td>\n  <td class=\"ipl-canary\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.typeSettings : depth0)) != null ? stack1.g1 : stack1), depth0))
    + "</td>\n  <td class=\"ipl-canary\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.typeSettings : depth0)) != null ? stack1.g2 : stack1), depth0))
    + "</td>\n  <td class=\"ipl-canary\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.typeSettings : depth0)) != null ? stack1.g3 : stack1), depth0))
    + "</td>\n</tr>\n";
},"useData":true});
})();