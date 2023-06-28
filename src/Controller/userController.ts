import { executeQuery } from "../Database/connection";

export const userRestration=async(req:any,res:any)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            console.log(req.body, "in body")
             let { fname, lname, email, password, token } = req.body

const sqlQuery = `insert into user(fname,lname,email,password,token)values('vikas','rana','vikasrana7770@gmail.com','sumfactor@','12345')`
           

//   const sqlQuery=`select * from user`
            // const sqlQuery=`delete from user where token='12345'`

            
            // const sqlQuery = `SELECT * FROM user as a join info as b  on a.email= b.email;`

            

            

            let response = await executeQuery(sqlQuery)

             console.log("controller promise error", response)

             return resolve("hi")

        } catch (error) {
            console.log( error)
            return reject(error)
        }
    })
}