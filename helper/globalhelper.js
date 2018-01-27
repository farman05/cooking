const multer = require('multer');
const path = require('path');

function fileCheck(file){
    console.log(file);
     var ext = path.extname(file.originalname)
    console.log(ext);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
        return callback(res.end('Only images are allowed'), null)
    }
    return true
}

module.exports.fileExtCheck = () =>{
    console.log("file");
   
}
const storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, './uploads')
	},
	filename: function(req, file, callback) {
        // fileCheck(file);
        callback(null, Date.now() + path.extname(file.originalname))
    }
})

module.exports.isEmpty = (input) =>{
    console.log(input);
    if(Array.isArray(input)){
        if(input.length == 0){
            // res.json({'err':'1002','msg':msg})
            return false
        }
    }else if(input == null || input == ""){
        // res.json({'err':'1002','msg':msg});
        return false
    }

    return true
}




module.exports.upload = multer({ storage: storage })
