/**
 * Created by codev on 3/21/17.
 */
angular.module('starter.controllers', ['ionic.cloud'])

  .controller('loginCtrl', function($scope, $ionicAuth, $ionicUser, $state) {

    $scope.user = {
      firstName: null,
      lastName: null,
      email: null,
      password: null
    };

    var details = {};


    $scope.signupUser = function(firstName, lastName, email, password) {
      details.name = firstName + " " + lastName
      details.email = email
      details.password = password

      // check variables and sign up user
      if (details.name && details.email && details.password) {
        $ionicAuth.login('basic', details).then(function() {
          // `$ionicUser` is now registered
          console.log('i am signed in')
          if ($ionicAuth.isAuthenticated()) {
            // $ionicUser is authenticated!
            console.log('i am passed')
            $state.go('home');

          }
        });


      }

    }

  })


//   .controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $ionicDB) {
//     $scope.chat = Chats.get($stateParams.chatId);
//
//     var messages = $ionicDB.collection('messages')
//
// // Establish the db connection.
//     $ionicDB.connect();
//
//     $ionicDB.status().subscribe(function(status) {
//       if (status.type === 'disconnected') {
//         // Display connecting spinner
//         console.log(status.type); // reconnecting
//       }
//     });
//
// // Equivalent to
//     $ionicDB.onReconnecting().subscribe(function(status) {
//       // Display connecting spinner
//       console.log(status.type); // reconnecting
//     });
//
// // Start using the collection
//     messages.store({ msg: 'Hello world!' });
//
//
//   })
.controller('homeCtrl', function($scope, $ionicAuth, $ionicUser, $state) {




})

.controller('incomeCtrl', function($scope, $ionicAuth, $ionicUser, $state) {




});
