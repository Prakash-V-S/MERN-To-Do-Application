import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import todoRouter from './Router/todoRouter.js'
    
dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(cors())

const DB_url = process.env.DB_url;

mongoose.connect(DB_url, {
    dbName: 'TO-DO_App',
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDb is Connected Successfully');
}).catch((err) => {
    console.error('❌ Failed to connect to MongoDB:', err);
    process.exit(1);
});


//routes
app.use('/todos',todoRouter)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
