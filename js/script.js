$(document).ready(function () {
  $('#fullpage').fullpage({
    //options here
    // responsiveWidth: 1000, // fullpage 해제 분기점
    anchors: ['HOME', 'PROFILE', 'WORK', 'CONTACT'],
    menu: '#enu',
    navigation: true,
    navigationTooltips: ['HOME', 'PROFILE', 'WORK', 'CONTACT'],
    navigationPosition: 'right',
  });


  // 메인에서 상단이동
  $('#btnGoTop').click(function () {
    $.fn.fullpage.moveTo(1, 1); // 이동하고싶은 페이지
  });


  var typingBool = false;
  var typingBool1 = false;
  var typingIdx = 0;
  var liIndex = 0;
  var liIndex2 = 0;
  var liLength = $(".typing-txt1>ul>li").length;
  var liLength2 = $(".typing-txt2>ul>li").length;
  var del = -1;
  var repeatInt = null;
  var tyInt = null;

  // 타이핑될 텍스트를 가져온다 
  var typingTxt = $(".typing-txt1>ul>li").eq(liIndex).text();
  typingTxt = typingTxt.split(""); // 한글자씩 자른다. 

  if (typingBool == false) {
    // 타이핑이 진행되지 않았다면 
    typingBool = true;
    tyInt = setInterval(typing, 200); // 첫번재 반복동작 
  }

  function typing() {
    if (typingIdx < typingTxt.length) {

      // 타이핑될 텍스트 길이만큼 반복 
      $(".typing>ul>li").removeClass("on")
      $(".typing ul li").eq(liIndex).addClass("on")
      $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]);
      // 한글자씩 이어준다. 
      typingIdx++;
      if (typingIdx == typingTxt.length) {
        if (liIndex == 2) {
          clearInterval(tyInt);
          setTimeout(function () {
            $(".typing>ul>li").removeClass("on")
          }, 500);
        } else {
          //첫번째 단어가 써지면 2초 쉰다.

          clearInterval(tyInt);
          setTimeout(function () {
            tyInt = setInterval(typing, 200);
          }, 2000);
        }
      }
    } else {
      //한문장이끝나면
      if (liIndex == 1 && typingBool1 == false) {
        if (-typingTxt.length - 1 < del) {
          //한글자씩 지운다.
          $(".typing ul li").eq(liIndex).html(typingTxt.slice(0, del))
          del--;
        } else {

          //변수초기화 
          typingIdx = 0;
          del = -1;
          typingTxt = $(".typing-txt2>ul>li").eq(liIndex2).text();
          liIndex2++;
          if (liIndex2 == liLength2) {
            typingBool1 = true;
          }

          //1초후 다음문장 타이핑 
          clearInterval(tyInt);
          setTimeout(function () {
            tyInt = setInterval(typing, 200);
          }, 1000);
        }
      } else {
        typingIdx = 0;
        if (liIndex <= liLength - 1) {
          liIndex++;
        }
        typingTxt = $(".typing-txt1>ul>li").eq(liIndex).text();

      }
    }
  }


});
