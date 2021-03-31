// console.log('Hello World');
//
// console.error('Something went wrong');
// console.error(new Error('Something went wrong'));

//requiring os, library level model
const os = require('os');
//
// //printing system details
// console.log(os.arch());
//
for(const cpu in os.cpus()) {
    console.log(cpu);
    console.log(cpu.model);
    console.log(cpu.speed);
}

console.log(os.cpus().length);

//
// console.log(os.uptime());
// console.log(os.platform());

//Checking the status of empty string
// const str = '';
// if(str){
//     console.log('true');
// } else {
//     console.log('false');
// }

const fs = require('fs');
// //Reading a text file without blocking the main thread
// //Asynchronous
// fs.readFile('test.txt',(err, data)=>{
//     //if err = null, => gives false
//     //if err = undefined, => gives false
//     //if err = 0, => gives false
//     //if err = '' - => gives false
//     //if err = false - => also gives false
//     if(err){ //err is not an boolean value
//         console.error(err);
//         return;
//     }
//
//     console.log(data.toString());
//     console.log(data.toString('utf-8')); //Giving the encoding type of the file
// });

//Reading by blocking the main thread. Can use to load data when an application launch
//Synchronous
const readData = fs.readFileSync('test.txt');
console.log(readData.toString());

//Copying the existing file to a new file
const readStream = fs.createReadStream('test.txt');
const writeStream = fs.createWriteStream('test-copy.txt');

//Marks the reading is end
readStream.addListener('end',()=>{
    console.log('End of the file read');
});

//Marks the writing is end
writeStream.addListener('close',()=>{
    console.log('End of the file write');
    console.log(fs.readFileSync('test-copy.txt','utf-8'));
});

readStream.pipe(writeStream);

//============================Question 5================================
// const http = require('http');
//
// http.createServer((req,res)=>{
//     res.setHeader('Content-Type','text/html');
//     res.write('<h1>Hello World</h1>');
//     res.end();
// }).listen(3000, err=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//
//     console.log('Server is listening to port 3000');
// });


//Print cpu details
console.log(os.arch());

//Handle read end and write close events
//Handle PUT request return 'PUT request received with : {request data}
//Handle the error in listen

const http2 = require('http');
http2.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html');
    switch (req.method) {
        case 'GET' :
            res.write('<h1>Hello World!</h1>');
            res.end();
            break;
        case 'POST' :
            req.on('data',data =>{
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            });
            break;
        case 'PUT' :
            req.on('data',data =>{
                res.write('<h1>Received and PUT' + data + '</h1>');
                res.end();
            });
            break;
    }

}).listen(3000,err =>{
    if(err){
        console.error(err);
        return;
    }
    console.log('Server is listing on port 3000');
});