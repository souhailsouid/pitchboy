const express = require('express');
const app = express();
const fs = require('fs');

const PORT = process.env.PORT || 8000;


const citiesData = JSON.parse(fs.readFileSync('./laposte_hexasmal.json'));


app.get('/api/cities', (req, res) => {
    res.json(citiesData);
});

app.get('/api/cities/:postalCode', (req, res) => {
    const postalCode = req.params.postalCode;
    const city = citiesData.find((entry) => entry.fields.code_postal === postalCode);

    if (city) {
        res.json(city);
    } else {
        res.status(404).json({ error: 'City not found' });
    }
});

app.put('/api/cities/:postalCode', (req, res) => {
    const postalCode = req.params.postalCode;
    const updatedFields = req.body; 
  
   
    const cityIndex = citiesData.findIndex((entry) => entry.fields.code_postal === postalCode);
  
    if (cityIndex !== -1) {

      const updatedCity = { ...citiesData[cityIndex] };
      updatedCity.fields = { ...updatedCity.fields, ...updatedFields };
      citiesData[cityIndex] = updatedCity;
  
    
      const updatedDataJSON = JSON.stringify(citiesData, null, 2);
      fs.writeFileSync('./laposte_hexasmal.json', updatedDataJSON);
  
      res.json({ message: 'City updated', updatedCity });
    } else {
      res.status(404).json({ error: 'City not found' });
    }
  });
  


app.delete('/api/cities/:postalCode', (req, res) => {
    const postalCode = req.params.postalCode;
  
    
    const cityIndex = citiesData.findIndex((entry) => entry.fields.code_postal === postalCode);
  
    if (cityIndex !== -1) {
     
      const deletedCity = citiesData.splice(cityIndex, 1)[0];
  
      const updatedDataJSON = JSON.stringify(citiesData, null, 2);
      fs.writeFileSync('./laposte_hexasmal.json', updatedDataJSON);
  
      res.json({ message: 'City deleted', deletedCity });
    } else {
      res.status(404).json({ error: 'City not found' });
    }  
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
