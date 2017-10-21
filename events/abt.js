var $li = $('#left_menu li').click(function() {
    $li.removeClass('selected');
    $(this).addClass('selected');
});