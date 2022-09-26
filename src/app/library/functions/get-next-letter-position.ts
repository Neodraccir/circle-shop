export function getNextLetterPos  (text: string[], a: number[]): number[] {
  let [line, pos] = a;
  if (text[line].length > pos + 1) {
    return [line, pos + 1, 0, 0];
  } else if (line + 1 < text.length) {
    return [line + 1, 0, 1];
  }
  return [-1, -1, 0];
};
