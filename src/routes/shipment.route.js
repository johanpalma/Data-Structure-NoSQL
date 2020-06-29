const { Router } = require('express');
const router = Router();

const { deleteShipment, getShipments, getShipmentById,
        saveShipment, updateShipment } = require('../controllers/shipment.controller');

router.post('/create_shipment', saveShipment);
router.get('/get_shipments', getShipments);
router.get('/get_shipment/:id', getShipmentById);
router.put('/update_shipment/:id', updateShipment);
router.delete('/delete_shipment/:id', deleteShipment);

module.exports = router;