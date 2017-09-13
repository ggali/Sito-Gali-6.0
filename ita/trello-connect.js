


(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:312544,hjsv:5};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');



// Variabili di configurazione
var markscale = 10;   // percentuale larghezza watermark rispetto all'immagine
var markpad = 10;     // padding watermark
var markurl = "https://raw.githubusercontent.com/ggali/Sito-Gali-7.0/master/assets/azienda/galimberti_watermark_white.png";
var imagesLimit = 15;     // numero di immagini prima del bottone "Guarda altre immagini"

// init scrolldepth
jQuery.scrollDepth({
  pixelDepth: false,
  nonInteraction: false
});





/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-video-setclasses !*/
!function(e,n,a){function o(e){var n=p.className,a=Modernizr._config.classPrefix||"";if(f&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+a+"no-js(\\s|$)");n=n.replace(o,"$1"+a+"js$2")}Modernizr._config.enableClasses&&(n+=" "+a+e.join(" "+a),f?p.className.baseVal=n:p.className=n)}function s(e,n){return typeof e===n}function t(){var e,n,a,o,t,c,r;for(var p in l)if(l.hasOwnProperty(p)){if(e=[],n=l[p],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(a=0;a<n.options.aliases.length;a++)e.push(n.options.aliases[a].toLowerCase());for(o=s(n.fn,"function")?n.fn():n.fn,t=0;t<e.length;t++)c=e[t],r=c.split("."),1===r.length?Modernizr[r[0]]=o:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=o),i.push((o?"":"no-")+r.join("-"))}}function c(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):f?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}var i=[],l=[],r={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var a=this;setTimeout(function(){n(a[e])},0)},addTest:function(e,n,a){l.push({name:e,fn:n,options:a})},addAsyncTest:function(e){l.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=r,Modernizr=new Modernizr;var p=n.documentElement,f="svg"===p.nodeName.toLowerCase();Modernizr.addTest("video",function(){var e=c("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),n.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),n.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(a){}return n}),t(),o(i),delete r.addTest,delete r.addAsyncTest;for(var d=0;d<Modernizr._q.length;d++)Modernizr._q[d]();e.Modernizr=Modernizr}(window,document);


$(window).on("ready", function() {


  // highlight dell'attivo nella navbar
  $(".navbar [href]").each(function() {
    if (this.href == window.location.href)
      $(this).addClass("active");
  });



  // modali persone index
  var buildPersone = function(data) {
    var $section = $("#persone");
    if ($section.length < 1)
      return;

    var idList;
    $.each(data.lists, function( key, list ) {
      if (list.name == "PERSONE") {
        idList = list.id;
        return false
      }
    });

    if (!idList)
      return;

    var $model = $section.find(".trello");
    // $model.hide();

    var extractPhoneNumber = function(val) {
      var i = val.indexOf("+");
      if (i > -1)
        return val.substring(i).replace("-", "").replace(/ /g,'').replace("'0'", "");
      return val;
    }

    $.each(data.cards, function( key, card ) {
      try {
        if (card.idList != idList)
        return;

        console.log(card);
        var $copy = $model.clone();
        var parts = card.desc.split("\n");
        $copy.find("img").attr("src", card.attachments[0].url.replace("https://trello-attachments.s3.amazonaws.com", "http://galimberti.imgix.net") + "?auto=compress,format");
        $copy.find(".nome_contatti").text(card.name);
        $copy.find(".ruolo_contatti").text(parts[0]);
        $copy.find(".card").attr("data-target" , "#" + card.id);
        $copy.show();
        $model.after($copy);

        history.pushState({}, "page 2", "index.html");

        $(window).on('popstate', function() {
          $(".modal").modal('hide');
        });

        // make a new modal
        var $modal = $("body").find($model.find(".card").attr("data-target"));
        var $modalCopy = $modal.clone();
        $modalCopy.find(".img-fluid").attr("src", card.attachments[0].url.replace("https://trello-attachments.s3.amazonaws.com", "http://galimberti.imgix.net") + "?auto=compress,format");
        console.log(card.attachments[1].url);
        $modalCopy.find(".settore").attr("src", card.attachments[1].url.replace("https://trello-attachments.s3.amazonaws.com", "http://galimberti.imgix.net") + "?w=25");
        $modalCopy.attr("id", card.id);
        $modalCopy.find(".nome_contatti").text(card.name);
        $modalCopy.find(".ruolo_contatti span").text(parts[0]);

        $modalCopy.find(".tel-it span").text(parts[1]);
        $modalCopy.find(".tel-it").attr("href", "tel:" + extractPhoneNumber(parts[1]));

        if (parts.length == 4) {
          $modalCopy.find(".tel-ch span").text(parts[2]);
          $modalCopy.find(".tel-ch").attr("href", "tel:" + extractPhoneNumber(parts[2]));
        } else {
          $modalCopy.find(".tel-ch").next().remove();
          $modalCopy.find(".tel-ch").remove();
        }
        $modalCopy.find(".email").attr("href", "mailto:" + parts[parts.length-1]);
        $modalCopy.find(".email span").text(parts[parts.length-1]);

        $modal.after($modalCopy);
      } catch(e) {}
    });
  }

  // load from trello

  $.getJSON( "./trello.json", function( data ) {
    var items = [];
    buildPersone(data);

    var idList = null;
    // find the id list
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);

    $.each(data.lists, function( key, list ) {
      if (list.name == filename) {
        idList = list.id;
        return false
      }
    });

    if (!idList)
      return;

    var resolution = Math.max(window.screen.width, window.screen.height);
    if (resolution > 940)
      resolution = 940;

    var $model = $(".trello");
    var $btnLoadMore = $("#trello-load-more");

    $btnLoadMore.on("click", function() {
      $btnLoadMore.hide();
      $(".trello").show();
    });


    var cardNumber = 0;
    // cards
    $.each(data.cards, function( key, card ) {
      if (card.idList != idList)
        return;

      cardNumber++;

      // we have a card
      // check video

      if (card.desc.indexOf("player.vimeo.com") > 0 || card.desc.indexOf("www.youtube.com") > 0) {
        var $clone = $model.clone();
        var $embed = $('<div class="mt-1 embed-responsive embed-responsive-16by9"></div>');
        var $iframe = $('<iframe ></iframe>');
        $iframe.attr("src", card.desc);
        $embed.append($iframe);
        $clone.find("img").replaceWith($embed);

        if (cardNumber > imagesLimit)
          $clone.hide();

        $clone.insertBefore($btnLoadMore);
        $clone.find("span").text("");
        return;
      }

      // check img
      var $clone = $model.clone();
      var url = card.attachments[0].url.replace("https://trello-attachments.s3.amazonaws.com", "http://galimberti.imgix.net");
      url = url + "?w=" + resolution;
      url = url + "&mark=" + markurl;
      url = url + "&markscale=" + markscale + "&markpad=" + markpad;
      $clone.find("img").attr("src", url);
      $clone.find("img").attr("alt", card.name);


      // we got a link
      if (card.desc.indexOf(".html") != -1) {
        $clone.find("img").wrap($("<a href='" + card.desc + "'></a>"));
        $clone.find("img").css("cursor", "pointer");
      } else {
        $clone.find("img").on("click", function() {
          zoomImage(this);
        });
      }

      if (cardNumber > imagesLimit)
          $clone.hide();

      $clone.insertBefore($btnLoadMore);
      var index = $clone.parent().find("img").index($clone.find("img")[0]);
      $clone.find("span").text(index);

      // $clone.find("div").append("<span class='mt-2' style='color:rgba(255,255,255,0.7);font-size:90%;position: absolute;top: 0px;right: 24px;'>" + index + "</span>");

      // if two col
      if (card.attachments.length > 1) {

        var $col = $clone.find(".col-lg-12");
        $col.removeClass("col-lg-12").addClass("col-lg-6");
        var $secondCol = $col.clone();
        var url = card.attachments[1].url.replace("https://trello-attachments.s3.amazonaws.com", "http://galimberti.imgix.net");
        url = url + "?w=" + resolution;
        url = url + "&mark=" + markurl;
        url = url + "&markscale=" + markscale + "&markpad=" + markpad;
        $secondCol.find("img").attr("src", url);

        // var firstUrl = $col.find("img").attr("src");
        // $col.find("img").attr("src", firstUrl);
        $secondCol.find("img").attr("alt", card.name);

        if (card.desc.indexOf(".html") != -1) {
          $secondCol.find("img").wrap($("<a href='" + card.desc + "'></a>"));
        } else {
          $secondCol.find("img").on("click", function() {
            zoomImage(this);
          });
        }


        $col.after($secondCol);

        var index = $clone.parent().find("img").index($secondCol.find("img")[0]);
        $secondCol.find("span").text(index);
        // var index = $clone.parent().find("img").index($secondCol.find("img"));
        // $secondCol.append("<span class='photo-number'>" + index + "</span>");
      }
      // zoom
    });

    if (cardNumber <= imagesLimit)
      $btnLoadMore.hide();

    // show load more button if we have more the img/page limit
    // if (window.screen.width < 940)
    //   return;


    var zoomImage = function(img) {
      // clone, fix width and append
      var index = $model.parent().find("img").index(img);
      document.location.hash = "#" + index;

      // create the wrapper and the full width image
      var $wrapper = $("<div class='full-screen'>\
                          <div class='btn-group mt-1 mx-1  pull-xs-right'>\
                            <!--<label class='btn btn-info' style='pointer-events:none'>N° " + index + "</label>\
                            <div class='btn-group'>\
                              <button class='btn btn-info fa fa-chain' data-toggle='dropdown'></button>\
                              <div class='dropdown-menu dropdown-menu-right p-1'>\
                                <input type='text' size='50' value='"+ document.location +"'>\
                              </div>\
                            </div>\
                            <a class='btn btn-info fa fa-envelope' href='mailto:?body=" + document.location + "'></a>\
                            <a class='btn btn-info fa fa-facebook'></a>-->\
                            <a class='btn btn-light fa fa-close'></a>\
                          </div>\
                        </div>");

      var $img = $("<img>");
      $img.attr("src", $(img).attr("src"));
      $wrapper.append($img);


     $wrapper.find(".fa-close").on("click", function() {
        $("body").removeClass("noscroll");
        $wrapper.remove();
        window.history.pushState(null, "", "#");
      });

      $(window).on('popstate', function() {
          $("body").removeClass("noscroll");
        $wrapper.remove();
        // window.history.pushState(null, "", "#");
      })

      // block the body scroll
      $("body").addClass("noscroll");
      $("body").append($wrapper);
       $wrapper.find(".fa-chain").on("click", function(e) {
          e.preventDefault();
          var input = $wrapper.find("input")[0];
          input.setSelectionRange(0, input.value.length);
      },true)

      $wrapper.find("img").on("click", function() {
        // body back to scroll
        $("body").removeClass("noscroll");
        $wrapper.remove();
        window.history.pushState(null, "", "#");
      });

    }


    try {
      var index = Number(document.location.hash.replace("#", ""));
      if (index != 0)
        zoomImage($model.parent().find("img")[index]);
    } catch(e) {
    }

   $model.hide();

  });

});

// smooth scroll

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top -80
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



  (function() {

  	var style = function(el) {
  		el.style.setProperty("transition", "all .5s ease-out");
  		el.style.setProperty("background", "transparent", "important");
  		el.style.setProperty("box-shadow", "none", "important");
  		el.style.setProperty("transform", "scale(1.1)", "important");
  		el.style.setProperty("transform-origin", "50% -10%", "important");
  	}

  	var unstyle = function(el) {
  		el.style.removeProperty("background");
  		el.style.removeProperty("box-shadow");
  		el.style.removeProperty("transform");
  		el.style.removeProperty("transform-origin");
  	}

  	var s = "<style id='navbar-cover'>.navbar.fixed-top {transform-origin:50% -10%;transform:scale(1.1) !important;box-shadow: none;background: transparent !important;}</style>";
  	document.write(s);

  	document.addEventListener("DOMContentLoaded", function(event) {
      	style(document.querySelector(".navbar.fixed-top"));
      	document.getElementById("navbar-cover").remove();
    	});

  	window.addEventListener("scroll", function() {

  		var scroll = $(window).scrollTop();
  		console.log("scroll", scroll)


  		if (scroll > 15)
  			unstyle(document.querySelector(".navbar.fixed-top"));
  		else
  			style(document.querySelector(".navbar.fixed-top"));

  	})
  })();
