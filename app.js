//  const amount=9;
//  if(amount<10){
//     console.log('small number')
//  }
//  else {
//     console.log('large Number')
//  } 
//  console.log('hey it is my first node app!!')

// setInterval(()=>{
//     console.log('hello World')
// }, 1)

//modules
// const secret=' SUPER SECRET'
// const john ='Lucky'
// const peter ='Odiase'

// const sayHi = (name)=> {
// console.log(`Hello there ${name}`)
// }
// sayHi('Susan')
// sayHi(john)
// sayHi(peter)

// const names=require('./4-name');
// const sayHi=require('./5-utilis');


// sayHi('Susan')
// sayHi(names.john)
// sayHi(names.peter)
// console.log(sayHi);

// const names =require('./4-name');
// const sayHello =require('./5-utilis');
// const data=require('./6-altanative-flavor')
// require('./7-mind-ganade')
// sayHello(names.first)
// sayHello(names.second) 
// sayHello(names.third)

    

// const os =require('os');
// const user =os.userInfo();
// console.log(user);

//method return the system uptime in seconds
    //  console.log(`the System is ${os.uptime()} seconds`)  
    //  const currentOs ={
    //     name: os.type(),
    //     released: os.release(),
    //     totalMem: os.totalmem(),
    //     freeMem: os.freemem(),
    //  }

    //  console.log(currentOs);
// const path =require('path');
// console.log(path.sep)
// const filePath=path.join('/content','subfolder','test.txt')
// console.log(filePath)

// const {readFileSync, weiteFileSyn}= require('fs');
// const fs =require('fs')
//  fs.read

// const first =readFileSync('./content/first.txt','utf8');
// const second =readFileSync('./content/second.txt','utf8');
// console.log(first, second)  

// const {readFile, weiteFile}= require('fs');
//  readFile('./content/subfolder/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result)
//  })
// const first =readFileSync('./content/first.txt','utf8');
// const second =readFileSync('./content/second.txt','utf8');
// writeFileSync(
//     './content/first.txt','utf8',
//     `Here is the result: ${first},${second}`,
//     {flag:'a'}
// )





// const http =require('http');
// const server = http.createServer( (req, res)=> {
//     if(req.url=='/'){
//         res.end('Welcome to our home page, Mr. Quotient')
//     }
//     if(req.url=='/about'){
//         res.end('Here is our short gistory of our home page, Mr. Authentic')
//     }
//     res.end(
//         `<h1>OOPS</h1>
//         <p>Sorry this page does not exist.</p>
//         <a href="/">Back to home page </a>
//         `
//         )
// res.write('Welcome to our home page, Mr. Quotient')
// res.end()
// })
// server.listen(5000)


const _=require('lodash')
const items =[ 1,[2, [3,[4]]]]
const newItems=_.flatMapDeep(items)
console.log(newItems)

