const XLSX = require('xlsx');
try {
    const workbook = XLSX.readFile('public/precios.xlsx');
    workbook.SheetNames.forEach(name => {
        const sheet = workbook.Sheets[name];
        const data = XLSX.utils.sheet_to_json(sheet);
        console.log(`Sheet: ${name}`);
        if (data.length > 0) {
            console.log('  Headers:', Object.keys(data[0]));
        }
    });
} catch (error) {
    console.error('Error:', error.message);
}
