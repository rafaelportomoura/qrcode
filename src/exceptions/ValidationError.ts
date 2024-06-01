import { z } from "zod";

export class ValidationError extends Error {
  issues: z.ZodError<any>["formErrors"]["fieldErrors"];
  constructor(issues: z.ZodError<any>["formErrors"]["fieldErrors"]) {
    super("Validation data failed!");
    this.issues = issues;
  }

  toJSON() {
    const { message, issues } = this;
    return { message, issues };
  }

  toString() {
    return this.valueOf();
  }

  valueOf() {
    return (
      `${this.message}\n` +
      Object.entries(this.issues).reduce(
        (p, [key, value]) => p + `\t- ${key}: "${value}"\n`,
        ""
      )
    );
  }
}
