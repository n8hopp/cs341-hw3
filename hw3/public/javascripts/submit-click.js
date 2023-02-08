// file by Nate Hopper, 2/8

submitClickEvent = function( event ) {
    alert('event:' + event)
    //check for vegan text
    if($('#ta-notes').val().includes('vegan'))
    {
        alert("Cheesecakes contain dairy, we cannot make your cheesecake vegan!");
        return false;
    }
    // hide original div
    $('#hideable-div').css("display", "none");

    // set vars for confirm dialog
    var topping = $('input[name="radio-type"]:checked').val();
    var quantity = $('#ddl-quantity').val();
    var notes = $('#ta-notes').val();

    // set text in confirm dialog
    $('#topping-confirm').text('Topping: ' + topping);
    $('#quantity-confirm').text('Quantity: ' + quantity);
    $('#notes-confirm').text('Notes: ' + notes);

    // show div
    $('#accept-div').show();

    return true;
}

$(function() {
    $("#button-submit").click(submitClickEvent);
});