$(document).ready(function () {
  $('#fullpage').fullpage({
    //options here
    sectionsColor: ['gold', '#1abc9c', '#C0C0C0'],
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    menu: '#enu',
    navigation: true,
    navigationTooltips: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    navigationPosition: 'right'

    //methods
    // 페이지 진입시
    // afterLoad: function (anchorLink, index) {
    //   console.log(index);
    //   if(index == 3) {
    //     $('#section3 > div').append('<p>원대한 꿈에 도약합니다!</p>');
    //     $('#rocket').addClass('play');
    //   } else { $('#rocket').removeClass('play'); }
    // }
  });

});


