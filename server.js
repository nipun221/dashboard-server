const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.ATLAS_STRING, {
    dbName: 'blackcoffer', // Use the correct database name
});
  
const db = mongoose.connection;
db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
});
db.once('open', () => {
    console.log('Connected to MongoDB');
});
  
// Define the blackSchema schema
const blackSchema = new mongoose.Schema({
    end_year: Number || String,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: Number || String,
    impact: String,
    added: String,
    published: String,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number
});
  
// Create a Mongoose model based on the schema
const BlackData = mongoose.model('blackdata', blackSchema);

// Get whole data
app.get('/api/blackdata', async (req, res) => {
    try {
        const allData = await BlackData.find();
        const totalRows = await BlackData.countDocuments();
        res.json({
            totalRows,
            data: allData
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get end_year data
app.get('/api/blackdata/end_year', async (req, res) => {
    try {
        const end_year = req.query.year; // Use req.query to get query parameters
        const query = { end_year: end_year };
        const allData = await BlackData.find(query);
        const totalRows = await BlackData.countDocuments(query);
        res.json({
            totalRows,
            data: allData
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get topic data
app.get('/api/blackdata/topic', async (req, res) => {
    try {
        const topic = req.query.topic; // Use req.query to get query parameters
        const query = { topic: topic };
        const allData = await BlackData.find(query);
        const totalRows = await BlackData.countDocuments(query);
        res.json({
            totalRows,
            data: allData
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get sector data
app.get('/api/blackdata/sector', async (req, res) => {
    try {
        const sector = req.query.sector; // Use req.query to get query parameters
        const query = { sector: sector };
        const allData = await BlackData.find(query);
        const totalRows = await BlackData.countDocuments(query);
        res.json({
            totalRows,
            data: allData
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get region data
app.get('/api/blackdata/region', async (req, res) => {
    try {
        const region = req.query.region; // Use req.query to get query parameters
        const query = { region: region };
        const allData = await BlackData.find(query);
        const totalRows = await BlackData.countDocuments(query);
        res.json({
            totalRows,
            data: allData
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get pestle data
app.get('/api/blackdata/pestle', async (req, res) => {
    try {
        const pestle = req.query.pestle; // Use req.query to get query parameters
        const query = { pestle: pestle };
        const allData = await BlackData.find(query);
        const totalRows = await BlackData.countDocuments(query);
        res.json({
            totalRows,
            data: allData
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get source data
app.get('/api/blackdata/source', async (req, res) => {
    try {
        const source = req.query.source; // Use req.query to get query parameters
        const query = { source: source };
        const allData = await BlackData.find(query);
        const totalRows = await BlackData.countDocuments(query);
        res.json({
            totalRows,
            data: allData
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get country data
app.get('/api/blackdata/country', async (req, res) => {
    try {
        const country = req.query.country; // Use req.query to get query parameters
        const query = { country: country };
        const allData = await BlackData.find(query);
        const totalRows = await BlackData.countDocuments(query);
        res.json({
            totalRows,
            data: allData
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

