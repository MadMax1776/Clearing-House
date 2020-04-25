const app = angular.module('GoldApp', []);

app.controller('MyController',['$http', function($http){
  this.type = null;
  this.description = null;
  this.weight = null;

  this.golds = [];
  this.gold = '';


  const controller = this;

  this.createGold = () => {
    $http({
              method:'POST',
              data: this.createForm,
              url: '/gold'

          }).then(response => {
              console.log(response.data)
              controller.gold.push(response.data);
              controller.createForm.type = '';
              controller.createForm.description= '';
              controller.createForm.weight= '';
          },  (error) => {
              console.log(error)
          })


      }

      this.getGold = function() {
        $http({
          method: 'GET',
          url: '/gold/'
        }).then(
          function(response){
            controller.gold = response.data;
          },
          function (error) {
            console.log(error);
          }
        )
      };

  this.deleteGold = function(gold) {
      $http({
        method:'DELETE',
        url: '/gold/' + gold._id
      }).then(
        function(){
          controller.getGold();
        },
        function(error){

        }
      )
    }



  this.getGold();
}]);
