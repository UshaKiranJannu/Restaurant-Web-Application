const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://admin:admin@cluster0.sgykj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "sample_restaurants";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "people"
         const col = db.collection("restaurants");
         document.getElementById("hotelimgred1").addEventListener("click", redirect1);
         function redirect1(){

            const newDoc = await col.find();
            console.log(newDoc);

         }                                                                                                                                                                                                                                                                                                              

         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}


run().catch(console.dir);