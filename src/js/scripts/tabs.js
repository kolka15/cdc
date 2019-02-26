$('.js-ttabz-tab').on('click', function () {
   let $this = $(this);
   if (!$this.hasClass('js-ttabz-active')) {

      let container = $this.closest('.js-ttabz');
      let tabs = container.children('.js-ttabz-tabs-row').find('.js-ttabz-tab')
      let tabbedBlocks = container.children('.js-ttabz-content').children('.js-ttabz-tabbed-block')
      let tabIndex = tabs.index($this);

      tabs.removeClass('js-ttabz-active');
      $this.addClass('js-ttabz-active');
      tabbedBlocks.removeClass('js-ttabz-visible')
         .eq(tabIndex).addClass('js-ttabz-visible');
   }
});