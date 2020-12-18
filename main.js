'use strict';


$(function () {
    let searchContent = function(){
      let searchText = $(this).val(), contentText;
  
      $('.content').each(function() {
        contentText = $(this).text();
  
        if (contentText.indexOf(searchText) != -1) {
          $(this).removeClass('hidden');
        } else {
          $(this).addClass('hidden');
        }
      });
    };
  
    $('#search-text').on('input', searchContent);
});
