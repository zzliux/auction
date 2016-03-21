var xhr = new XMLHttpRequest();
var app = angular.module('heartAuction', []);
var categories;

xhr.onreadystatechange = function(){
 if(xhr.readyState == 4){
   if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
     categories = JSON.parse(xhr.responseText);
   }else{
     console.error("请求失败：" + xhr.status);
   }
 }
};
//这里的path需要设置！！
xhr.open('get','path',true);
xhr.send(null);

app.controller('showCategories', function($scope) {
    $scope.categories = categories;
});