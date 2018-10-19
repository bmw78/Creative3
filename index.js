angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('fc', fcDirective);
  
function mainCtrl($scope) {

  $scope.cards = [];
  $scope.showAnswer = false;

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
  
  $scope.enableShowAnswer = function()
  {
    $scope.showAnswer = true; 
  }
  
  $scope.nextCard = function()
  {
    $scope.position++;
    $scope.showAnswer = false;
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
      card: '=',
      showAnswer: '='
    },
    restrict: 'E',
    replace: 'true',
    template: (
      '<div class="Flashcard">' +
      '<h5>{{card.front}}</h5>' + '<h5 ng-if="showAnswer">{{card.back}}</h5>'
      + '</div>'
    ),
    link: link
  };

  function link(scope)
  {
      console.log(scope.cards);
  }
}