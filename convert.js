
const xlsx = require('xlsx');
const fs = require('fs');
// read file excel

const data_excel = xlsx.readFile('RevoU Data Cleaning.xlsx')
// console.log(data_excel)

const sheet_names = data_excel.SheetNames[1]
const worksheet = data_excel.Sheets[sheet_names]
// console.log(worksheet)

// convert to json
const data_json = xlsx.utils.sheet_to_json(worksheet)
console.log(data_json)

// write as json
fs.writeFileSync('data_team7.json',JSON.stringify(data_json),'utf8')


























// const xlsx = require('xlsx');
// const fs = require('fs');

// function convertExcelToJson(excelFilePath, jsonFilePath) {
//     // Read the Excel file
//     const workbook = xlsx.readFile(excelFilePath);
    
//     // Assuming the data is in the first sheet
//     const sheetName = workbook.SheetNames[0];
//     const worksheet = workbook.Sheets[sheetName];
    
//     // Convert the sheet to JSON
//     const jsonData = xlsx.utils.sheet_to_json(worksheet);
    
//     // Write the JSON data to a file
//     fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2), 'utf8');
    
//     console.log(`Excel file converted to JSON and saved to ${jsonFilePath}`);
// }

// Example usage
// const excelFilePath = 'path/to/your/excel/file.xlsx';
// const jsonFilePath = 'path/to/your/output/file.json';
// convertExcelToJson(excelFilePath, jsonFilePath);
