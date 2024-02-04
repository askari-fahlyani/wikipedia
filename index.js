import express from 'express'
import {load} from 'cheerio'


const app  = express()



app.get('/',async (req,res)=>{
 const response = await fetch(`https://www.iranketab.ir/tag/102-romantic-stories`)
const data = await response.text(response)
const $ = load(data)
const summary = $(data).text()
if (summary.length<1) {
    res.status(404).send(`topic ${req.params.topic} not found`)
    return
}
    res.send(summary)
})

app.listen(3001,()=>{
    console.log('server is running on 3001 port');
})

// console.log('wikipedia page data',data);
// console.log(`summary is ${summary}`);