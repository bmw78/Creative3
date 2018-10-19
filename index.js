angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('fc', fcDirective);

function mainCtrl($scope) {

  $scope.cards = [];

  $scope.addNew = function(card) {
    $scope.cards.push({
      front: card.front,
      back: card.back
    }); /* [1] */

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
      card: '='
    },
    restrict: 'E',
    replace: 'true',
    template: (
      '<div class="Flashcard" title="{{card.back}}">' +
      '<input type="checkbox"  ng-model="card.done">' +
      '<span> {{card.front}}</span>' // + '<h5>{{card.back}}</h5>'
      +
      '</div>'
    ),
    link: link
  };

  function link(scope) {
    console.log(scope.cards);
  }
}
