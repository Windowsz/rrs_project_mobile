angular.module('starter', ['ionic','starter.controllers'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('playlists', {
    url: "/playlists",
    templateUrl: "templates/playlists.html",
    controller: 'PlaylistsCtrl'
  })



  .state('regchoose', {
    url: '/regchoose',
    templateUrl: 'templates/regchoose.html',
    controller: 'RegchooseCtrl'
  })

  .state('reg1', {
    url: '/reg1',
    templateUrl: 'templates/reg1.html',
    controller: 'Reg1Ctrl'
  })

    .state('reg2', {
    url: '/reg2',
    templateUrl: 'templates/reg2.html',
    controller: 'Reg2Ctrl'
  })

  .state('forgotpass', {
    url: '/forgotpass',
    templateUrl: 'templates/forgotpass.html',
    controller: 'ForgotpassCtrl'
  })

  .state('app.alarm', {
      url: "/alarm",
      views: {
        'menuContent': {
          templateUrl: "templates/alarm.html"
        }
      }
    })

  .state('app.profile', {
      url: "/profile",
      views: {
        'menuContent': {
          templateUrl: "templates/profile.html"
        }
      }
    })

  .state('app.cancel', {
    url: "/cancel",
    views: {
      'menuContent': {
        templateUrl: "templates/cancel.html"
      }
    }
  })

  .state('app.qrcode', {
      url: "/qrcode",
      views: {
        'menuContent': {
          templateUrl: "templates/qrcode.html"
        }
      }
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent': {
          templateUrl: "templates/search.html",
          controller: 'SearchCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/detailroom.html",
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.comfirm', {
    url: "/playlists/:playlistId/confirm",
    views: {
      'menuContent': {
        templateUrl: "templates/confirm.html",
        controller: 'ConfirmCtrl'
      }
    }
  })

  .state('app.login-into-menucontent', {
    url: "/login-into-menucontent",
    views: {
      'menuContent': {
        templateUrl: "templates/login.html",
        controller: 'LoginCtrl'
      }
    }
  })

  .state('login', {
    url: "/login",
    templateUrl: "templates/login.html",
    controller: 'LoginCtrl'
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});