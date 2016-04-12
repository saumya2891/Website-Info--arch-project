/**
 * Created by yangyang on 4/12/16.
 */
(function(){
    angular.module("myApp", ['ngRoute'])
        .config(configuration)
        .controller('headerController', headerController)
        .controller('menuController', menuController);

    function configuration($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: "views/home.html",
            })
            .when('/menu', {
                templateUrl: "views/menu.html",
                controller: "menuController",
                controllerAs: "model"
            })
            .when('/menu/:item', {
                templateUrl: "views/entry.html",
                controller: "menuController",
                controllerAs: "model"
            })
            .when('/contact', {
                templateUrl: "views/contact.html"
            })
            .when('/reservation', {
                templateUrl: "views/reservation.html"
            })
            .otherwise({
                redirectTo: "/"
            });

    }

    function headerController($location){
        var vm = this;
        vm.$location = $location;

    }

    function menuController(){

    }
})();