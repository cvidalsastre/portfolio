import axios from 'axios';

export const fetchCSVData = () => {
    const csvUrl = 'YOUR_GOOGLE_SHEETS_CSV_URL_HERE'; // Replace with your Google Sheets CSV file URL
    axios.get(csvUrl)
        .then((response) => {
            console.log('response', response.data)
        })
        .catch((error) => {
            console.log('error', error)
        });
}
