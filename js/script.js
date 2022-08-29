$(document).ready(function () {
  $('#fullpage').fullpage({
    //options here
    // responsiveWidth: 1000, // fullpage 해제 분기점
    // sectionsColor: ['gold', '#1abc9c', '#C0C0C0', 'pink'],
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    menu: '#enu',
    navigation: true,
    navigationTooltips: ['HOME', 'PROFILE', 'SKILLS', 'WORKS', 'FOOTER'],
    navigationPosition: 'right',


    //methods
    // 페이지 진입시
    // afterLoad: function (anchorLink, index) {
    //   console.log(index);
    //   if (index == 3) {
    //     $('#section3 > div').append('<p>원대한 꿈에 도약합니다!</p>');
    //     $('#rocket').addClass('play');
    //   } else {
    //     $('#rocket').removeClass('play');
    //   }
    // }
  });


  // 메인에서 상단이동
  $('#btnGoTop').click(function () {
    //$.fn.fullpage.setScrollingSpeed(0); 효과를 없애고싶을때
    $.fn.fullpage.moveTo(1, 1); // 이동하고싶은 페이지
    //$.fn.fullpage.setScrollingSpeed(700); 효과를 없애고싶을때
  });


  var typingBool = false;
  var typingIdx = 0;
  var liIndex = 0;
  var liLength = $(".typing-txt>ul>li").length;
  var del = -1;
  var repeatInt = null;
  var tyInt = null;


  // 타이핑될 텍스트를 가져온다 
  var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

  typingTxt = typingTxt.split(""); // 한글자씩 자른다. 

  if (typingBool == false) {
    // 타이핑이 진행되지 않았다면 
    typingBool = true;
    tyInt = setInterval(typing, 200); // 첫번재 반복동작 
  }

  function typing() {
    if (typingIdx < typingTxt.length) {
      // 타이핑될 텍스트 길이만큼 반복 
      $(".typing").append(typingTxt[typingIdx]);
      // 한글자씩 이어준다. 
      typingIdx++;
      if (typingIdx == typingTxt.length) {
        //첫번째 단어가 써지면 1분쉰다.
        clearInterval(tyInt);
        setTimeout(function () {
          tyInt = setInterval(typing, 200);
        }, 1000);
      }
    } else {

      //한문장이끝나면
      if (-typingTxt.length - 1 < del) {
        //한글자씩 지운다.
        $(".typing").html(typingTxt.slice(0, del))
        del--;
      } else {
        if (liIndex >= liLength - 1) {
          liIndex = 0;
        } else {
          liIndex++;
        }

        //변수초기화 
        typingIdx = 0;
        del = -1;
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

        //1분후 다음분장 타이핑 
        clearInterval(tyInt);
        setTimeout(function () {
          tyInt = setInterval(typing, 200);
        }, 1000);
      }


    }
  }


});


(function ($) {
  "use strict";
  $(function () {
    function animated_contents() {
      $(".zt-skill-bar > div ").each(function (i) {
        var $this = $(this),
          skills = $this.data('width');

        $this.css({
          'width': skills + '%'
        });

      });
    }

    if (jQuery().appear) {
      $('.zt-skill-bar').appear().on('appear', function () {
        animated_contents();
      });
    } else {
      animated_contents();
    }
  });
}(jQuery));