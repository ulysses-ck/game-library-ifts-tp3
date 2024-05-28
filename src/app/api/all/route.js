import { parse } from "csv-parse";
import fs from "node:fs";
import path from "node:path";

export async function GET() {
  const file = path.join(process.cwd(), "./data/vgsales.csv");
  const content = fs.readFileSync(file, { encoding: "utf-8" });

  const records = parse(content, {
    delimiter: ",",
    columns: true,
    skip_empty_lines: true,
  });

  const data = await records.toArray();

  return Response.json(data);
}
