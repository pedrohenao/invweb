const { Schema, model } = require("mongoose");

const InventarioSchema = Schema({
  serial: { type: String, require: true, unique: true },
  modelo: { type: String, require: true },
  descripcion: { type: String, require: true },
  color: { type: String, require: true },
  foto: { type: String, require: true },
  fechaCompra: { type: Date, require: true },
  precio: { type: Number, require: true },
  usuario: { type: Schema.Types.ObjectId, ref: "Usuario", required: false },
  marca: { type: Schema.Types.ObjectId, ref: "Marca", required: true },
  tipoEquipo: {
    type: Schema.Types.ObjectId,
    ref: "TipoEquipo",
    rquired: true,
  },
  estadoEquipo: {
    type: Schema.Types.ObjectId,
    ref: "EstadoEquipo",
    rquired: true,
  },
  fechaCreacion: { type: Date, require: true },
  fechaActualizacion: { type: Date, require: true },
});

module.exports = model("Inventario", InventarioSchema);
