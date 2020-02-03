$(document).ready(function () {
    $('.closed-menu_sign').on('click', function () {
        $(this).toggleClass('close-menu');
        $('body').css({
            position: 'fixed'
        })
        if ($(this).hasClass('close-menu')) {
            $('.header-menu_overlay').css({
                width: '100%',
            })
        } else {
            $('.header-menu_overlay').css({
                width: '0'
            })
        }
    })
    $(".change").click(function () {
        var changing = $(this).parent()
        var parent = $(changing).parent()
        var child = $(parent).find(".choosing-good__img")
        $(child).toggleClass("img-change")
    });

    //  modal
    $('.goods_modal').on('click', function () {
        var attr = $(this).attr('data-val');
        var modal = $('#' + attr);
        modal.removeClass('out')
        $('body').css({
            overflow: 'hidden'
        })
        modal.fadeIn()
    })

    $('.open_modal').on('click', function () {
        var attr = $(this).attr('data-val');
        var modal = $('#' + attr);
        modal.removeClass('out')
        $('body').css({ overflow: 'hidden ' })
        modal.fadeIn()
    })

    $('.close').on('click', function () {
        var prt = $(this).parents('.modal');
        prt.addClass('out')
        setTimeout(function () {
            prt.fadeOut();
        }, 100)
        $('body').css({ overflow: 'visible ' })
    })

    $(window).on('click', function (event) {
        $('.modal').each(function () {
            var gtattr = $(this).attr('id');
            var new_mod = $('#' + gtattr);
            var md_cnt = $(new_mod).find('.modal-content')

            if (event.target === $(md_cnt)[0]) {
                setTimeout(function () {
                    $(new_mod).addClass('out')
                    $(new_mod).fadeOut()

                }, 100)
                $('body').css({ overflow: 'visible ' })
            }
            if (event.target === this) {
                setTimeout(function () {
                    $(new_mod).addClass('out')
                    $(new_mod).fadeOut()

                }, 100)
                $('body').css({ overflow: 'visible ' })
            }
        })
    })

    var video = document.getElementById("video");
    var playpause = document.getElementById("playpause");

    playpause.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            playpause.classList.add("playBtn");
        }
        else {
            video.pause();
            playpause.classList.remove("playBtn");
        }
    })
})
