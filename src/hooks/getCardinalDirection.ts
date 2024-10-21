export function getCardinalDirection(degrees: number): string {
  if (degrees < 0 || degrees > 360) {
    throw new Error("Число должно быть в диапазоне от 0 до 360");
  }
  
  switch (true) {
  case (degrees >= 337.5 && degrees <= 360) || (degrees >= 0 && degrees < 22.5):
    return "N";
  case (degrees >= 22.5 && degrees < 67.5):
    return "NE";
  case (degrees >= 67.5 && degrees < 112.5):
    return "E";
  case (degrees >= 112.5 && degrees < 157.5):
    return "SE";
  case (degrees >= 157.5 && degrees < 202.5):
    return "S";
  case (degrees >= 202.5 && degrees < 247.5):
    return "SW";
  case (degrees >= 247.5 && degrees < 292.5):
    return "W";
  case (degrees >= 292.5 && degrees < 337.5):
    return "NW";
  default:
    return "";
  }
}
  