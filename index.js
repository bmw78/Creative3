angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('fc', fcDirective);

function mainCtrl($scope) {

  $scope.cards = [];
  $scope.showAnswer = false;

  $scope.addNew = function(card) {
    $scope.cards.push({
      front: card.front,
      back: card.back
    });

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
    $scope.showAnswer = false;
  }
  
 $scope.haveNextCard = function()
  {
    return ($scope.position >= 0 && $scope.position < $scope.cards.length);
  }
  
  $scope.exitQuiz = function()
  {
    $scope.position = -1;
    $scope.showAnswer =true;
  }

  $scope.remove = function() {
    var oldList = $scope.cards;
    $scope.cards = [];
    angular.forEach(oldList, function(card) {
      if (!card.done) $scope.cards.push(card);
    });
  };
  

}


function fcDirective() {
  return {
    scope: {
      card: '=',
      showAnswer: '=',
      checkbox: '='
      
    },
    restrict: 'E',
    replace: 'true',
    template: (
      '<div class="Flashcard">' +
      '<input type="checkbox" ng-if="checkbox" ng-model="card.done">' +
      '<span class="card-front"> {{card.front}}</span>'  + '<br/>' + '<span class="card-back" ng-if="showAnswer">{{card.back}}</span>'
      +
      '</div>'
    ),
    link: link
  };

  function link(scope) {
    console.log(scope.cards);
  }
}
