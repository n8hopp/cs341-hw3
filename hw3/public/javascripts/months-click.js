// file by Nate Hopper, 2/8

monthsClickEvent = function( event ) {
    $('.dropbtn').text($(this).text());
}

$(function() {
    $(".months").click(monthsClickEvent);
});