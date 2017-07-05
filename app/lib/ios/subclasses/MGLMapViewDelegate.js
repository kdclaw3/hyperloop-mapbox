var MGLMapViewDelegate = Hyperloop.defineClass('MGLMapViewDelegate', 'NSObject');

//create your delegates..
//- (BOOL)mapView:(nonnull MGLMapView *)mapView annotationCanShowCallout:(nonnull id<MGLAnnotation>)annotation;
MGLMapViewDelegate.addMethod({
	selector: 'mapView:annotationCanShowCallout:',
	instance: true,
	returnType: 'BOOL',
	arguments: [
		'MGLMapView',
		'MGLAnnotation'
	],
	callback: function (map, annotation) {
		console.log('[MAPBOX EXAMPLE] mapView:annotationCanShowCallout: ' + annotation);
		return true;
	}
});

module.exports = MGLMapViewDelegate;
