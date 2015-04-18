angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope) {})

.controller('ProposalsCtrl', function($scope, Proposals) {
  $scope.proposals = Proposals.all();
})

.controller('ProposalDetailCtrl', function($scope, $stateParams, Proposals) {
  $scope.proposal = Proposals.get($stateParams.proposalId);
})

.controller('ProposalGroceriesCtrl', function($scope, $stateParams, Proposals) {
  $scope.proposal = Proposals.get($stateParams.proposalId);
})

.controller('ProposalStepsCtrl', function($scope, $stateParams, Proposals) {
  $scope.proposal = Proposals.get($stateParams.proposalId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
