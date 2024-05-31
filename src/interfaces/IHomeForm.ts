import homeSchema from "@schemas/homeSchema";
import { z } from "zod";

export type IHomeForm = z.infer<typeof homeSchema>;
