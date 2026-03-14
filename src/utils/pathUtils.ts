import * as fs from 'node:fs/promises';
import * as path from 'node:path';

export async function normalizeFsPath(inputPath: string): Promise<string> {
  const resolved = path.resolve(inputPath);

  try {
    return await fs.realpath(resolved);
  } catch {
    return resolved;
  }
}

export function normalizeComparablePath(value: string): string {
  return path.normalize(value);
}
