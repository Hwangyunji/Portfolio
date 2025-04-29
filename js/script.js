$(document).ready(function () {
  let hintShown = false;

  $('#fullpage').fullpage({
    anchors: ['HOME', 'PROFILE', 'WORK', 'CONTACT'],
    menu: '#enu',
    navigation: true,
    navigationTooltips: ['HOME', 'PROFILE', 'WORK', 'CONTACT'],
    navigationPosition: 'right',

    afterLoad: function (origin, destination, direction) {
      // 섹션 3(WORK) 진입 시
      if (destination.anchor === 'WORK') {
        // 모바일에서만 + 한 번만
        if (window.innerWidth <= 767 && !hintShown) {
          hintShown = true;
          const hint = document.querySelector('.slide-hint-overlay');
          if (hint) {
            hint.style.display = 'flex';
            setTimeout(() => {
              hint.style.opacity = '1';
              // 2초 뒤 사라지기
              setTimeout(() => {
                hint.style.opacity = '0';
                setTimeout(() => {
                  hint.style.display = 'none';
                }, 1000); // fade-out 시간
              }, 2000);
            }, 100); // opacity 적용 타이밍
          }
        }
      }
    }
  });

  // 타이핑 효과
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

  var typingTxt = $(".typing-txt1>ul>li").eq(liIndex).text();
  typingTxt = typingTxt.split("");

  if (typingBool == false) {
    typingBool = true;
    tyInt = setInterval(typing, 200);
  }

  function typing() {
    if (typingIdx < typingTxt.length) {
      $(".typing>ul>li").removeClass("on");
      $(".typing ul li").eq(liIndex).addClass("on");
      $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]);
      typingIdx++;
      if (typingIdx == typingTxt.length) {
        if (liIndex == 2) {
          clearInterval(tyInt);
          setTimeout(function () {
            $(".typing>ul>li").removeClass("on");
          }, 500);
        } else {
          clearInterval(tyInt);
          setTimeout(function () {
            tyInt = setInterval(typing, 200);
          }, 500);
        }
      }
    } else {
      if (liIndex == 1 && typingBool1 == false) {
        if (-typingTxt.length - 1 < del) {
          $(".typing ul li").eq(liIndex).html(typingTxt.slice(0, del));
          del--;
        } else {
          typingIdx = 0;
          del = -1;
          typingTxt = $(".typing-txt2>ul>li").eq(liIndex2).text();
          liIndex2++;
          if (liIndex2 == liLength2) {
            typingBool1 = true;
          }
          clearInterval(tyInt);
          setTimeout(function () {
            tyInt = setInterval(typing, 200);
          }, 250);
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
