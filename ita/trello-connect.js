
// Variabili di configurazione
var markscale = 10;   // percentuale larghezza watermark rispetto all'immagine
var markpad = 10;     // padding watermark
var markurl = "https://raw.githubusercontent.com/ggali/Sito-Gali-7.0/master/assets/icone/galimberti_watermark_white.png";
var imagesLimit = 50;


// init scrolldepth
jQuery.scrollDepth({
  pixelDepth: false,
  nonInteraction: false
});

// jquery visible
// !function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);
(function($){

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *       the user visible viewport of a web browser.
     *       only accounts for vertical position, not horizontal.
     */
    var $w = $(window);
    $.fn.visible = function(partial,hidden,direction){

        if (this.length < 1)
            return;

        var $t        = this.length > 1 ? this.eq(0) : this,
            t         = $t.get(0),
            vpWidth   = $w.width(),
            vpHeight  = $w.height(),
            direction = (direction) ? direction : 'both',
            clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;

        if (typeof t.getBoundingClientRect === 'function2'){

            // Use this native browser method, if available.
            var rec = t.getBoundingClientRect(),
                tViz = rec.top    >= 0 && rec.top    <  vpHeight,
                bViz = rec.bottom >  0 && rec.bottom <= vpHeight,
                lViz = rec.left   >= 0 && rec.left   <  vpWidth,
                rViz = rec.right  >  0 && rec.right  <= vpWidth,
                vVisible   = partial ? tViz || bViz : tViz && bViz,
                hVisible   = partial ? lViz || rViz : lViz && rViz;

            if(direction === 'both')
                return clientSize && vVisible && hVisible;
            else if(direction === 'vertical')
                return clientSize && vVisible;
            else if(direction === 'horizontal')
                return clientSize && hVisible;
        } else {

            var viewTop         = $w.scrollTop(),
                viewBottom      = viewTop + vpHeight,
                viewLeft        = $w.scrollLeft(),
                viewRight       = viewLeft + vpWidth,
                offset          = $t.offset(),
                _top            = offset.top,
                _bottom         = _top + $t.height(),
                _left           = offset.left,
                _right          = _left + $t.width(),
                compareTop      = partial === true ? _bottom : _top,
                compareBottom   = partial === true ? _top : _bottom,
                compareLeft     = partial === true ? _right : _left,
                compareRight    = partial === true ? _left : _right;

            if(direction === 'both')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            else if(direction === 'vertical') {
              console.log(compareTop ,viewTop);
              console.log(compareBottom ,viewBottom);
              return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
            }
            else if(direction === 'horizontal')
                return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
        }
    };

})(jQuery);


// froogaloop
var Froogaloop=function(){function e(a){return new e.fn.init(a)}function g(a,c,b){if(!b.contentWindow.postMessage)return!1;a=JSON.stringify({method:a,value:c});b.contentWindow.postMessage(a,h)}function l(a){var c,b;try{c=JSON.parse(a.data),b=c.event||c.method}catch(e){}"ready"!=b||k||(k=!0);if(!/^https?:\/\/player.vimeo.com/.test(a.origin))return!1;"*"===h&&(h=a.origin);a=c.value;var m=c.data,f=""===f?null:c.player_id;c=f?d[f][b]:d[b];b=[];if(!c)return!1;void 0!==a&&b.push(a);m&&b.push(m);f&&b.push(f);
return 0<b.length?c.apply(null,b):c.call()}function n(a,c,b){b?(d[b]||(d[b]={}),d[b][a]=c):d[a]=c}var d={},k=!1,h="*";e.fn=e.prototype={element:null,init:function(a){"string"===typeof a&&(a=document.getElementById(a));this.element=a;return this},api:function(a,c){if(!this.element||!a)return!1;var b=this.element,d=""!==b.id?b.id:null,e=c&&c.constructor&&c.call&&c.apply?null:c,f=c&&c.constructor&&c.call&&c.apply?c:null;f&&n(a,f,d);g(a,e,b);return this},addEvent:function(a,c){if(!this.element)return!1;
var b=this.element,d=""!==b.id?b.id:null;n(a,c,d);"ready"!=a?g("addEventListener",a,b):"ready"==a&&k&&c.call(null,d);return this},removeEvent:function(a){if(!this.element)return!1;var c=this.element,b=""!==c.id?c.id:null;a:{if(b&&d[b]){if(!d[b][a]){b=!1;break a}d[b][a]=null}else{if(!d[a]){b=!1;break a}d[a]=null}b=!0}"ready"!=a&&b&&g("removeEventListener",a,c)}};e.fn.init.prototype=e.fn;window.addEventListener?window.addEventListener("message",l,!1):window.attachEvent("onmessage",l);return window.Froogaloop=
window.$f=e}();


