import bcryptjs, { genSaltSync } from "bcryptjs";
const salt = genSaltSync(10);

export const hashText = (text: string): string => bcryptjs.hashSync(text, salt);
export const compareTextWithHash = (text: string, hash: string): boolean =>
  bcryptjs.compareSync(text, hash);
