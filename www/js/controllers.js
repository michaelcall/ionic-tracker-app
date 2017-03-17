angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.test = 'test'

  $scope.position = 'login'

  $scope.signupPage = function() {
    $scope.position = 'signup'
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $ionicDB) {
  $scope.chat = Chats.get($stateParams.chatId);

  var messages = $ionicDB.collection('messages')

// Establish the db connection.
  $ionicDB.connect();

  $ionicDB.status().subscribe(function(status) {
    if (status.type === 'disconnected') {
    // Display connecting spinner
    console.log(status.type); // reconnecting
  }
});

// Equivalent to
  $ionicDB.onReconnecting().subscribe(function(status) {
    // Display connecting spinner
    console.log(status.type); // reconnecting
});

// Start using the collection
  messages.store({ msg: 'Hello world!' });


})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
