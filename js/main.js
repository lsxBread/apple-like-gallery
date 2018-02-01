$('.icon li').on('click',(e) => {
    $(e.currentTarget).addClass('active')
    .siblings().removeClass('active');

    var movingDistance = $('.icon li').index($(e.currentTarget)) * 920;


    $('.window > .pictures').css({
        'margin-left': '-' + movingDistance +'px',
        transition: 'all 0.5s'
    })
});