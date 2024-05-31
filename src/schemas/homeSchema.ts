import { z } from "zod";

const preprocessNumber = (val: unknown) => {
  if (typeof val === "string" && val.trim() === "") {
    return undefined;
  }
  return parseFloat(val as string);
};

const preprocessBooleanToNumber = (val: unknown) => {
  if (typeof val === "string") {
    if (val === "0" || val === "1") {
      return parseInt(val, 10);
    }
  }
  return val;
};

const homeSchema = z.object({
  area: z.preprocess(
    preprocessNumber,
    z
      .number({ required_error: "El area es requerida." })
      .nonnegative({ message: "El area debe ser un numero positivo." })
  ),
  habitaciones: z.preprocess(
    preprocessNumber,
    z
      .number({ required_error: "El numero de habitaciones es requerido." })
      .nonnegative({
        message: "El numero de habitaciones debe ser un numero positivo.",
      })
  ),
  banos: z.preprocess(
    preprocessNumber,
    z
      .number({ required_error: "El numero de baños es requerido." })
      .nonnegative({
        message: "El numero de baños deben ser un numero positivo.",
      })
  ),
  parqueaderos: z.preprocess(
    preprocessNumber,
    z
      .number({ required_error: "El numero de parqueaderos es requerido." })
      .nonnegative({
        message: "El numero de parqueaderos debe ser un numero positivo.",
      })
  ),
  estrato: z.preprocess(
    preprocessNumber,
    z.number({ required_error: "El estrato es requerido." }).nonnegative({
      message: "El estrato debe ser un numero positivo.",
    })
  ),
  jacuzzi: z.preprocess(
    preprocessBooleanToNumber,
    z.number().int().min(0).max(1).default(0)
  ),
  chimenea: z.preprocess(
    preprocessBooleanToNumber,
    z.number().int().min(0).max(1).default(0)
  ),
  permite_mascotas: z.preprocess(
    preprocessBooleanToNumber,
    z.number().int().min(0).max(1).default(0)
  ),
  gimnasio: z.preprocess(
    preprocessBooleanToNumber,
    z.number().int().min(0).max(1).default(0)
  ),
  ascensor: z.preprocess(
    preprocessBooleanToNumber,
    z.number().int().min(0).max(1).default(0)
  ),
  conjunto_cerrado: z.preprocess(
    preprocessBooleanToNumber,
    z.number().int().min(0).max(1).default(0)
  ),
  piscina: z.preprocess(
    preprocessBooleanToNumber,
    z.number().int().min(0).max(1).default(0)
  ),
  terraza: z.preprocess(
    preprocessBooleanToNumber,
    z.number().int().min(0).max(1).default(0)
  ),
  vigilancia: z.preprocess(
    preprocessBooleanToNumber,
    z.number().int().min(0).max(1).default(0)
  ),
  antiguedad: z.enum(
    ["MENOS DE 5 ANOS", "ENTRE 5 Y 10 ANOS", "MAS DE 10 ANOS"],
    {
      required_error: "La antigüedad es requerida.",
    }
  ),
  localidad: z.enum(["USAQUEN", "CHAPINERO", "SUBA"], {
    required_error: "La localidad es requerida.",
  }),
});

export default homeSchema;
