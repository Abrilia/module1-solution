(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.listItems = "";
    $scope.message = ""
    $scope.messageColor = {};
    $scope.borderColor = {};

    $scope.messageNoItems = "Please enter data first";
    $scope.messageEnjoy = "Enjoy!";
    $scope.messageTooMuch = "Too much!";

    $scope.countItems = function(){

      var listItems = $scope.listItems;
      //It is not considered an empty item, i.e., , , as an item towards to the count
      //filter(Boolean) removes all empty elements
      var listItemsArray = listItems.split(",").filter(Boolean);
      var numItems = listItemsArray.length;
      return numItems;
    }

    $scope.modifyMessageColor = function(){

      if($scope.message == $scope.messageNoItems){
        $scope.messageColor.style =  {"color":"red"};
      }
      else if($scope.message == $scope.messageEnjoy || $scope.message == $scope.messageEnjoy){
        $scope.messageColor.style = {"color":"green"};
      }
    }

    $scope.modifyBorderColor = function(){
      if($scope.message == $scope.messageNoItems){
        $scope.borderColor.style =  {"border-color":"red"};
      }
      else if($scope.message == $scope.messageEnjoy || $scope.message == $scope.messageEnjoy){
        $scope.borderColor.style =  {"border-color":"green"};
      }
    }

    $scope.modifyMessage = function(){
      var numItems = $scope.countItems();

      if(numItems == 0){
        $scope.message = $scope.messageNoItems;
      }
      else if(numItems <= 3){
        $scope.message = $scope.messageEnjoy;
      }
      else if(numItems > 3){
        $scope.message =  $scope.messageTooMuch;
      }
      else{
        //default
        $scope.message = $scope.messageNoItems;
      }

    }

    $scope.luchCheckerFunction = function(){
      $scope.modifyMessage();
      $scope.modifyBorderColor();
      $scope.modifyMessageColor();
    }

  }
})();
