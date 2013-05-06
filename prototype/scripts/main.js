jQuery(function( $ ) {
	var grid = new hashgrid({
		foregroundKey: 'f',
		id: 'Overlay',
		showGridKey: 'g'
	});

	var $wrapper = $( '#ContentWrapper' ).on( 'click', '.toggle span', function( event ) {
		$wrapper.toggleClass( 'narrow wide' );
		$( event.target ).html( $wrapper.hasClass( 'wide' ) ? '&gt;' : '&lt;' );
	});
});