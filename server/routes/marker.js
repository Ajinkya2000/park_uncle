const router = require("express").Router();

const Marker = require("../models/Marker");
const User = require("../models/User");

// Get all Markers
router.get("/marker", async (req, res) => {
  try {
    const markers = await Marker.find();
    res.status(200).json(markers);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// Create a new Marker
router.post("/marker", async (req, res) => {
  const markerPin = new Marker(req.body.markerData);

  try {
    const savedPin = await markerPin.save();
    res.status(200).json({ marker: savedPin });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Marker Status
router.patch("/book", async (req, res) => {
  try {
    const {markerId, booked, clientId} = req.body;
    const newMarkerData = await Marker.findOneAndUpdate(
      
      { _id: markerId },
      { booked, clientId },
      { new: true }
    );

    return res.status(200).json({ markerData: newMarkerData });
  } catch (err) {
    return res.status(500).json({error: err.message});
  }
});

// Remove a Marker
router.patch("/remove", async (req, res) => {
  try {
    await Marker.findOneAndRemove({_id: req.body._id});

    return res.status(200).json({ msg: 'Marker Deleted'});
  } catch (err) {
    return res.status(500).json({error: err.message});
  }
});

module.exports = router;
