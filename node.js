// Server-side code with Node.js and Express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Mock database array
const newsReports = [];

app.post('/api/news-reports', (req, res) => {
    const { title, content } = req.body;
    
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }
    
    // Add the news/report to the "database"
    const newReport = { title, content, date: new Date() };
    newsReports.push(newReport);
    
    res.status(201).json(newReport);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
