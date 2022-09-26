import iconFiles from '../../../assets/icons/icons.json';

let iconNamesArr = [];
let iconColorsArr = [];
let iconPathArr = [];

for (let x=0; x<iconFiles.length; x++){
    iconNamesArr.push(iconFiles[x].name);
    iconColorsArr.push(iconFiles[x].color);
    iconPathArr.push(iconFiles[x].path)
}

const constNames = [...iconNamesArr] as const;
const constColors = [...iconColorsArr] as const;
const constPaths = [...iconPathArr] as const;

export type iconNames = typeof  constNames[number];
export type iconColors = typeof constColors[number];
export type iconPaths = typeof constPaths[number];
export type icon = {
    name: iconNames,
    color: iconColors,
    path: iconPaths
}
