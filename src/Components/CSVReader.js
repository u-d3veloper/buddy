// src/components/CSVReader.js
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import RowProcessor from './RowProcessor';

export default function CSVReader(props){
  const [csvData, setCsvData] = useState([]);
  const [columnName, setColumnName] = useState('');
  const [columnIndex, setColumnIndex] = useState(null);
  const [error, setError] = useState(null);
  const soiree = {props};

  // Load the TXT file to get the column name
  const loadColumnName = () => {
    fetch('/user.txt')
      .then((response) => response.text())
      .then((data) => {
        const text = data.trim();
        setColumnName(text);
      })
      .catch((err) => setError('Error loading text file'));
  };

  // Load the CSV data
  const loadCSV = () => {
    Papa.parse('/soiree Halloween.csv', {//A modifier
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
  const findColumnIndex = (header) => {
    const index = header.findIndex((column) => column.toLowerCase() === columnName.toLowerCase());
    if (index !== -1) {
      setColumnIndex(index);
    } else {
      setError('Column not found');
    }
  };

  useEffect(() => {
    loadColumnName();
    loadCSV();
  }, []);

  useEffect(() => {
    if (csvData.length && columnName) {
      const headers = Object.keys(csvData[0]);
      findColumnIndex(headers);
    }
  }, [csvData, columnName]);

  return (
    <div>
        <div className="container flex justify-center text-lg font-bold">
            <p>Planning de {props.soiree}</p>
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