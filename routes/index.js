module.exports = function(app, Test)
{
    //Show tests
    app.get('/test', function(req,res){
        Test.find(function(err, tests){
            if(err) return res.status(500).send({error: 'database failure'});
            res.json(tests);
        })
    });
     
}
