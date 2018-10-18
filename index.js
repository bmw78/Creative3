angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('fc', fcDirective);
  
function mainCtrl($scope) {

  $scope.cards = [];

  $scope.addNew = function(card) {
    $scope.cards.push({
      front: card.front,
      back:card.back
    }); /* [1] */

    console.log($scope.cards)
    card.front = ''; 
    card.back = ''; 
    
    $scope.countCards();
  };
  
  $scope.countCards = function() {
    document.getElementById("numberCards").innerHTML = $scope.cards.length;
  }
  
}


function fcDirective() {
    console.log("here")
  return {
    scope: {
      card: '=' 
    },
    restrict: 'E',
    replace: 'true',
    template: (
      '<div class="Flashcard">' +
      '<h4>{{card.front}}</h4>' //+ '<h5>{{card.back}}</h5>'
      + '</div>'
    ),
    link: link
  };

  function link(scope)
  {
      console.log(scope.cards);
  }
}