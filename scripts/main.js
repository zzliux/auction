require.config({
  baseUrl:'scripts/libs',
  paths:{
   slider:'slider'
  }
});
require(['slider'],function(slider){
  //传入容器id，链接及图片地址，切换时间（可选）和滑动速度（可选）
  //================================================================
  slider(
    'ff-slider',
    ['#','#','#'],
    ['http://img2.imgtn.bdimg.com/it/u=2666284116,3467609730&fm=11&gp=0.jpg',
     'http://img2.imgtn.bdimg.com/it/u=2666284116,3467609730&fm=11&gp=0.jpg',
     'http://img2.imgtn.bdimg.com/it/u=2666284116,3467609730&fm=11&gp=0.jpg']
  );
});