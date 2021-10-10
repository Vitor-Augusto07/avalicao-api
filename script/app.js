var app = angular.module('cepAuxiliador', []);

app.controller('myController', myController);

function myController($scope, $http) {
  $scope.title = "Makeup | Products";
  $scope.url = 'http://makeup-api.herokuapp.com/api/v1/products.json';
  $scope.url_brands = 'http://makeup-api.herokuapp.com/api/v1/products.json';
  $scope.url_types = 'http://makeup-api.herokuapp.com/api/v1/products.json';

  $scope.products = []
  $scope.product = []

  $scope.listAllProducts = function () {
    $http.get($scope.url)
      .success(function (dados) {
        $scope.products = dados;
     });
  };

  $scope.getEspecificType = function (value) {
    $http.get($scope.url + "?product_type=" + value)
      .success(function (dados) {
        console.log(dados)
        $scope.products = dados;
     });
  };

  $scope.CheckItem = function (url) {
    $http.get(url)
      .success(function (dados) {
        console.log(dados)
        $scope.product = dados;
     });
  };

  $scope.initData = function () {
    $scope.listAllProducts();
  };
}