/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-video-setclasses !*/
!function(e,n,a){function o(e){var n=p.className,a=Modernizr._config.classPrefix||"";if(f&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+a+"no-js(\\s|$)");n=n.replace(o,"$1"+a+"js$2")}Modernizr._config.enableClasses&&(n+=" "+a+e.join(" "+a),f?p.className.baseVal=n:p.className=n)}function s(e,n){return typeof e===n}function t(){var e,n,a,o,t,c,r;for(var p in l)if(l.hasOwnProperty(p)){if(e=[],n=l[p],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(a=0;a<n.options.aliases.length;a++)e.push(n.options.aliases[a].toLowerCase());for(o=s(n.fn,"function")?n.fn():n.fn,t=0;t<e.length;t++)c=e[t],r=c.split("."),1===r.length?Modernizr[r[0]]=o:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=o),i.push((o?"":"no-")+r.join("-"))}}function c(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):f?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}var i=[],l=[],r={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var a=this;setTimeout(function(){n(a[e])},0)},addTest:function(e,n,a){l.push({name:e,fn:n,options:a})},addAsyncTest:function(e){l.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=r,Modernizr=new Modernizr;var p=n.documentElement,f="svg"===p.nodeName.toLowerCase();Modernizr.addTest("video",function(){var e=c("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),n.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),n.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(a){}return n}),t(),o(i),delete r.addTest,delete r.addAsyncTest;for(var d=0;d<Modernizr._q.length;d++)Modernizr._q[d]();e.Modernizr=Modernizr}(window,document);


$(window).on("ready", function() {


  // highlight dell'attivo nella navbar
  $(".navbar [href]").each(function() {
    if (this.href == window.location.href)
      $(this).addClass("active");
  });


  // try to start video and connect play button
  var _playing = false; 
  window.toggleVideo = function() {
    $('video')[0].play();
  }
  
  if ($(".section-fill-height video").length) {
    $(".section-fill-height video")[0].play();
    $(".section-fill-height video").on("playing", function() {
      $(".section-fill-height a.need-video").remove();
    });  
  }
  

  // $(".section-fill-height video").on("pause", function() {
  //   _playing = false;
  //   $(".section-fill-height .need-video.fa").removeClass("fa-pause-circle-o");
  //   $(".section-fill-height .need-video.fa").addClass("fa-play-circle-o");
  // });


  // optimize background img in header
  var w = Math.max(window.screen.width, window.screen.height);

  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/en_US/sdk.js', function() {
    FB.init({
      appId: '532070683628144',
      version: 'v2.5' // or v2.0, v2.1, v2.2, v2.3
    });
    // $('#loginbutton,#feedbutton').removeAttr('disabled');
    // FB.getLoginStatus(updateStatusCallback);
  });
  
  // add special class for navbar based on scroll position
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) 
      $("navbar").first().addClass("scrolled");
    else
      $("navbar").first().removeClass("scrolled");

  });

  // go to top
  $("body").append('<a href="#top" class="m-a-0 go-top"><i class="fa fa-fw fa-sort-up d-block"></i><label class="m-a-0" style="font-size:10px; line-height:10px">SU</label></a>');
  $(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
      $(".go-top").addClass("show");
    } else {
      $(".go-top").removeClass("show");
    }
  });

  $('.go-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });



  // video autoplay autostop
  var timeout = null;
  $(window).scroll(function() {
    if (timeout) 
      clearTimeout(timeout);
    
    timeout = setTimeout(function() {
      $('.trello iframe').each(function() {

        var player = $f(this);

        var visible = $(this).visible(false, true,"vertical");
        console.log(visible);
        if(visible) {
          console.log("play");
          player.api("play");
        } else {
          console.log("puse");
          player.api("pause");
        }
      })
    }, 250);
  });


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
        $copy.find("img").attr("src", card.attachments[0].url.replace("https://trello-attachments.s3.amazonaws.com", "http://galimberti.imgix.net") + "?q=75");
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
        $modalCopy.find(".img-fluid").attr("src", card.attachments[0].url.replace("https://trello-attachments.s3.amazonaws.com", "http://galimberti.imgix.net") + "?q=75");
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
      if (card.desc.indexOf("player.vimeo.com") > 0) {
        var $clone = $model.clone();
        var $embed = $('<div class="embed-responsive embed-responsive-16by9"></div>');
        var $iframe = $('<iframe class="m-t-1"></iframe>');
        $iframe.attr("src", card.desc);
        $embed.append($iframe);
        $clone.find("img").replaceWith($embed);

        if (cardNumber > imagesLimit)
          $clone.hide();

        $clone.insertBefore($btnLoadMore);
      
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

      if (cardNumber > imagesLimit)
          $clone.hide();

      $clone.insertBefore($btnLoadMore);

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
        $col.after($secondCol);
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
                          <div class='btn-group m-t-1 m-x-1  pull-xs-right'>\
                            <label class='btn btn-info' style='pointer-events:none'>N° " + index + "</label>\
                            <div class='btn-group'>\
                              <button class='btn btn-info fa fa-chain' data-toggle='dropdown'></button>\
                              <div class='dropdown-menu dropdown-menu-right p-a-1'>\
                                <input type='text' size='50' value='"+ document.location +"'>\
                              </div>\
                            </div>\
                            <a class='btn btn-info fa fa-envelope' href='mailto:?body=" + document.location + "'></a>\
                            <a class='btn btn-info fa fa-facebook'></a>\
                            <a class='btn btn-info fa fa-close'></a>\
                          </div>\
                        </div>");
      
      var $img = $("<img>");
      $img.attr("src", $(img).attr("src"));
      $wrapper.append($img);
      
      $wrapper.find(".fa-facebook").on("click", function() {
        FB.ui(
        {
          method: 'feed',
          name: 'Galimberti - Legno e Bioedilizia',
          link: document.location.href,
          picture: $(img).attr("src"),
          caption: 'www.galimberti.eu',
          description: 'Progettiamo e fabbrichiamo costruzioni, coperture, facciate e pavimenti in legno e materiali naturali.',
          message: ''
        }
      );

      });

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

    $model.parent().find("img").on("click", function() {
      zoomImage(this);
    });


    try {
      var index = Number(document.location.hash.replace("#", ""));
      if (index != 0)
        zoomImage($model.parent().find("img")[index]);
    } catch(e) {
    }
   
   $model.hide();
    
  });

});
