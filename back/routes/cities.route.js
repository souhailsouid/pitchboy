const express = require('express');
const router = express.Router();
const citiesController = require('../controllers/cities.controller');

router.get('/', citiesController.getAllCities); //query example:  ?page=4&limit=20
router.get('/radius', citiesController.getCitiesInRadius); //query example: ?latitude=47.010509406&longitude=6.152488586&radius=10
router.get('/:postalCode', citiesController.getCityByPostalCode);
router.put('/:postalCode', citiesController.updateCity);
router.delete('/:postalCode', citiesController.deleteCity)
router.get('/department/:departmentCode', citiesController.getCitiesByDepartment); 


module.exports = router;
