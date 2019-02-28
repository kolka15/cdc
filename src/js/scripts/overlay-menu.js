import getScrollbarWidth from '../vendor/scroll-width'

const openMenu = $('.js-open-menu')
const body = $('body')


openMenu.on('click', function () {
    const el = $(this)
    const overlayMenuClass = el.data('open')
    const overlayMenu = $(`.${overlayMenuClass}`)
    const close = overlayMenu.find('.js-overlay-close')

    body.css({overflow: 'hidden', paddingRight: `${getScrollbarWidth()}px`})

    overlayMenu.addClass('active')


    $(document).off('keydown.hideOverlay').on('keydown.hideOverlay', function (event) {
        if(openMenu.length) {
            if (event.keyCode === 27) {
                closeOverlay()
            }
        }
    });
    
    close.off('click.closeOverlay').on('click.closeOverlay', function () {
        closeOverlay()
    })
    
    function closeOverlay() {
        body.css({overflow: 'auto', paddingRight: `0`})
        overlayMenu.removeClass('active')
    }

})
