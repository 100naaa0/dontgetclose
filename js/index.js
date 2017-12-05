$('body').mouseover(function(){
  $(this).css({cursor: 'none'});
});

$(document).mousemove(function(e){
  $('#cursor').css({
    left:  e.pageX,
    top:   e.pageY
  });
});



// random element which are not overlapping on page
$(function(){
    var positions = [];
    function position() {
      $( "#people" ).position({
        of: $( ".dotted_border" ),
        my: "center",
        at: "center",
      });
    }
    $(".person").each(function(){
        var ctx = $(this);
        var dim = {
            width: ctx.outerWidth(),
            height: ctx.outerHeight()
        };

        var success = false;
        while (!success){
            // $("#log").append(".");
            dim.left = parseInt(Math.random() * 1440); // * 300은 좌표 범위
            dim.top = parseInt(Math.random() * 600);

            var success = true;
            $.each(positions, function(){
                if (
                    dim.left < this.left + this.width &&
                    dim.left + dim.width > this.left &&
                    dim.top < this.top + this.height &&
                    dim.top + dim.height > this.top
                    ){
                    success = false;
                    }
            });
        }
        positions.push(dim);
        ctx.animate({
          left: dim.left,
          top: dim.top
        });
    });
});

//cursor
(function() {

  var mX, mY, distance,
    $proximity = $('#proximity'),
    $distance = $('#distance'),
    $cursor  = $('#cursor'),
    $person = $('.person');

  // proximity threshold
  var proximity1 = 10;
  var proximity2 = 80;
  var proximity3 = 160;

  function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(
      Math.sqrt(
        Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) +
        Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)
      ) // .floor: 내림 정수값, .pow(n,m): n을 m제곱, .sqrt: 제곱근
    ) - Math.round(elem.width()/2); // .round: 반올림/내림 정수값
  }

  $(document).mousemove(function(e) {
    mX = e.pageX;
    mY = e.pageY;
    distance = calculateDistance($person, mX, mY);

      if(distance > proximity3) {
        $cursor.removeClass("level1_c");
          $cursor.addClass("level3_c");
      }
      if (distance < proximity3 && distance > proximity2) {
        $cursor.removeClass("level3_c");
          $cursor.addClass("level2_c");
      }
      if (distance < proximity2 && distance > proximity1) {
        $cursor.removeClass("level2_c");
          $cursor.addClass("level1_c");
      }
  });

})();

//element1
(function() {

  var mX, mY, distance,
    $proximity = $('#proximity'),
    $distance = $('#distance'),
    $element1  = $('#element1');

  // proximity threshold
  var proximity1 = 10;
  var proximity2 = 80;
  var proximity3 = 160;

  function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(
      Math.sqrt(
        Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) +
        Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)
      )
    ) - Math.round(elem.width()/2);
  }

  $(document).mousemove(function(e) {
    mX = e.pageX;
    mY = e.pageY;
    distance = calculateDistance($element1, mX, mY);
    $distance.text(distance);

      if(distance > proximity3) {
        $element1.removeClass("level1_1");
          $element1.addClass("level3_1");
      }
      if (distance < proximity3 && distance > proximity2) {
        $element1.removeClass("level3_1");
          $element1.addClass("level2_1");
      }
      if (distance < proximity2 && distance > proximity1) {
        $element1.removeClass("level2_1");
          $element1.addClass("level1_1");
      }
  });

})();

//element2
(function() {

  var mX, mY, distance,
    $proximity = $('#proximity'),
    $distance = $('#distance'),
    $element2  = $('#element2');

  // proximity threshold
  var proximity1 = 10;
  var proximity2 = 80;
  var proximity3 = 160;

  function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(
      Math.sqrt(
        Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) +
        Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)
      )
    ) - Math.round(elem.width()/2);
  }

  $(document).mousemove(function(e) {
    mX = e.pageX;
    mY = e.pageY;
    distance = calculateDistance($element2, mX, mY);
    $distance.text(distance);

      if(distance > proximity3) {
        $element2.removeClass("level1_2");
          $element2.addClass("level3_2");
      }
      if (distance < proximity3 && distance > proximity2) {
        $element2.removeClass("level3_2");
          $element2.addClass("level2_2");
      }
      if (distance < proximity2 && distance > proximity1) {
        $element2.removeClass("level2_2");
          $element2.addClass("level1_2");
      }
  });

})();

