//declare some stuff...
var CGRectMake = require('CoreGraphics').CGRectMake;
var NSURL = require("Foundation/NSURL");
var NSObject = require('Foundation/NSObject');
var CLLocationCoordinate2DMake = require("CoreLocation").CLLocationCoordinate2DMake;
var MGLMapView = require('Mapbox/MGLMapView');
var MGLPointAnnotation = require('Mapbox/MGLPointAnnotation');

//declare the map delegte... see the file, only annotationCanShowCallout added as an example
var MGLMapViewDelegate = require('/subclasses/MGLMapViewDelegate');

//create the map
var mapView = MGLMapView.alloc().initWithFrame(CGRectMake(0, 0, $.index.getWidth(), $.index.getHeight()));

//create the map Delegate
var mapViewMapDelegate = new MGLMapViewDelegate();
mapView.delegate = mapViewMapDelegate; //aka self... 

//set the center
mapView.setCenterCoordinate(CLLocationCoordinate2DMake(33.5407, -77.4360)); //richmond, virginia

//set the user tracking mode
//mapView.userTrackingMode = 1;
	/* enum MGLUserTrackingMode : NSUInteger {}
	MGLUserTrackingModeNone
	MGLUserTrackingModeFollow
	MGLUserTrackingModeFollowWithHeading
	MGLUserTrackingModeFollowWithCourse
	 */

//enable zoom, etc...
mapView.zoomEnabled = true;
//scrollEnabled
//rotateEnabled
//pitchEnabled

//add a point marker
var pt = MGLPointAnnotation.alloc().init();
pt.coordinate = CLLocationCoordinate2DMake(33.5407, -77.4360);
pt.title = "Richmond, Virginia";
pt.subtitle = "...hail Hydra...";


console.log('[MAPBOX EXAMPLE] mapView: ' + mapView);

//add the map
$.index.add(mapView);

mapView.selectAnnotationAnimated(pt, false);

$.index.open();