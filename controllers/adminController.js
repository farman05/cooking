var User = require('../models/user');
const Recipe = require('../models/recipe');
const helper = require('../helper/globalhelper');

module.exports.register = (req, res) => {

    const user = new User({
        email: req.body.email,
        password: req.body.password,
        userType: req.body.type
    });

    user.save();

    res.json(true);

}

module.exports.login = (req, res) => {
    console.log(req.body);
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            res.json({ 'success': false, 'err': err });
        } else {
            if (!user) {
                res.json({ 'success': false, 'err': "Email doesn't exist" });
            } else {
                const valiDatePassword = user.comparePassword(req.body.password);
                if (user.comparePassword(req.body.password)) {
                    res.json({ 'success': true, 'msg': 'Login Successfully' });
                } else {
                    res.json({ 'success': false, 'err': "Invalid Password" })

                }
            }
        }
    })

}

module.exports.addRecipe = (req,res) => {
    const body = req.body
    console.log(body);return;
    if(!helper.isEmpty(body.title)){
        return res.json({'err':'1002','msg':'Title is required'})
    }

    if(!helper.isEmpty(body.description)){
        return res.json({'err':'1002','msg':'Description is required'})
    }

    if(!helper.isEmpty(body.ingredients)){
        return res.json({'err':'1002','msg':'Ingredients are required'})
    }

    if(!helper.isEmpty(body.steps)){
        return res.json({'err':'1002','msg':'Preparation steps are required'})
    }
    console.log(body.title);
    Recipe.findOne({title:body.title},(err,result) => {
            if(result){
                return res.json({'err':1002,'msg':'Recipe already exits'});
            }else{
                const recipe = new Recipe({
                    title:req.body.title,
                    description:req.body.description,
                    ingredients:req.body.ingredients,
                    steps:req.body.steps    
                });
                helper.upload.any('image')(req, res, function(err,response) {
                    if(err) {
                        return res.json({'err':1002,'msg':'Upload issue'})
                        return;
                    }else{
                        if(req.files){
                            for (i=0;i<req.files.length;i++){
                                    recipe.image.push(req.files[i].filename);
                            }
                        }
                        recipe.save((err,result) => {
                            if(err){
                                return res.json({'err':1002,'msg':'Something went wrong'})
                            }else if(result){
                                return res.json({'err':0,'msg':'Recipe added successfully'})
                            }
                        });
                    }
                });
            }
    })
  
    // helper.upload.any('image');
    // console.log(a);
    // res.send(req.files);
    // return;
    // for (i=0;i<req.files.length;i++){
    //     recipe.image.push(req.files[i].filename);
    // }

        
}