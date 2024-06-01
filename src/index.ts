import { Command } from "commander";
import { generate_handler } from "./handlers/generate";
const program = new Command();

program.name("qr-code-cli").description("Gerador de qr code").version("1.0.0");
generate_handler(program);
program.parse();
