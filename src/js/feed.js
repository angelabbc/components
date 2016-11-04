
$(document).ready(function(){

  /*individual episode*/
  var eid = "b07y662y";

  $.ajax({
      		url:  "https://ibl.api.bbci.co.uk/v1/categories/arts/programmes",
      dataType:   "json",
      success:    function(data){

        $.each( data.category_programmes.elements, function( i, item ) {


        var prog = item.initial_children[0]
        var img = prog.images.standard.replace('{recipe}', '320xn')


        $(".gel-layout").append('\
        <div class="gel-layout__item gel-1/1 gel-1/2@m gel-1/3@l">\
        <div class="added-item">\
          <img class="background-image" src="' + img + '"/>\
          <div class="added-item-info">\
            <div class="close-icon">\
              <a href="#">\
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">\
                  <g id="Grid"></g>\
                  <g id="Layer_2">\
                    <polygon points="32,3.5 28.5,0 16,12.5 3.5,0 0,3.5 12.5,16 0,28.5 3.5,32 16,19.5 28.5,32 32,28.5 19.5,16 	" />\
                  </g>\
                </svg>\
              </a>\
            </div>\
            <div class="programme-block">\
              <div class="programme-title ipl-goose-bold"><a href="#">' + prog.title + '</a></div>\
              <div class="programme-synopsis ipl-canary">' + prog.synopses.small + ' </div>\
            </div>\
            <div class="episode-block">\
              <div class="label ipl-robin-bold">Added</div>\
              <div class="episode-title ipl-skylark-bold"><a href="#">' + prog.subtitle + '</a></div>\
              <div class="availability ipl-canary"></div>\
              <div class="latest-episode-btn ipl-bullfinch-bold"><a href="#"></a></div>\
            </div>\
          </div>\
          <div class="tleo-block">\
            <div class="tleo-link ipl-bullfinch-bold"><a href="#">8 Episodes Available</a></div>\
          </div>\
          </div>\
        </div>');


  })


        /*$('.programme-synopsis').html(data.programme.title);
        $('.episode-title').html(data.programme.short_synopsis);
        $('.net').html(data.programme.ownership.service.title);
        /*$('.img').css('background-image', ' url("http://ichef.bbci.co.uk/images/ic/640x360/' + data.programme.image.pid + '.jpg") ');*/
        /*$('.real').attr('src', 'http://ichef.bbci.co.uk/images/ic/640x360/' + data.programme.image.pid + '.jpg' ) */

      }
  });

});
