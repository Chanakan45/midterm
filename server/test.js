let express = require('express')
const app = express()

app.get('/status', function (req,res){
    res.send('Hello nodejs server belong to Sarawut')
})


let port = 6000
app.listen(port, function(){
    console.log('server runing on ' + port)
})
