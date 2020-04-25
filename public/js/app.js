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
              url: '/gold/'

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

      this.editGold = function(gold) {
      $http({
        method:'PUT',
        url: '/gold/' + gold._id,
        data: {
          type: this.updatedType || gold.name,
          description: this.updatedDescription || gold.description,
          weight: this.updatedWeight || gold.weight
        }
      }).then(
        function(response){
          controller.updatedType = null;
          controller.getGold();
        },
        function(error){
          console.log(error);
        }
      )};

      this.closeForm = function() {
    controller.indexOfEditFormToShow = null;
  }

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

    document.querySelector('[ng-class]');

  this.getGold();
}]);
