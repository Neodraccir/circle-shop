export function convertIconNames (name:string){
  switch(name){
    case "banana": return "Banane";
    case "cherry":return "Kirsche";
    case "chocolate": return "Schokolade";
    case "honey": return "Honig";
    case "ice-cream": return "Waffeleis";
    case "ice-waffle": return "Waffel mit Eis";
    case "limette": return "Limette";
    case "strawberry": return "Erdbeere";
    case "coconut": return "Kokosnuss";
    case "water": return "Wasser";
    case "tea": return "Tee";
    case "no-drink": return "Kein Getränk";
    case "latte":return "Latte Machiato";
    case "fanta": return "Fanta";
    case "coke": return "Cola";
    case "coffee": return "Kaffee";
    case "juice": return "Saft";
    case "watermelon": return "Wassermelone"
    default: return "Nicht ausgewählt"

  }
}
