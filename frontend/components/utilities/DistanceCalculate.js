// Description: Function to calculate distance between two points using Google Maps Distance Matrix API.
// Libraries: google-maps-react
// Dependency: Google Maps JavaScript API
// Link: https://developers.google.com/maps/documentation/javascript/distancematrix
// Link: https://developers.google.com/maps/documentation/javascript/tutorial
// Link: https://developers.google.com/maps/documentation/javascript/tutorial#Loading_the_Maps_API

// Usage: import DistanceCalculate from '../utilities/DistanceCalculate';

const DistanceCalculate  = (source, destination) => {
  if (source && destination) {
      const service = new google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [new google.maps.LatLng(source.lat, source.lng)],
          destinations: [new google.maps.LatLng(destination.lat, destination.lng)],
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === google.maps.DistanceMatrixStatus.OK) {
            const distanceInMeters = response.rows[0].elements[0].distance.value;
            const distanceInKilometers = distanceInMeters / 1000;

            //setRouteDistance(distanceInMeters);
            return distanceInKilometers;

            //setRouteDistanceInMile(distanceInKilometers * 0.621371); // Convert kilometers to miles

          } else {
            console.error('Error calculating distance:', status);
          }
        }
      );
  } else {
    console.error('Google Maps JavaScript API is not loaded or geometry library is not available.');
  };
};

export default DistanceCalculate;