// Sets the formula for conversions
const milesToKilometers = (miles: number): number => miles * 1.60934;
const kilometersToMiles = (kilometers: number): number => kilometers / 1.60934;

// Adds id information for miles
const milesInput = document.getElementById("miles-input") as HTMLInputElement;
const milesButton = document.getElementById("miles-button") as HTMLButtonElement;
const milesResult = document.getElementById("miles-result") as HTMLParagraphElement;
const handleMilesConvert = (): void => {
const miles: number = Number(milesInput.value);
const kilometres: number = milesToKilometers(miles);
milesResult.textContent = kilometres.toFixed(2);
};
milesButton.addEventListener("click", handleMilesConvert)

// Adds id information for kilometres
const kilometersInput = document.getElementById("kilometers-input") as HTMLInputElement;
const kilometersButton = document.getElementById("kilometers-button") as HTMLButtonElement;
const kilometersResult = document.getElementById("kilometers-result") as HTMLParagraphElement;
const handleKilometersConvert = (): void => {
const kilometers: number = Number(kilometersInput.value);
const miles: number = kilometersToMiles(kilometers);
kilometersResult.textContent = miles.toFixed(2);
};
kilometersButton.addEventListener("click", handleKilometersConvert);