//element3
(function() {

  var mX, mY, distance,
    $proximity = $('#proximity'),
    $distance = $('#distance'),
    $element3  = $('#element3');

  // proximity threshold
  var proximity1 = 10;
  var proximity2 = 80;
  var proximity3 = 160;

  function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(
      Math.sqrt(
        Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) +
        Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)
      )
    ) - Math.round(elem.width()/2);
  }

  $(document).mousemove(function(e) {
    mX = e.pageX;
    mY = e.pageY;
    distance = calculateDistance($element3, mX, mY);
    $distance.text(distance);

      if(distance > proximity3) {
        $element3.removeClass("level1_3");
          $element3.addClass("level3_3");
      }
      if (distance < proximity3 && distance > proximity2) {
        $element3.removeClass("level3_3");
          $element3.addClass("level2_3");
      }
      if (distance < proximity2 && distance > proximity1) {
        $element3.removeClass("level2_3");
          $element3.addClass("level1_3");
      }
  });

})();

//element4
(function() {

  var mX, mY, distance,
    $proximity = $('#proximity'),
    $distance = $('#distance'),
    $element4  = $('#element4');

  // proximity threshold
  var proximity1 = 10;
  var proximity2 = 80;
  var proximity3 = 160;

  function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(
      Math.sqrt(
        Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) +
        Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)
      )
    ) - Math.round(elem.width()/2);
  }

  $(document).mousemove(function(e) {
    mX = e.pageX;
    mY = e.pageY;
    distance = calculateDistance($element4, mX, mY);
    $distance.text(distance);

      if(distance > proximity3) {
        $element4.removeClass("level1_4");
          $element4.addClass("level3_4");
      }
      if (distance < proximity3 && distance > proximity2) {
        $element4.removeClass("level3_4");
          $element4.addClass("level2_4");
      }
      if (distance < proximity2 && distance > proximity1) {
        $element4.removeClass("level2_4");
          $element4.addClass("level1_4");
      }
  });

})();

//element5
(function() {

  var mX, mY, distance,
    $proximity = $('#proximity'),
    $distance = $('#distance'),
    $element5  = $('#element5');

  // proximity threshold
  var proximity1 = 10;
  var proximity2 = 80;
  var proximity3 = 160;

  function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(
      Math.sqrt(
        Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) +
        Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)
      )
    ) - Math.round(elem.width()/2);
  }

  $(document).mousemove(function(e) {
    mX = e.pageX;
    mY = e.pageY;
    distance = calculateDistance($element5, mX, mY);
    $distance.text(distance);

      if(distance > proximity3) {
        $element5.removeClass("level1_5");
          $element5.addClass("level3_5");
      }
      if (distance < proximity3 && distance > proximity2) {
        $element5.removeClass("level3_5");
          $element5.addClass("level2_5");
      }
      if (distance < proximity2 && distance > proximity1) {
        $element5.removeClass("level2_5");
          $element5.addClass("level1_5");
      }
  });

})();

//element6
(function() {

  var mX, mY, distance,
    $proximity = $('#proximity'),
    $distance = $('#distance'),
    $element6  = $('#element6');

  // proximity threshold
  var proximity1 = 10;
  var proximity2 = 80;
  var proximity3 = 160;

  function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(
      Math.sqrt(
        Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) +
        Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)
      )
    ) - Math.round(elem.width()/2);
  }

  $(document).mousemove(function(e) {
    mX = e.pageX;
    mY = e.pageY;
    distance = calculateDistance($element6, mX, mY);
    $distance.text(distance);

      if(distance > proximity3) {
        $element6.removeClass("level1_6");
          $element6.addClass("level3_6");
      }
      if (distance < proximity3 && distance > proximity2) {
        $element6.removeClass("level3_6");
          $element6.addClass("level2_6");
      }
      if (distance < proximity2 && distance > proximity1) {
        $element6.removeClass("level2_6");
          $element6.addClass("level1_6");
      }
  });

})();

//element7
(function() {

  var mX, mY, distance,
    $proximity = $('#proximity'),
    $distance = $('#distance'),
    $element7  = $('#element7');

  // proximity threshold
  var proximity1 = 10;
  var proximity2 = 80;
  var proximity3 = 160;

  function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(
      Math.sqrt(
        Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) +
        Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)
      )
    ) - Math.round(elem.width()/2);
  }

  $(document).mousemove(function(e) {
    mX = e.pageX;
    mY = e.pageY;
    distance = calculateDistance($element7, mX, mY);
    $distance.text(distance);

      if(distance > proximity3) {
        $element7.removeClass("level1_7");
          $element7.addClass("level3_7");
      }
      if (distance < proximity3 && distance > proximity2) {
        $element7.removeClass("level3_7");
          $element7.addClass("level2_7");
      }
      if (distance < proximity2 && distance > proximity1) {
        $element7.removeClass("level2_7");
          $element7.addClass("level1_7");
      }
  });

})();

