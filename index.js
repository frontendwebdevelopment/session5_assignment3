$(document).ready(
$( 'li' ).each(function( index, elem ) {
    $( elem ).prepend( '<b>' + index + ': </b>' );
})
);
