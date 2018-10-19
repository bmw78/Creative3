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

    $scope.countCards();
  };

  $scope.setSelectedCard = function(card) {
    $scope.selectedCard = card;
  };

  $scope.countCards = function() {
    document.getElementById("numberCards").innerHTML = $scope.cards.length;
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
      showAnswer: '='
    },
    restrict: 'E',
    replace: 'true',
    template: (
      '<div class="Flashcard" title="{{card.back}}">' +
      '<input type="checkbox"  ng-model="card.done">' +
      '<span> {{card.front}}</span>' // + '<h5 ng-if="showAnswer">{{card.back}}</h5>'
      +
      '</div>'
    ),
    link: link
  };

  function link(scope) {
    console.log(scope.cards);
  }
}
