const fs = require('fs');
const citiesData = JSON.parse(fs.readFileSync('./data/laposte_hexasmal.json'));
const  utils = require('../utilities/utils.js')


const citiesController = {

  getAllCities: (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const citiesForPage = citiesData.slice(startIndex, endIndex);

    const response = {
      page,
      limit,
      totalItems: citiesData.length,
      totalPages: Math.ceil(citiesData.length / limit),
      data: citiesForPage,
    };

    res.json(response);
  },

  getCityByPostalCode: (req, res) => {
    const postalCode = req.params.postalCode;
    const city = citiesData.find((entry) => entry.fields.code_postal === postalCode);

    if (city) {
      res.json(city);
    } else {
      res.status(404).json({ error: 'City not found' });
    }
  },

  updateCity: (req, res) => {
    const postalCode = req.params.postalCode;
    const updatedFields = req.body;


    const cityIndex = citiesData.findIndex((entry) => entry.fields.code_postal === postalCode);

    if (cityIndex !== -1) {

      const updatedCity = { ...citiesData[cityIndex] };
      updatedCity.fields = { ...updatedCity.fields, ...updatedFields };
      citiesData[cityIndex] = updatedCity;


      const updatedDataJSON = JSON.stringify(citiesData, null, 2);
      fs.writeFileSync('./data/laposte_hexasmal.json', updatedDataJSON);

      res.json({ message: 'City updated', updatedCity });
    } else {
      res.status(404).json({ error: 'City not found' });
    }
  },

  deleteCity: (req, res) => {
    const postalCode = req.params.postalCode;

    const cityIndex = citiesData.findIndex((entry) => entry.fields.code_postal === postalCode);

    if (cityIndex !== -1) {

      const deletedCity = citiesData.splice(cityIndex, 1)[0];

      const updatedDataJSON = JSON.stringify(citiesData, null, 2);
      fs.writeFileSync('./data/laposte_hexasmal.json', updatedDataJSON);

      res.json({ message: 'City deleted', deletedCity });
    } else {
      res.status(404).json({ error: 'City not found' });
    }
  },


  getCitiesByDepartment: (req, res) => {
    const departmentCode = req.params.departmentCode;

    const citiesInDepartment = citiesData.filter((city) => city.fields.departement === departmentCode);
    //  je n'ai pas trouvé le fields.departement

    if (citiesInDepartment.length > 0) {
      res.json(citiesInDepartment);
    } else {
      res.status(404).json({ error: 'No cities found in the specified department' });
    }
  },

  getCitiesInRadius: (req, res) => {
    const userLatitude = parseFloat(req.query.latitude);
    const userLongitude = parseFloat(req.query.longitude);
    const radiusInKilometers = parseFloat(req.query.radius) || 10; // Default radius is 10 kilometers

    if (isNaN(userLatitude) || isNaN(userLongitude)) {
      return res.status(400).json({ error: 'Invalid coordinates' });
    }

    const citiesInRadius = citiesData.filter(city => {

      const cityLatitude = city.geometry?.coordinates[1];
      const cityLongitude = city.geometry?.coordinates[0];
      const distance =  utils.calculateDistance(userLatitude, userLongitude, cityLatitude, cityLongitude);
      return distance <= radiusInKilometers;
    });

    res.json(citiesInRadius);
  }
}

module.exports = citiesController;








