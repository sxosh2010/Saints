<!DOCTYPE html>
<html>
<body>
  <button Id="location1btn">find location</button>
  <button Id="clean">clear</button>


       <h2>location2</h2>
       <div Id="location1"></div>
    <button Id="location2btn">find location2</button>
    <button Id="clean1">clear1</button>

          <h3>radius </h3>
           <div Id="showradius"></div>
           <button Id="calculateradiusBtn">click</button>

 <script src='geolib.min.js'></script>
  

<script type="text/javascript">

 
function GetLocation(location) {

    myLat = location.coords.latitude;
    myLon = location.coords.longitude;
    angular.forEach($scope.ASiteLocs, function(object, location) {
      location.Point.coordinates = location.Point.coordinates.substring(0, clength - 2).split(",");
      Lat = location.Point.coordinates[0];
      Lon = location.Point.coordinates[1];
      function getCoordDistance() {
        Number.prototype.toRad = function() {
          return this * Math.PI / 180;
        }
      

        var lat2 = myLat;
        var lon2 = myLon;
        var lat1 = Lat;
        var lon1 = Lon;

        var R = 3959; // Radius in miles 
        //has a problem with the .toRad() method below.
        var x1 = lat2 - lat1;
        var dLat = x1.toRad();
        var x2 = lon2 - lon1;
        var dLon = x2.toRad();
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;

      }
      object.distance = d;
    });
  }
</body>
</script>
</html>
