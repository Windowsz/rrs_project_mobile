angular.module('Roomreservation.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $http) {
  // $scope.playlists = [
  //   { title: 'Reggae', id: 1 },
  //   { title: 'Chill', id: 2 },
  //   { title: 'Dubstep', id: 3 },
  //   { title: 'Indie', id: 4 },
  //   { title: 'Rap', id: 5 },
  //   { title: 'Cowbell', id: 6 }
  // ];
var urlShowJson = "http://localhost:3000/showJson";
$http.get(urlShowJson).success( function(data) {
   $scope.ALL =  data;
   // console.log("Review get  Opject: ", response, status);
  console.log(data);
});


})

// .controller('PlaylistCtrl', function($scope, $stateParams) {
// })

.controller('AppCtrl', function($scope) {})

.controller('PlaylistsCtrl', function($scope, $ionicPopup, $timeout, $http) {

var urlShowJson = "http://localhost:3000/showJson";
$http.get(urlShowJson).success( function(data) {
   $scope.ALL =  data;
  console.log(data);
});
})

.controller('ForgotpassCtrl', function($scope, $stateParams) {})

.controller('RegchooseCtrl', function($scope, $stateParams) {})

.controller('Reg1Ctrl', function($scope, $state,  $ionicPopup) {
   $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: '',
     template: 'สมัครสมาชิกเสร็จเรียบร้อย'
   });

   alertPopup.then(function(res) {
     $state.go('login');
   });
 };
  $scope.cancel = function() {
    $state.go('login');
  };
})

.controller('Reg2Ctrl', function($scope, $state, $ionicPopup) {
  $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: '',
     template: 'สมัครสมาชิกเสร็จเรียบร้อย'
   });

   alertPopup.then(function(res) {
     $state.go('login');
   });
 };
 $scope.canCel = function() {
    $state.go('login');
  };
})

.controller('ProfileCtrl', function($scope, $state, $ionicPopup) {
   $scope.goHome = function(res) {
    $state.go('app.search');
  };
  $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: '',
     template: 'ยืนยันการแก้ไข'
   });

   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {})

.controller('SplashController', function($scope, $stateParams) {})

.controller('SearchCtrl', function($scope , $state){
  $scope.searching = function(res) {
    $state.go('app.single');
  };
})

.controller('CancelCtrl', function($scope, $stateParams) {
  
  // $scope.data = {
  //   showDelete: false
  // };
  
  // $scope.edit = function(item) {
  //   alert('Edit Item: ' + item.id);
  // };
  // $scope.share = function(item) {
  //   alert('Share Item: ' + item.id);
  // };
  
  // // $scope.moveItem = function(item, fromIndex, toIndex) {
  // //   $scope.items.splice(fromIndex, 1);
  // //   $scope.items.splice(toIndex, 0, item);
  // // };
  
  // $scope.onItemDelete = function(item) {
  //   $scope.items.splice($scope.items.indexOf(item), 1);
  // };
  
  // $scope.items = [
  //   { id: 0 },
  //   { id: 1 },
  //   { id: 2 },
  //   { id: 3 },
  //   { id: 4 },
  //   { id: 5 },
  //   { id: 6 },
  //   { id: 7 },
  //   { id: 8 },
  //   { id: 9 },
  //   { id: 10 },
  //   { id: 11 },
  //   { id: 12 },
  //   { id: 13 },
  //   { id: 14 },
  //   { id: 15 },
  //   { id: 16 },
  //   { id: 17 },
  //   { id: 18 },
  //   { id: 19 },
  //   { id: 20 },
  //   { id: 21 },
  //   { id: 22 },
  //   { id: 23 },
  //   { id: 24 },
  //   { id: 25 },
  //   { id: 26 },
  //   { id: 27 },
  //   { id: 28 },
  //   { id: 29 },
  //   { id: 30 },
  //   { id: 31 },
  //   { id: 32 },
  //   { id: 33 },
  //   { id: 34 },
  //   { id: 35 },
  //   { id: 36 },
  //   { id: 37 },
  //   { id: 38 },
  //   { id: 39 },
  //   { id: 40 },
  //   { id: 41 },
  //   { id: 42 },
  //   { id: 43 },
  //   { id: 44 },
  //   { id: 45 },
  //   { id: 46 },
  //   { id: 47 },
  //   { id: 48 },
  //   { id: 49 },
  //   { id: 50 }
  // ];
})

.controller('LoginCtrl', function($scope, $state) {

  $scope.LogIn = function(user) {
    $state.go('app.search');
  };

});


