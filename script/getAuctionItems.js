var categoryId = location.pathname.split('/').slice(-1);
var app = angular.module('category',[]);
var cPage = document.getElementById('cPage'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next');
var curr = '1',total;

//获取第一页的数据
getAuctions(categoryId,curr);

//切换页码时再次调用getAuctions函数异步获取第n页的数据n>=1&&n<=totalPages

cPage.onkeydown = function(e){
  if(e&&e.keyCode === 13&&cPage.value>=1&&cPage.value<=total){
    getAuctions(categoryId,cPage.value);
  }
}

prev.onclick = function(e){
  if(curr>1){
    getAuctions(categoryId,curr-1);
  }
}

next.onclick = function(e){
  if(curr<total){
    getAuctions(categoryId,curr+1);
  }
}

function getAuctions(categoryId,currentPage){
  var xhr = new XMLHttpRequest();
  var category,currentPage = currentPage,totalPages;

  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
       if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
         var returnValue = JSON.parse(xhr.responseText);
         category = returnValue.category;
         curr = currentPage = returnValue.currentPage;
         total = totalPages = returnValue.totalPages;
       }else{
         console.error("请求失败：" + xhr.status);
       }
     }
  };
  //请求对应分类和第N页的数据
  //这里的path需要设置！！
  xhr.open('get','path?categoryId='+categoryId+'&currentPage='+currentPage,true);
  xhr.send(null);

  app.controller('showAuctionItems', function($scope) {
    $scope.category = category;
    $scope.currentPage = currentPage;
    $scope.totalPages = totalPages;
  });
}