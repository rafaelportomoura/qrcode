import { z } from "zod";
import path from "path";
import { LoggerLevel } from "../constants/loggerLevel";

export const generate_schema = z.object({
  text: z.string().max(2953).min(1),
  outputPath: z
    .string()
    .max(255)
    .min(1)
    .transform((v) => path.resolve(v)),
  loggerLevel: z.nativeEnum(LoggerLevel).default(LoggerLevel.silent),
});
