const { Router } = require("express");
const EstadoEquipo = require("../models/EstadoEquipo");
const { validationResult, check } = require("express-validator");
const { validateJWT } = require("../middleware/validar-jwt");
const { validateRolAdmin } = require("../middleware/validar-rol-admin");

const router = Router();

router.post(
  "/",
  validateJWT,
  validateRolAdmin,
  [
    check("nombre", "invalid.nombre").not().isEmpty(),
    check("estado", "invalid.estado").isIn(["Activo", "Inactivo"]),
  ],
  async function (req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ mensaje: errors.array() });
      }

      let estadoEquipo = new EstadoEquipo();
      estadoEquipo.nombre = req.body.nombre;
      estadoEquipo.estado = req.body.estado;
      estadoEquipo.fechaCreacion = new Date();
      estadoEquipo.fechaActualizacion = new Date();

      estadoEquipo = await estadoEquipo.save();
      res.send(estadoEquipo);
    } catch (error) {
      console.log(error);
      res.status(500).send("Ocurrio un error al crear el estadoEquipo");
    }
  }
);
router.get("/", validateJWT, validateRolAdmin, async function (req, res) {
  try {
    const estadosEquipos = await EstadoEquipo.find();
    res.send(estadosEquipos);
  } catch (error) {
    console.log(error);
    res.status(500).send("ocurrio un error");
  }
});

module.exports = router;
