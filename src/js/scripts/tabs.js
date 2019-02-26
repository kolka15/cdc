$('.ttabz-tab').on('click', function () {
   let $this = $(this);
   if (!$this.hasClass('ttabz-active')) {

      let container = $this.closest('.ttabz');
      let tabs = container.children('.ttabz-tabs-row').find('.ttabz-tab')
      let tabbedBlocks = container.children('.ttabz-content').children('.ttabz-tabbed-block')
      let tabIndex = tabs.index($this);

      tabs.removeClass('ttabz-active');
      $this.addClass('ttabz-active');
      tabbedBlocks.removeClass('ttabz-visible')
         .eq(tabIndex).addClass('ttabz-visible');
   }
});