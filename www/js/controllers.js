angular.module('starter.controllers', ['ionic.cloud'])

.controller('DashCtrl', function($scope, $ionicAuth, $ionicUser, $state) {

  $scope.user = {
    firstName: null,
    lastName: null,
    email: null,
    password: null
  };
  
  $scope.test = {
    firstName: 'michael'
  };

  var details = {};

  //  cde6fa2c-c509-486e-bf4f-78e78deb8925


  $scope.signupUser = function(firstName, lastName, email, password) {



    details.name = firstName + " " + lastName
    details.email = email
    details.password = password

    console.log('log out details')
    console.log(details)


    // check variables and sign up user
    if (details.name && details.email && details.password) {

        $ionicAuth.login('basic', details).then(function() {
          // `$ionicUser` is now signin
            console.log('i am sign in')
            if ($ionicAuth.isAuthenticated()) {
            // $ionicUser is authenticated!
            console.log('$ionicUser is authenticated!')
              $state.go('tab.chats');
            }

          });

    }

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
