const fs = require('fs').promises;

async function readCSV(filePath) {
    try {
        const csvData = await fs.readFile(filePath, 'utf-8');
        const rows = csvData.trim().split('\n');
        const headers = rows[0].split(',');
        const data = [];

        for (let i = 1; i < rows.length; i++) {
            const row = rows[i].split(',');
            const rowData = {};

            for (let j = 0; j < headers.length; j++) {
                rowData[headers[j]] = row[j];
            }

            data.push(rowData);
        }

        return data;
    } catch (error) {
        console.error('Error reading CSV file:', error);
        throw error;
    }
}

module.exports = readCSV;
