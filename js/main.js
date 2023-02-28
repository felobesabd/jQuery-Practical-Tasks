$(function () {
    /* Start Nav */
    $('.navbar li a').click(function (e) {
        e.preventDefault();
        $("html, body").animate({
           scrollTop:  $("#" + $(this).data('scroll')).offset().top + 1
        }, 1000)
    });

    $('.navbar li a').hover(function () {
        $(this).addClass('active').parent().siblings().find('a').removeClass('active')
    });

    $(window).scroll(function () {
        // navbar
        $(".felo").each(function () {
            if ( $(window).scrollTop() > $(this).offset().top ) {
                let feloId = $(this).attr('id');
                $('.navbar li a[data-scroll="' + feloId + '"]')
                    .addClass('active').parent().siblings().find('a')
                    .removeClass('active');
            }
        })
        // a house
        let hoSc = $(".house");
        if ($(window).scrollTop() > 500) {
            hoSc.fadeIn(500);
        } else {
            hoSc.fadeOut(500);
        }
    });

    /* End Nav */

    /* Start Section */
    $(".felo").css("padding-top", $(".navbar").innerHeight() + 15);
    /* End Section */

    // a house
    $(".house").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
        // $(window).scrollTop(0);
    });
    // Popup
    $(".show-popup").click(function () {
        $($(this).data('popup')).fadeIn(500);
    });
    $(".popup").click(function () {
        $(this).fadeOut(500);
    });
    $(".popup .inner").click(function (ev) {
        ev.stopPropagation();
    });
    $(".popup .close").click(function () {
        $(this).parentsUntil(".popup").parent().fadeOut(500);
    });
    // Buttons from Left
    $(".form-left").hover(function () {
        $(this).find('span').eq(0).animate({
            width: '100%'
        }, 500)
    }, function () {
        $(this).find('span').eq(0).animate({
            width: '0'
        }, 500)
    })
    $(document).keydown(function (er) {
        if (er.keyCode == 27) {
            $(".popup").fadeOut()
        }
    })
    // Buttons from Top
    $(".form-top").hover(function () {
        $(this).find('span').eq(0).animate({
            height: '100%'
        }, 500)
    }, function () {
        $(this).find('span').eq(0).animate({
            height: '0'
        }, 500)
    })
    // Buttons border Bottom
    $(".border-left").hover(function () {
        $(this).find('span').eq(0).animate({
            width: '100%'
        }, 500)
    }, function () {
        $(this).find('span').eq(0).animate({
            width: '0'
        }, 500)
    })
    // Start Progress
    $(".skill .the-progress span").each(function () {
        $(this).animate({
            width: $(this).attr('data-progress')
        }, 1000, function () {
            $('.skill h3 span').text($(this).attr('data-progress'))
        })
    })
    // Drop Down Menu
    $('.drop-menu i').on('click', function () {
        let drop = $(this).parent('.drop-menu');
        drop.toggleClass('is-visible')
        if (drop.hasClass('is-visible')) {
            drop.animate({
                left: 0
            })
            $('body').animate({
                paddingLeft: drop.innerWidth()
            })
        } else {
            drop.animate({
                left: '-' + drop.innerWidth()
            })
            $('body').animate({
                paddingLeft: 0
            })
        }
    })
    // Photos
    let numerImages = $(".images").children().length,
        marginImages = '.5',
        totalMarginImages = (numerImages -1) * marginImages,
        widthImages = (100 - totalMarginImages) / numerImages
    $(".images img").css({
        width: widthImages + '%',
        marginRight: marginImages + '%'
    });
    $(".photos .images img").on("click", function () {
        $(this).addClass('selected').siblings().removeClass('selected')
        $(".photos .main-image img").hide().attr('src', $(this).attr('src')).fadeIn(500)
    })
    $(".photos .chevron-right").on("click", function () {
        if ($(".images .selected").is(':last-child')) {
            $(".images img").eq(0).click()
        } else {
            $(".images .selected").next().click()
        }
    })
    $(".photos .chevron-left").on("click", function () {
        if ($(".images .selected").is(':first-child')) {
            // $(".images img").eq(4).click()
            $(".images img:last").click()
        } else {
            $(".images .selected").prev().click()
        }
    })
    // Projects
    $(".projects .project i").on("click", function () {
        $(this).toggleClass('fa-plus fa-minus').next('p').slideToggle()
    })
    // Message
    $(".message").each(function () {
        $(this).animate({
            right: 0
        }, 1000, function () {
            $(this).delay(3000).fadeOut()
        })
    })
    // OUR FORMS
    let placeAttr = '';
    $("[placeholder]").focus(function () {
        placeAttr = $(this).attr('placeholder')
        $(this).attr('placeholder', '')
    }).blur(function () {
        $(this).attr('placeholder', placeAttr)
    })
    // OUR FORMS input message
    $('[required]').blur(function () {
        if ($(this).val() == '') {
            $(this).next('.input-mess').fadeIn().delay(2000).fadeOut()
        }
    })
    // OUR FORMS input Star
    $('<span class="star">*</span>').insertBefore(':input[required]')
    $(".star").parent('.form').css("position", "relative")
    $('.star').each(function () {
        $(this).css({
            position: 'absolute',
            top: '14px',
            left: $('[required]').innerWidth() - 20,
            color: 'red',
            fontWeight:'bold'
        })
    })
    // OUR FORMS input File
    $(".forms input[type='file']").wrap('<div class="file"></div>')
    $(".file").prepend('<span>Upload Your Files</span>')
    $(".file").append('<i class="fa fa-upload" aria-hidden="true"></i>')
    $(".forms input[type='file']").change(function () {
        $(this).prev('span').text($(this).val())
    })
    // OUR FORMS input-Code
    $(".input-unicode").on('keyup', function (eve) {
        let keyboard = eve.keyCode || eve.which;
        $('.unicode').text(keyboard)
    })
    // OUR FORMS input Auto-Direction // $(this).attr('placeholder',' ادخل اسمك');
    $('.auto-direction').on('keyup', function () {
        if ($(this).val().charCodeAt(0) < 200) {
            $(this).css('direction', 'ltr')
        } else {
            $(this).css('direction', 'rtl')
        }
    })
    // OUR FORMS Comma Input
    $('.input-comma').on('keyup', function (e) {
        let keyboard = e.keyCode || e.which;
        if (keyboard === 188) {
            let inpVal = $(this).val().slice(0, -1);
            $('.comma-pressed')
                .prepend('<span class="somma-val"><i class="fa fa-times" aria-hidden="true"></i>' + inpVal + '</span>')
            $(this).val('')
        }
    })
    // Trim Paragraph
    function trimText(select, maxLength) {
        $(select).each(function () {
            if ($(this).text().length > maxLength) {
                let trimLen = $(this).text().substr(0, maxLength)
                $(this).text(trimLen + ' ....')
            }
        })
    }
    trimText('.trim-paragraph .trim-p-one', 100)
    trimText('.trim-paragraph .trim-p-two', 150)
    trimText('.trim-paragraph .trim-p-three', 200)
    // Button Bounce
    function buttonBounce (selector, times, distanceTop, distanceLeft, speed) {
        for (let i = 0;i < times; i++) {
            $(selector).animate({
                top: '-=' + distanceTop
            }, speed).animate({
                top: '+=' + distanceTop
            }, speed).animate({
                left: '+=' + distanceLeft
            }, speed).animate({
                left: '-=' + distanceLeft
            }, speed)
        }
    }
    $('.button-bounce .bounce-one').on('click', function () {
        buttonBounce($(this), 3, '20px', '30px', 400)
    })
    $('.button-bounce .bounce-two').on('click', function () {
        buttonBounce($(this), 2, '10px', '20px', 500)
    })
    $('.button-bounce .bounce-three').on('click', function () {
        buttonBounce($(this), 4, '40px', '50px', 300)
    })
    // Same Height Divs
    let heightSame = 0;
    $('.same-height div').each(function () {
        if ($(this).height() > heightSame) {
            heightSame = $(this).height();
        }
    })
    $('.same-height div').height(heightSame)
    // Cards
    let zIndex = 0;
    $('.cards .card').on('click', function () {
        $(this).animate({
            left: 90,
            marginTop: 30
        }, 400, function () {
            zIndex--;
            $(this).css('z-index', zIndex)
        }).animate({
            left: $(this).css('left'),
            marginTop: $(this).css('margin-top')
        }, 400)
    }) 
    // Blink Warning
    blinkWarning();
    function blinkWarning() {
        $('.blink-warning .blink').fadeOut(1000, function () {
            $(this).fadeIn(1000)
            blinkWarning();
        })
    }
    // To do List
    let newTask = $('.input-todo');
    $('.form-todo').on('submit', function (e) {
        e.preventDefault()
        if (newTask.val() != '') {
            $('<li>' + newTask.val() + '</li>').appendTo('.ul-todo')
            newTask.val('')
        }
    })
    $('.ul-todo').on('click', 'li', function () {
        $(this).css('text-decoration', 'line-through').delay(200).fadeOut(300)
    })
    // Paragraph Writing
    let wriTyper = $('.typer').data('text'),
        wriTyperLenght = wriTyper.length,
        num = 0,
        theType = setInterval(function () {
           $('.typer').each(function () {
               $(this).text($(this).text() + wriTyper[num])
           })
            num += 1;
           if (num >= wriTyperLenght) {
               clearInterval(theType)
           }
        }, 100);
     /// Price Table
    let price = 0;
    $('.table .price').each(function () {
        price += parseInt($(this).text())
    });
    $('.table tr:last-child td:last-child').text(price)
    // Auto Change Notes
    // (function autoNotes() {
    //   $('.auto-notes .active').each(function () {
    //       if (! $(this).is(':last-child')) {
    //           $(this).delay(1000).fadeOut(1000, function () {
    //               $(this).removeClass('active').next().addClass('active').fadeIn()
    //               autoNotes()
    //           })
    //       } else {
    //           $(this).delay(1000).fadeOut(1000, function () {
    //               $(this).removeClass('active')
    //               $('.auto-notes ul li:eq(0)').addClass('active').fadeIn()
    //               autoNotes()
    //           })
    //       }
    //   })
    // }())
    // Dynamic Tabs
    $('.tabs li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active')
        $('.tabs .tab-divs > div').hide()
        $($(this).data('content')).fadeIn()
    })
    // Switch Span
    $('.switch-span').on('click', function () {
        $(this).next('.tabs').toggleClass('left-tabs')
    })
});



