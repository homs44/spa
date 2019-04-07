var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public'));

app.use(bodyParser());

app.set('views', './views');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// function(){}
// ()=>{}

app.get('/services', (req,res)=>{

    const data = {
        result:[
            {
                title:'Database',
                content:'This is .....'
            },
            {
                title:'Storage',
                content:'This is .....'
            },
            {
                title:'Hosting',
                content:'This is .....'
            }
        ]
    }

    res.json(data)
})

// API 가 없을 때는 페이지 전송
app.get('/*',(req,res)=>{
    res.render('index',{});
})


app.listen(3000);