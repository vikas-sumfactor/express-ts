import { executeQuery } from "../Database/connections";
export const userRestration=async(req:any,res:any)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            console.log(req.body, "in body")
            //  let { f_name, l_name, email, password, token } = req.body

            //  const sqlQuery = `insert into user(f_name,l_name,email,password,token)values('vikas','rana','vikasrana7770@gmail.com','vikas.sumfactor@','token')`
            //  const sqlQuery=`select * from user`
            // const sqlQuery=`delete from user where token=''`

            
            const sqlQuery = `SELECT * FROM user as a join info as b  on a.email= b.email;`

            

            

            let response = await executeQuery(sqlQuery)

             console.log("controller promise error", response)

             return resolve(response)

        } catch (error) {
            console.log( error)
            return reject(error)
        }
    })
}