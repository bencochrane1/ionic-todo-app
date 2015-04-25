// // Ionic Starter App

// // angular.module is a global place for creating, registering and retrieving Angular modules
// // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// // the 2nd parameter is an array of 'requires'
// // angular.module('starter', ['ionic'])
// angular.module('todoApp', 
//   [
//   'ionic', 
//   'todoApp.controllers',
//   'todoApp.services'
//   ])

// .run(function($ionicPlatform, $state) {
//   $ionicPlatform.ready(function() {
//     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//     // for form inputs)
//     if(window.cordova && window.cordova.plugins.Keyboard) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//     }
//     if(window.StatusBar) {
//       StatusBar.styleDefault();
//     }
//   $state.go('todos');
//   });

// })

// .config(['$ionicAppProvider', function($ionicAppProvider) {
//   // Identify app
//   $ionicAppProvider.identify({
//     // The App ID (from apps.ionic.io) for the server
//     app_id: app_id,
//     // The public API key all services will use for this app
//     api_key: api_key,
//     // The GCM project ID (project number) from your Google Developer Console (un-comment if used)
//     // gcm_id: 'YOUR_GCM_ID'
//   });
// }])


// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('todoApp', ['ionic','todoApp.controllers','todoApp.services'])

.run(function($ionicPlatform,$state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    $state.go('todos');
  });
}).config(function($stateProvider){
        $stateProvider.state('todos',{
           url:'/todos',
           controller:'TodoListController',
           templateUrl:'views/todos.html'
        }).state('createTodo',{
            url:'/todo/new',
            controller:'TodoCreationController',
            templateUrl:'views/create-todo.html'
        }).state('editTodo',{
            url:'/todo/edit/:id/:content',
            controller:'TodoEditController',
            templateUrl:'views/edit-todo.html'
        });
});