var routerApp = angular.module('routerApp', ['ui.router','ngGrid', 'BookListModule', 'BookDetailModule', 'myDirectives']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'tpls/index.html'
                },
                'topbar@index': {
                    templateUrl: 'tpls/topbar.html'
                },
                'main@index': {
                    templateUrl: 'tpls/home.html'
                }
            }
        })
        .state('index.bookmng', {
            url: '/bookmng',
            views: {
                'main@index': {
                    templateUrl: 'tpls/bookmng.html'
                }
            }
        })
        .state('index.bookmng.addbook', {
            url: '/addbook',
            templateUrl: 'tpls/addBookForm.html'
        })
        .state('index.bookmng.booklist', {
            url: '/booklist/{bookType:[0-9]{1,4}}',
            templateUrl: 'tpls/bookGrid.html'
        })
        .state('index.bookmng.bookdetail', {
            url: '/bookdetail/:bookId',
            templateUrl: 'tpls/bookDetail.html',
            controller: function($scope, $state) {
                $scope.backToPrevious = function() {
                    window.history.back();
                }
            }
        })
        .state('index.usermng', {
            url: '/usermng',
            views: {
                'main@index': {
                    templateUrl: 'tpls/usermng.html',
                    controller: function($scope, $state) {
                        $scope.addUserType = function() {
                            $state.go("index.usermng.addusertype");
                        }
                    }
                }
            }
        })
        .state('index.usermng.highendusers', {
            url: '/highendusers',
            templateUrl: 'tpls/highendusers.html'
        })
        .state('index.usermng.normalusers', {
            url: '/normalusers',
            templateUrl: 'tpls/normalusers.html'
        })
        .state('index.usermng.lowusers', {
            url: '/lowusers',
            templateUrl: 'tpls/lowusers.html'
        })
        .state('index.usermng.addusertype', {
            url: '/addusertype',
            templateUrl: 'tpls/addusertypeform.html',
            controller: function($scope, $state) {
                $scope.backToPrevious = function() {
                    window.history.back();
                }
            }
        })
        .state('index.permission', {
            url: '/permission',
            views: {
                'main@index': {
                    template: '<hello></hello>'
                }
            }
        })
        .state('index.report', {
            url: '/report',
            views: {
                'main@index': {
                    template: '<div hello></div>'
                }
            }
        })
        .state('index.settings', {
            url: '/settings',
            views: {
                'main@index': {
                    template: '<div class="hello"></div>'
                }
            }
        })
});
