(function () {
    angular.module('app')
      .factory('tianjin', [function () {
          var counter = 1;
          return {
              bobSize: "10km",
              getCount: function(){
                  return counter++;
              }
          };
      }]);
})();