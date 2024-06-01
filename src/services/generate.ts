import QRCode from "qrcode";
import { GenerateQRCodeParams } from "../types/generate";
import { validate } from "../adapters/validate";
import { generate_schema } from "../schemas/generate";
import { Logger } from "../adapters/logger";

export async function generateQRCode(data: GenerateQRCodeParams) {
  const logger = new Logger(data.loggerLevel);
  try {
    logger.debug(
      "🔍 [generateQRCode] Generating QR Code...",
      JSON.stringify(data, null, 2)
    );
    const { outputPath, text } = await validate(data, generate_schema);
    await QRCode.toFile(outputPath, text);
    logger.info("🎉 [generateQRCode] QR Code generated successfully!");
    logger.log("📄 [generateQRCode] Output Path:", outputPath);
  } catch (error) {
    logger.error(`❌ [generateQRCode] ${error}`);
  }
}
