$('.mouse-parallax').on('mousemove', (e) => {
    const x = e.pageX / $(window).width();
    const y = e.pageY / $(window).height();

    $('.mouse-parallax__bg').css(
        'transform',
        'translate( -' + x*30 + 'px, -' + y*30 + 'px)'
    )
});

function calculate(){
    var inscribed, standart, rune, full, white;

    inscribed = document.getElementById('inscribed').value;
    inscribed = parseFloat(inscribed);

    standart = document.getElementById('standart').value;
    standart = Math.round(parseFloat(standart) * 87) / 100;

    rune = document.getElementById('rune').value;
    rune = Math.round(parseFloat(rune) * 87) / 100;

    full = standart + rune;
    white = standart + rune - inscribed;
    white = Math.round(white * 100) / 100

    document.getElementById('outFull').value = full;
    document.getElementById('outWhite').value = white;
};
