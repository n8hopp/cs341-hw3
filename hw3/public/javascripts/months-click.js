monthsClickEvent = function( event ) {
    $('.dropbtn').text($(this).text());
}

$(function() {
    $(".months").click(monthsClickEvent);
});