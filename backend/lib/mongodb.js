import { MongoClient } from "mongodb";

// if .en not exist
 if (!process.env.MONGODB_URI) {
    throw new Error("Invalid/Missing enviroment variable : 'MONGODB_URI' " )
 }
 const uri = process.env.MONGODB_URI
 const option = {}

 let client 
 let clientPromise

 if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
        client = new MongoClientClient(uri, options )
    }
    clientPromise = global._mongoClientPromise

 }else {
    // In production mode , it's best to not use a global variable
    client = new MongoClient(uri, options)
    clientPromise = client.connect()

 }

 // export a module scoped mongoclient promise , by doing this a separate module
 // client can be sharered acrose functions.
 export default clientPromise