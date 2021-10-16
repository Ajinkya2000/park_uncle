const router = require("express").Router();
const sendMail = require("../utils/nodemailer");

router.post("/send-mail", async (req, res) => {
  try {
    const res = await sendMail(req.body);
    return res.status(200).json({ msg: "Email Sent" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
