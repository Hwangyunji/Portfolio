$(document).ready(function () {
  $('#fullpage').fullpage({
    //options here
    // responsiveWidth: 1000, // fullpage 해제 분기점
    sectionsColor: ['gold', '#1abc9c', '#C0C0C0', 'pink'],
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    menu: '#enu',
    navigation: true,
    navigationTooltips: ['HOME', 'PROFILE', 'SKILLS', 'WORKS', 'FOOTER'],
    navigationPosition: 'right',


    //methods
    // 페이지 진입시
    afterLoad: function (anchorLink, index) {
      console.log(index);
      if(index == 3) {
        $('#section3 > div').append('<p>원대한 꿈에 도약합니다!</p>');
        $('#rocket').addClass('play');
      } else { $('#rocket').removeClass('play'); }
    }
  });
  // 메인에서 상단이동
  $('#btnGoTop').click(function () {
    //$.fn.fullpage.setScrollingSpeed(0); 효과를 없애고싶을때
    $.fn.fullpage.moveTo(1, 1); // 이동하고싶은 페이지
    //$.fn.fullpage.setScrollingSpeed(700); 효과를 없애고싶을때
  });
});


