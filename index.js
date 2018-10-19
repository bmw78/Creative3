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
    
  };
  
  $scope.position = -1;
  
  $scope.nextCard = function()
  {
    $scope.position++;
  }
  
  $scope.quizNotStarted = function()
  {
    return ($scope.position == -1);
  }
  
  $scope.startQuiz = function()
  {
    $scope.position = 0;
  }
  
 $scope.haveNextCard = function()
  {
    return ($scope.position >= 0 && $scope.position < $scope.cards.length);
  }
}


function fcDirective() {
  return {
    scope: {
      card: '=' 
    },
    restrict: 'E',
    replace: 'true',
    template: (
      '<div class="Flashcard">' +
      '<h4>{{card.front}}</h4>' + '<h5>{{card.back}}</h5>'
      + '</div>'
    ),
    link: link
  };

  function link(scope)
  {
      console.log(scope.cards);
  }
}