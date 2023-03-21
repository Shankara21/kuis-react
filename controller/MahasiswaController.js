const { Mahasiswa } = require("../models");

module.exports = {
  index: async (req, res) => {
    try {
      const mahasiswas = await Mahasiswa.findAll();
      res.status(200).json(mahasiswas);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  show: async (req, res) => {
    try {
      const mahasiswa = await Mahasiswa.findByPk(req.params.id, {
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      res.status(200).json(mahasiswa);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  store: async (req, res) => {
    try {
      const mahasiswa = await Mahasiswa.create(req.body);
      res.status(201).json(mahasiswa);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  update: async (req, res) => {
    try {
      const mahasiswa = await Mahasiswa.findByPk(req.params.id);
      if (mahasiswa) {
        await mahasiswa.update(req.body);
        res.status(200).json(mahasiswa);
      } else {
        res.status(404).json({ message: "Mahasiswa not found" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  destroy: async (req, res) => {
    try {
      const mahasiswa = await Mahasiswa.findByPk(req.params.id);
      if (mahasiswa) {
        await mahasiswa.destroy();
        res.status(200).json({ message: "Mahasiswa deleted" });
      } else {
        res.status(404).json({ message: "Mahasiswa not found" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
