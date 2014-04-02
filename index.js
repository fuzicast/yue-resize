var gm = require('gm');

module.exports.resize = function(resize_val, cb) {
  var x = resize_val.x;
  var y = resize_val.y;
  var imagefile = resize_val.filename
  gm(imagefile)
  .resize(x,y)
  .write('/Users/yue/Shutterstock/nodetraining/yue-app/public/hello_'+x+'_'+y+'.png', function(err){
    if(err){ 
	  console.log('something bad happened to resizing');
	  throw err;
	}
    cb();
  });
};
