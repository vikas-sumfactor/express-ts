import mysql from 'mysql';

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "vikas@rana",
    database: "new_schema"
})

//  connect database


export const connectDatabase = () => {
    return new Promise((resolve, reject) => {
        try {
           connection.connect((error)=>{
            if (error) return reject(error);
            return resolve("Database connected Sucessfully")
           })
        }
        catch (error) {
          console.log("ConnectDatabase error",error);
        }
    })
}

//  sql query

export const executeQuery = (sqlQuery: string) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(sqlQuery, (error, response) => {
                console.log("query error", error)
                if (error) return reject(error)

                return resolve(response)
            })
        } catch (error) {
            console.log("connection error ", error)

        }
    })
}