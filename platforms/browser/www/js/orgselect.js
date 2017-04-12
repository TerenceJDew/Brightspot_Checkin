$( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    $.post( "/api/applications/find_all/", {
    organization: this.orgcode.value
}).then(function( data ) {
    if ( data ) {
        alert( data );
    } else {
        alert( "Sorry, but you are not eligible." );
    }
});
});

