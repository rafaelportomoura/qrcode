import { z } from "zod";
import { generate_schema } from "../schemas/generate";

export type GenerateQRCodeParams = z.infer<typeof generate_schema>;