//element8
(function() {

  var mX, mY, distance,
    $proximity = $('#proximity'),
    $distance = $('#distance'),
    $element8  = $('#element8');

  // proximity threshold
  var proximity1 = 10;
  var proximity2 = 80;
  var proximity3 = 160;

  function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(
      Math.sqrt(
        Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) +
        Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)
      )
    ) - Math.round(elem.width()/2);
  }

  $(document).mousemove(function(e) {
    mX = e.pageX;
    mY = e.pageY;
    distance = calculateDistance($element8, mX, mY);
    $distance.text(distance);

      if(distance > proximity3) {
        $element8.removeClass("level1_8");
          $element8.addClass("level3_8");
      }
      if (distance < proximity3 && distance > proximity2) {
        $element8.removeClass("level3_8");
          $element8.addClass("level2_8");
      }
      if (distance < proximity2 && distance > proximity1) {
        $element8.removeClass("level2_8");
          $element8.addClass("level1_8");
      }
  });

})();

//element9
(function() {

  var mX, mY, distance,
    $proximity = $('#proximity'),
    $distance = $('#distance'),
    $element9  = $('#element9');

  // proximity threshold
  var proximity1 = 10;
  var proximity2 = 80;
  var proximity3 = 160;

  function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(
      Math.sqrt(
        Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) +
        Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)
      )
    ) - Math.round(elem.width()/2);
  }

  $(document).mousemove(function(e) {
    mX = e.pageX;
    mY = e.pageY;
    distance = calculateDistance($element9, mX, mY);
    $distance.text(distance);

      if(distance > proximity3) {
        $element9.removeClass("level1_9");
          $element9.addClass("level3_9");
      }
      if (distance < proximity3 && distance > proximity2) {
        $element9.removeClass("level3_9");
          $element9.addClass("level2_9");
      }
      if (distance < proximity2 && distance > proximity1) {
        $element9.removeClass("level2_9");
          $element9.addClass("level1_9");
      }
  });

})();

//element10
(function() {

  var mX, mY, distance,
    $proximity = $('#proximity'),
    $distance = $('#distance'),
    $element10  = $('#element10');

  // proximity threshold
  var proximity1 = 10;
  var proximity2 = 80;
  var proximity3 = 160;

  function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(
      Math.sqrt(
        Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) +
        Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)
      )
    ) - Math.round(elem.width()/2);
  }

  $(document).mousemove(function(e) {
    mX = e.pageX;
    mY = e.pageY;
    distance = calculateDistance($element10, mX, mY);
    $distance.text(distance);

      if(distance > proximity3) {
        $element10.removeClass("level1_10");
          $element10.addClass("level3_10");
      }
      if (distance < proximity3 && distance > proximity2) {
        $element10.removeClass("level3_10");
          $element10.addClass("level2_10");
      }
      if (distance < proximity2 && distance > proximity1) {
        $element10.removeClass("level2_10");
          $element10.addClass("level1_10");
      }
  });

})();

//element11
(function() {

  var mX, mY, distance,
    $proximity = $('#proximity'),
    $distance = $('#distance'),
    $element11  = $('#element11');

  // proximity threshold
  var proximity1 = 10;
  var proximity2 = 80;
  var proximity3 = 160;

  function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(
      Math.sqrt(
        Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) +
        Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)
      )
    ) - Math.round(elem.width()/2);
  }

  $(document).mousemove(function(e) {
    mX = e.pageX;
    mY = e.pageY;
    distance = calculateDistance($element11, mX, mY);
    $distance.text(distance);

      if(distance > proximity3) {
        $element11.removeClass("level1_11");
          $element11.addClass("level3_11");
      }
      if (distance < proximity3 && distance > proximity2) {
        $element11.removeClass("level3_11");
          $element11.addClass("level2_11");
      }
      if (distance < proximity2 && distance > proximity1) {
        $element11.removeClass("level2_11");
          $element11.addClass("level1_11");
      }
  });

})();

//element12
(function() {

  var mX, mY, distance,
    $proximity = $('#proximity'),
    $distance = $('#distance'),
    $element12  = $('#element12');

  // proximity threshold
  var proximity1 = 10;
  var proximity2 = 80;
  var proximity3 = 160;

  function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(
      Math.sqrt(
        Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) +
        Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)
      )
    ) - Math.round(elem.width()/2);
  }

  $(document).mousemove(function(e) {
    mX = e.pageX;
    mY = e.pageY;
    distance = calculateDistance($element12, mX, mY);
    $distance.text(distance);

      if(distance > proximity3) {
        $element12.removeClass("level1_12");
          $element12.addClass("level3_12");
      }
      if (distance < proximity3 && distance > proximity2) {
        $element12.removeClass("level3_12");
          $element12.addClass("level2_12");
      }
      if (distance < proximity2 && distance > proximity1) {
        $element12.removeClass("level2_12");
          $element12.addClass("level1_12");
      }
  });

})();
