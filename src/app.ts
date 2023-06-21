import { createServer, IncomingMessage, ServerResponse } from "http";
import * as fs from 'fs';
import * as path from 'path'

import * as url from "url";
import EventEmitter from "events";
import { log } from "console";

const port = 7700

const server = createServer((request: IncomingMessage, response: ServerResponse) => {


    // if(request.url=="/name"){
    //     if(request.method==="GET"){

    //         response.end("true")
    //     }else{
    //         response.end("false")
    //     }
    // }

    if (request.url == "/name") {
        const dir = fs.readdirSync(__dirname)
  
        //  file creation 
        const writeFile = fs.writeFile("myFile.txt", "file created", function (err) {
           if (err) throw err;
            console.log("File written Sucessfully ")})}
 
        // reading of file

        const readFile = fs.readFileSync(path.join(__dirname, 'myFile.txt'), { encoding: 'utf-8' })
          console.log(readFile)

 // for new file creation

           const appndFile = fs.appendFile('mynewfile1.txt', 'i am new file', function (err) {
            if (err) throw err;
            console.log('new file created by append');
        });

       
        // for rename of filename

        const renamFile = fs.rename('myFile.txt', 'myrenamedfile.txt', function (err) {
            if (err) throw err;
            console.log(' my File Renamed!');
        });

// for deletion

        const deletedFile = fs.unlink('mynewfile1.txt', function (err) {
            if (err) throw err;
            console.log('my File is deleted!');
          });
          var adr = 'http://localhost:8080/default.htm?year=2023&month=april&name=vikasrana&tech=fullstack';
        
          var q = url.parse(adr, true);
  
          console.log(q)
  

      }
)

server.listen(port, () => console.log(`server islistining at port ${port}`))

  const event = new EventEmitter();

  event.on('event-1' ,() => {
    console.log("event 1 is firedd")
  })
 
  event.on("event-2", (arr1,arr2) => {
    console.log("event 2 is fired ${arr1} , ${arr2}")
  })

  event.emit("event-1");

  event.emit("event-2" , "hello","hi")



// tusrkuvvcitxucgw