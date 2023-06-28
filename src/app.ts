import { createServer, IncomingMessage, ServerResponse ,Server  } from "http";
import * as fs from 'fs';
import * as path from 'path'
import router from "./Routes/routes";
import * as url from "url";
import EventEmitter from "events";
import { log } from "console";

 import multer from "multer";

import nodemailer from "nodemailer"
import express , { NextFunction ,Response,Request} from "express";
import { connectDatabase } from "./Database/connection";

const app = express();
app.use('/',router);
const PORT = 7900
connectDatabase().then((response) => {

  console.log(response)
 const server:Server= app.listen(PORT, () => console.log(`server is running at port http://localhost:${PORT}`))

}).catch((error) => {
  console.log(error)
})







// const server = createServer((request: IncomingMessage, response: ServerResponse) => {


    // if(request.url=="/name"){
    //     if(request.method==="GET"){

    //         response.end("true")
    //     }else{
    //         response.end("false")
    //     }
    // }

//     if (request.url == "/name") {
//         const dir = fs.readdirSync(__dirname)
  
//         //  file creation 
//         const writeFile = fs.writeFile("myFile.txt", "file created", function (err) {
//            if (err) throw err;
//             console.log("File written Sucessfully ")})}
 
//         // reading of file

//         const readFile = fs.readFileSync(path.join(__dirname, 'myFile.txt'), { encoding: 'utf-8' })
//           console.log(readFile)

//  // for new file creation

//            const appndFile = fs.appendFile('mynewfile1.txt', 'i am new file', function (err) {
//             if (err) throw err;
//             console.log('new file created by append');
//         });

       
//         // for rename of filename

//         const renamFile = fs.rename('myFile.txt', 'myrenamedfile.txt', function (err) {
//             if (err) throw err;
//             console.log(' my File Renamed!');
//         });

// // for deletion

//         const deletedFile = fs.unlink('mynewfile1.txt', function (err) {
//             if (err) throw err;
//             console.log('my File is deleted!');
//           });
//           var adr = 'http://localhost:8080/default.htm?year=2023&month=april&name=vikasrana&tech=fullstack';
        
//           var q = url.parse(adr, true);
  
//           console.log(q)
  

//       }
// )

// server.listen(port, () => console.log(`server islistining at port ${port}`))

//   const event = new EventEmitter();

//   event.on('event-1' ,() => {
//     console.log("event 1 is firedd")
//   })
 
//   event.on("event-2", (arr1,arr2) => {
//     console.log("event 2 is fired ${arr1} , ${arr2}")
//   })

//   event.emit("event-1");

//   event.emit("event-2" , "hello","hi")




//   const storage = multer.diskStorage({
//     destination(req, file, callback) {
//         callback(null, './src')
//     },
//     filename(req, file, callback) {
//         callback(null, file.originalname)
//     },
// })


// const upload = multer({ storage: storage })





// app.get('/uploadFile', upload.single('data'), (req: Request, res: Response, next: NextFunction) => {

//     try {
//         const file = req.file;
//         console.log( file)
//         res.status(200).send("file is sucessfully saved")
//     } catch (error) {
//         console.log( error)
//     }
// })
// app.listen(7700);


// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: { user: "vikasrana7770@gmail.com", pass: "bxghobjawwlmjaja" }
// })

// let mailOptions = {
//   from: "vikasrana7770@gmail.com",
//   to: "vikas.sumfactor@gmail.com",
//   subject: "yesterday problem",
//   text: "i wanna talk about yesterday problem"
// }



// app.get('/sendEmail', (req: Request, res: Response, next: NextFunction) => {

//   transporter.sendMail(mailOptions, (error, info) => {
//       if (error) return res.status(500).send({ error: error })

//       console.log(info)

//       return res.status(200).send({ info: info})
//   })


// })

// app.listen(7700);