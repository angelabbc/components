
$(document).ready(function(){

  /*individual episode*/
  var eid = "b07y662y";

  $.ajax({
      url:  "https://ibl.api.bbci.co.uk/ibl/v1/episodes/" + eid + ".json",
      dataType:   "json",
      success:    function(data){

        console.log(data.episodes[0])
        var item = data.episodes[0]

        var img = item.images.standard
        var img_pid = img.substring(43,51)
        var img_url = 'http://ichef.bbci.co.uk/images/ic/640x360/' + img_pid +'.jpg';


        $('.programme-title').html(item.title);
        $('.programme-synopsis').html(item.synopses.small);
        $('.episode-title').html(item.subtitle);
        $('.availability').html(item.versions[0].availability.remaining.text);
        $('.added-item').prepend('<img src="' + img_url + '" class="background-image" />')

        console.log(img_pid)

        /*$('.programme-synopsis').html(data.programme.title);
        $('.episode-title').html(data.programme.short_synopsis);
        $('.net').html(data.programme.ownership.service.title);
        /*$('.img').css('background-image', ' url("http://ichef.bbci.co.uk/images/ic/640x360/' + data.programme.image.pid + '.jpg") ');*/
        /*$('.real').attr('src', 'http://ichef.bbci.co.uk/images/ic/640x360/' + data.programme.image.pid + '.jpg' ) */

      }
  });

});
