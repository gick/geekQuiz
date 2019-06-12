module.exports = function (app) {
    let Session=require('../model/session')

    app.post('/api/start',function(req,res){
        Session.findOne({sessionId:req.sessionID})
        .exec(function(err,result){
            if(!result){
                let s=new Session()
                s.sessionId=req.sessionID
                s.run.push(new Date())
                s.save()
                res.send({success:true})
                return
            }
            result.run.push(new Date())
            result.question.push({})
            result.save()
            res.send({success:true})
        })
    })

    app.post('/api/question',function(req,res){
        Session.findOne({sessionId:req.sessionID})
        .exec(function(err,result){
            if(!result){
                let s=new Session()
                s.sessionId=req.sessionID
                s.run.push(new Date())
                s.question.push(req.body.question)
                s.save()
                res.send({success:true})
                return
            }
            let q=req.body.question
            q.date=new Date()
            result.question.push(q)
            result.save()
            res.send({success:true})
        })
    })


}