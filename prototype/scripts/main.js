jQuery(function( $ ) {
	var $window = $( window );
	var $stickyNav = $( '#Header .ribbon-wrapper' );
	var $topToolbar = $( '#ToolbarTop' );
	var topToolbarHeight = $topToolbar.height();

	var grid = new hashgrid({
		foregroundKey: 'f',
		id: 'Overlay',
		showGridKey: 'g'
	});

	// TODO: when implementing this for real, we should probably have some kind of
	// algorithm that throttles the scroll callback based on distance from sticky
	// point and how fast the user is scrolling to prevent eating up CPU cycles.
	$window.on( 'scroll.stickyNav', function() {
		var stickyNavOffsetTop = $stickyNav.data( 'stickyNavOffsetTop' ) || $stickyNav.offset().top,
			stick = ( $window.scrollTop() + topToolbarHeight ) >= stickyNavOffsetTop;

		$stickyNav
			.toggleClass( 'stuck', stick )
			.data( 'stickyNavOffsetTop', stick && stickyNavOffsetTop );
	});
});