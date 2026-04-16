const express = require("express");

const { listSenas, createSena } = require("../database/senas");

const router = express.Router();

router.get("/", async function (req, res) {
  const response = await listSenas();
  res.status(200).json(response.rows);
});

router.post("/", async function (req, res) {
  const { nros } = req.body;
  const response = await createSena(nros);
  res.status(201).json(response.rows[0]);
});

module.exports = router; // Tem que ser sempre o último
