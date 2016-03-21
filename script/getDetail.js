    var xhr = new XMLHttpRequest();
    var id = location.pathname.split('/').slice(-1);
    var app = angular.module("auctionItem",[]);
    var auctionItem,comments;
    
    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4){
        if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
          var returnValue = JSON.parse(xhr.responseText);
          auctionItem = returnValue.auctionItem;
          comments =  returnValue.comments;
        }else{
          console.error("请求失败：" + xhr.status);
        }
      }
    }
    //这里的path需要设置！！
    xhr.open('get','path?id='+id,true);
    xhr.send(null);

    app.controller("showDetail",function($scope){
      $scope.auctionItem = auctionItem;
      $scope.comments = comments;
    });