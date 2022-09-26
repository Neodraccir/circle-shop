import { getNextLetterPos } from "./get-next-letter-position";

export function  printTextDynamically(text: string[], appendLetter:Function, line_pos: number[]=[0,0,0], speed:number[]=[350,50],){
  let [line, pos] = line_pos;

  if (line < 0) return;
  setTimeout(
    () => {
      appendLetter(text[line][pos], line);
      let next = getNextLetterPos(text, [line, pos]);
      return printTextDynamically(text, appendLetter, next, speed, );
    },
    line_pos[2] ? speed[0] : speed[1]
  );
}
