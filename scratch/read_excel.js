import * as XLSX from 'xlsx';
import fs from 'fs';

try {
    const workbook = XLSX.readFile('public/productos.xlsx');
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);
    fs.writeFileSync('products_data.json', JSON.stringify(data, null, 2));
    console.log('Success: products_data.json created');
} catch (error) {
    console.error('Error reading xlsx:', error.message);
}
