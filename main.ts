// Name: Nathan Foran
// Date: 28 September 2026
// Program: Unit Converter
// This program converts values between metric and imperial units.
// The inputs are single values or lists of values entered by the user.
// The program processes the values using the selected conversion units.
// The output is the converted value or list displayed on the webpage.

// Higher-order function for unit conversions
const createConverter = (fromUnit: string, toUnit: string) => {
    return (values: number | number[]) => {
        const convertValue = (value: number) => {

            if (fromUnit === "kg" && toUnit === "lb") {
                return value * 2.20462;
            }

            if (fromUnit === "lb" && toUnit === "kg") {
                return value / 2.20462;
            }

            if (fromUnit === "km" && toUnit === "mi") {
                return value * 0.621371;
            }

            if (fromUnit === "mi" && toUnit === "km") {
                return value / 0.621371;
            }

            if (fromUnit === "c" && toUnit === "f") {
                return (value * 9 / 5) + 32;
            }

            if (fromUnit === "f" && toUnit === "c") {
                return (value - 32) * 5 / 9;
            }

            return value;
        };

        if (Array.isArray(values)) {
            return values.map(convertValue);
        }

        return convertValue(values);
    };

};
// Weight converter form
const weightForm = document.getElementById("weightForm") as HTMLFormElement;
const weightResult = document.getElementById("weightResult") as HTMLDivElement;

weightForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = (document.getElementById("weightValue") as HTMLInputElement).value;
    const fromUnit = (document.getElementById("weightFrom") as HTMLSelectElement).value;
    const toUnit = (document.getElementById("weightTo") as HTMLSelectElement).value;

    if (input.trim() === "") {
        weightResult.textContent = "Please enter a value.";
        return;
    }

    const values = input
        .split(",")
        .map((value: string) => Number(value.trim()));

    if (values.some((value: number) => Number.isNaN(value))) {
        weightResult.textContent = "Please enter numbers only.";
        return;
    }

    const converter = createConverter(fromUnit, toUnit);
    const result = converter(values);

    weightResult.textContent = `Result: ${Array.isArray(result) ? result.join(", ") : result}`;
});
// Distance converter form
const distanceForm = document.getElementById("distanceForm") as HTMLFormElement;
const distanceResult = document.getElementById("distanceResult") as HTMLDivElement;

distanceForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = (document.getElementById("distanceValue") as HTMLInputElement).value;
    const fromUnit = (document.getElementById("distanceFrom") as HTMLSelectElement).value;
    const toUnit = (document.getElementById("distanceTo") as HTMLSelectElement).value;

    if (input.trim() === "") {
        distanceResult.textContent = "Please enter a value.";
        return;
    }

    const values = input
        .split(",")
        .map((value: string) => Number(value.trim()));

    if (values.some((value: number) => Number.isNaN(value))) {
        distanceResult.textContent = "Please enter numbers only.";
        return;
    }

    const converter = createConverter(fromUnit, toUnit);
    const result = converter(values);

    distanceResult.textContent = `Result: ${Array.isArray(result) ? result.join(", ") : result}`;
});

// Temperature converter form
const temperatureForm = document.getElementById("temperatureForm") as HTMLFormElement;
const temperatureResult = document.getElementById("temperatureResult") as HTMLDivElement;

temperatureForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = (document.getElementById("temperatureValue") as HTMLInputElement).value;
    const fromUnit = (document.getElementById("temperatureFrom") as HTMLSelectElement).value;
    const toUnit = (document.getElementById("temperatureTo") as HTMLSelectElement).value;

    if (input.trim() === "") {
        temperatureResult.textContent = "Please enter a value.";
        return;
    }

    const values = input
        .split(",")
        .map((value: string) => Number(value.trim()));

    if (values.some((value: number) => Number.isNaN(value))) {
        temperatureResult.textContent = "Please enter numbers only.";
        return;
    }

    const converter = createConverter(fromUnit, toUnit);
    const result = converter(values);

    temperatureResult.textContent = `Result: ${Array.isArray(result) ? result.join(", ") : result}`;
});
// Navigation tabs
const weightTab = document.getElementById("weightTab") as HTMLButtonElement;
const distanceTab = document.getElementById("distanceTab") as HTMLButtonElement;
const temperatureTab = document.getElementById("temperatureTab") as HTMLButtonElement;

const weightSection = document.getElementById("weightForm")!.parentElement as HTMLElement;
const distanceSection = document.getElementById("distanceForm")!.parentElement as HTMLElement;
const temperatureSection = document.getElementById("temperatureForm")!.parentElement as HTMLElement;

weightTab.addEventListener("click", () => {
    weightSection.classList.remove("hidden");
    distanceSection.classList.add("hidden");
    temperatureSection.classList.add("hidden");

    weightTab.classList.add("bg-blue-800");
    distanceTab.classList.remove("bg-blue-800");
    temperatureTab.classList.remove("bg-blue-800");
});

distanceTab.addEventListener("click", () => {
    weightSection.classList.add("hidden");
    distanceSection.classList.remove("hidden");
    temperatureSection.classList.add("hidden");

    weightTab.classList.remove("bg-blue-800");
    distanceTab.classList.add("bg-blue-800");
    temperatureTab.classList.remove("bg-blue-800");
});

temperatureTab.addEventListener("click", () => {
    weightSection.classList.add("hidden");
    distanceSection.classList.add("hidden");
    temperatureSection.classList.remove("hidden");

    weightTab.classList.remove("bg-blue-800");
    distanceTab.classList.remove("bg-blue-800");
    temperatureTab.classList.add("bg-blue-800");
});