
$(function() {
    $( "#datepicker" ).datepicker();
    $( "#anim" ).change(function() {
        $( "#datepicker" ).datepicker( "option", "showAnim","bounce" );
    });
});