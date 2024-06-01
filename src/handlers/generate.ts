import { Command } from "commander";
import { generateQRCode } from "../services/generate";
import { LoggerLevel } from "../constants/loggerLevel";

export const generate_handler = (program: Command) => {
  program
    .command("generate")
    .description("Generate a QR Code")
    .requiredOption("-t, --text <text>", "Text to be converted to QR Code")
    .option(
      "-o, --output-path [output_path]",
      "Path to save the QR Code",
      "qr-code.png"
    )
    .option(
      "-l, --logger-level [logger_level]",
      "Logger level",
      LoggerLevel.log
    )
    .action(async (opt) => generateQRCode(opt));
};
