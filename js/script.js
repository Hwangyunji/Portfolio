$(document).ready(function () {
  $('#fullpage').fullpage({
    anchors: ['HOME', 'PROFILE', 'WORK', 'CONTACT'],
    menu: '#enu',
    navigation: true,
    navigationTooltips: ['HOME', 'PROFILE', 'WORK', 'CONTACT'],
    navigationPosition: 'right',
    controlArrows: true,

    afterLoad: function (origin, destination, direction) {
      if (destination.anchor === 'WORK' && window.innerWidth <= 767) {
        const hint = document.querySelector('.slide-hint-overlay');
        if (hint) {
          hint.style.display = 'flex';
        }
      }
    },

    onSlideLeave: function (section, origin, destination, direction) {
      if (section.anchor === 'WORK' && window.innerWidth <= 767) {
        const hint = document.querySelector('.slide-hint-overlay');
        if (hint) {
          hint.style.display = 'none';
        }
      }
    }
  });

  // 모바일 터치 시 힌트 제거
  document.addEventListener('touchstart', function () {
    const hint = document.querySelector('.slide-hint-overlay');
    if (hint && hint.style.display === 'flex') {
      hint.style.display = 'none';
    }
  }, { passive: true });

  // 타이핑 효과
  var typingBool = false;
  var typingBool1 = false;
  var typingIdx = 0;
  var liIndex = 0;
  var liIndex2 = 0;
  var liLength = $(".typing-txt1>ul>li").length;
  var liLength2 = $(".typing-txt2>ul>li").length;
  var del = -1;
  var tyInt = null;

  var typingTxt = $(".typing-txt1>ul>li").eq(liIndex).text();
  typingTxt = typingTxt.split("");

  if (!typingBool) {
    typingBool = true;
    tyInt = setInterval(typing, 200);
  }

  function typing() {
    if (typingIdx < typingTxt.length) {
      $(".typing>ul>li").removeClass("on");
      $(".typing ul li").eq(liIndex).addClass("on");
      $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]);
      typingIdx++;
      if (typingIdx === typingTxt.length) {
        if (liIndex === 2) {
          clearInterval(tyInt);
          setTimeout(() => {
            $(".typing>ul>li").removeClass("on");
          }, 500);
        } else {
          clearInterval(tyInt);
          setTimeout(() => {
            tyInt = setInterval(typing, 200);
          }, 500);
        }
      }
    } else {
      if (liIndex === 1 && !typingBool1) {
        if (-typingTxt.length - 1 < del) {
          $(".typing ul li").eq(liIndex).html(typingTxt.slice(0, del));
          del--;
        } else {
          typingIdx = 0;
          del = -1;
          typingTxt = $(".typing-txt2>ul>li").eq(liIndex2).text();
          liIndex2++;
          if (liIndex2 === liLength2) typingBool1 = true;
          clearInterval(tyInt);
          setTimeout(() => {
            tyInt = setInterval(typing, 200);
          }, 250);
        }
      } else {
        typingIdx = 0;
        if (liIndex <= liLength - 1) liIndex++;
        typingTxt = $(".typing-txt1>ul>li").eq(liIndex).text();
      }
    }
  }
});
