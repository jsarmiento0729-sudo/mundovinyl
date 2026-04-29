const XLSX = require('xlsx');
const fs = require('fs');

try {
    const workbook = XLSX.readFile('public/precios.xlsx');
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const rawData = XLSX.utils.sheet_to_json(worksheet);

    const fullProducts = rawData
        .filter(item => {
            const code = String(item['CÓDIGO'] || '');
            const name = String(item['DESCRIPCIÓN'] || '').toLowerCase();
            
            // Filter out specific codes
            if (code === '51009' || code === '51010') return false;
            
            // Filter out anything that says "Maquinaria"
            if (name.includes('maquinaria')) return false;
            
            return true;
        })
        .map((item, index) => {
            const code = String(item['CÓDIGO'] || index);
            const prefix = code.substring(0, 2);
            
            let category = 'Otros';
            let image = '/logo2.png';

            if (['01', '02', '03', '04', '05', '06', '07', '08', '09'].includes(prefix)) {
                category = 'Viniles de Corte';
                image = '/vinil_corte.png';
            } else if (['12', '13', '14', '15'].includes(prefix)) {
                category = 'Reflectivos y Screem';
                image = '/vinil_corte.png';
            } else if (prefix === '17') {
                category = 'Vinil de Impresión';
                image = '/mundo.jpg';
            } else if (['18', '19'].includes(prefix)) {
                category = 'Fantasy y Holográficos';
                image = '/logo2.png';
            } else if (['20', '21', '22', '23', '24', '25'].includes(prefix)) {
                category = 'Vinil Textil';
                image = '/logo2.png';
            } else if (prefix === '66') {
                category = 'Sublimación';
                image = '/logo2.png';
            } else if (prefix === '67') {
                category = 'Tintas';
                image = '/logo2.png';
            } else if (['68', '69', '70', '71'].includes(prefix)) {
                category = 'Prendas';
                image = '/logo2.png';
            } else if (prefix === '72') {
                category = 'Rollos y Otros';
                image = '/mundo.jpg';
            }

            return {
                id: code,
                name: item['DESCRIPCIÓN'] || 'Producto sin nombre',
                prices: {
                    'Táchira': parseFloat(item['PRECIO SAN CRISTOBAL']) || 0,
                    'Caracas': parseFloat(item['PRECIO CARACAS']) || 0,
                    'Barinas': parseFloat(item['PRECIO BARINAS']) || 0,
                    'Nacional / Otros': parseFloat(item['PRECIO NACIONAL (SC)']) || 0
                },
                category: category,
                description: `Código: ${code}`,
                image: image
            };
        });

    const content = `export const productsData = ${JSON.stringify(fullProducts, null, 2)};`;
    fs.writeFileSync('src/products.js', content);
    console.log(`Success: src/products.js created with ${fullProducts.length} items and regional prices`);
} catch (error) {
    console.error('Error processing prices list:', error.message);
}
