const http = require('http');
const { MongoClient } = require('mongodb');
// MongoDB connection URL and database settings
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'newdb';  // Replace with your database name
const collectionName = 'student';  // Replace with your collection name
http.createServer((request, response) => {
    if (request.method === 'POST') {
        let body = '';

        // Collect data chunks
        request.on('data', chunk => {
            body += chunk;
        });

        // After receiving the full body, parse and insert into MongoDB
        request.on('end', async () => {
            try {
                const data = JSON.parse(body);
                console.log("Data received:", data);

                // Connect to MongoDB and insert the data
                const client = new MongoClient(url);
                await client.connect();
                const db = client.db(dbName);
                const collection = db.collection(collectionName);

                // Insert the parsed data into MongoDB
                const result = await collection.insertOne(data);
                console.log("Document inserted:", result);

                // Respond with success
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({ message: 'Document inserted successfully', result }));
                
                // Close the MongoDB connection
                client.close();
            } catch (error) {
                console.error("Error processing request:", error);
                response.writeHead(500, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({ error: 'Failed to process request' }));
            }
        });
    } else {
        response.writeHead(405, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ error: 'Method Not Allowed' }));
    }
}).listen(8080, () => {
    console.log("Server running on http://127.0.0.1:8080");
});
