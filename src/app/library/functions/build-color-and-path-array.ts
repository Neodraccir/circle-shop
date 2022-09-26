import { iconColors, iconNames, iconPaths } from '../types/icons';
import iconFiles from '../../../assets/icons/icons.json';

export function buildColorAndPathArray(
  nameArray: iconNames[]
): [iconColors[], iconPaths[], iconNames[]] {


  let paths:iconPaths[] = []
  let colors:iconColors[] = []
  let names:iconNames[] = []

  for (let i=0; i<nameArray.length; i++){
    let name = nameArray[i]
    for (let u=0; u<iconFiles.length; u++){
      if (name == iconFiles[u].name){
        paths.push(iconFiles[u].path);
        colors.push(iconFiles[u].color);
        names.push(iconFiles[u].name)
        break;
      }
    }
  }

  return [paths, colors, names]

}
