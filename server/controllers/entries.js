const Entry  = require('../models/entries');

//Add Entry
exports.addEntry = function(req, res, next) {
    console.log('sweet potato', req.body.recipe);
    let entry = new Entry(req.body.recipe);
    //entry['userId'] = req.user.id;
    entry.save();
    return res.json({
       data: '$$$$$$'
    });
};

exports.findEntries = function(req, res, next) {
    Entry.find().then(allEntries=>{ 
        return res.json({
            allEntries
        })
    });
}

exports.deleteCardFromDB =function(req, res, next){
     console.log("deleteCardFromDB",req.body);
       Entry.remove({_id:req.body.cardToDelete}).then(res=>{
            return res.json({res})

       });

}