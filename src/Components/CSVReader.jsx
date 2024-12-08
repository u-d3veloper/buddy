// src/components/CSVReader.js
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import RowProcessor from './RowProcessor';

export default function CSVReader({soiree , user}){
  const [csvData, setCsvData] = useState([]);
  const [columnIndex, setColumnIndex] = useState(null);
  const [error, setError] = useState(null);

  // Load the CSV data
  const loadCSV = (soiree) => {
    Papa.parse('/planning/'+soiree+'.csv', {//A modifier
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        setCsvData(result.data);
      },
      error: (err) => {
        setError('Error reading CSV file');
      },
    });
  };

  // Find the column index matching the column name from TXT file
  const findColumnIndex = (header,email) => {
    const index = header.findIndex((column) => column.toLowerCase() === email.toLowerCase());
    if (index !== -1) {
      setColumnIndex(index);
    } else {
      setError('Column not found');
    }
  };

  useEffect(() => {
    loadCSV(soiree);
  }, []);

  useEffect(() => {
    if (csvData.length) {
      const headers = Object.keys(csvData[0]);
      findColumnIndex(headers,user);
    }
  }, [csvData]);

  return (
    <div>
        <div className="container flex justify-center text-lg font-bold">
            <p>Planning de {soiree}</p>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {columnIndex !== null && (
        <div className="container mt-5 flex justify-center">
            <div className="h-fit w-8/12 rounded-3xl border border-black bg-neutral-100 p-4">
                {csvData.map((row, index) => {
                    const value = row[Object.keys(row)[columnIndex]];
                    return (
                        <RowProcessor
                        key={index}
                        row={row}
                        value={value}
                        />
                    );
                })}
            </div>
        </div>
        )}
    </div>
  );
};