"use strict";
// Name: Nathan Foran
// Date: 28 September 2026
// Program: Unit Converter
// This program converts values between metric and imperial units.
// The inputs are single values or lists of values entered by the user.
// The program processes the values using the selected conversion units.
// The output is the converted value or list displayed on the webpage.
// Higher-order function for unit conversions
const createConverter = (fromUnit, toUnit) => {
    return (values) => {
        const convertValue = (value) => {
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
const weightForm = document.getElementById("weightForm");
const weightResult = document.getElementById("weightResult");
weightForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("weightValue").value;
    const fromUnit = document.getElementById("weightFrom").value;
    const toUnit = document.getElementById("weightTo").value;
    if (input.trim() === "") {
        weightResult.textContent = "Please enter a value.";
        return;
    }
    const values = input
        .split(",")
        .map((value) => Number(value.trim()));
    if (values.some((value) => Number.isNaN(value))) {
        weightResult.textContent = "Please enter numbers only.";
        return;
    }
    const converter = createConverter(fromUnit, toUnit);
    const result = converter(values);
    weightResult.textContent = `Result: ${Array.isArray(result) ? result.join(", ") : result}`;
});
// Distance converter form
const distanceForm = document.getElementById("distanceForm");
const distanceResult = document.getElementById("distanceResult");
distanceForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("distanceValue").value;
    const fromUnit = document.getElementById("distanceFrom").value;
    const toUnit = document.getElementById("distanceTo").value;
    if (input.trim() === "") {
        distanceResult.textContent = "Please enter a value.";
        return;
    }
    const values = input
        .split(",")
        .map((value) => Number(value.trim()));
    if (values.some((value) => Number.isNaN(value))) {
        distanceResult.textContent = "Please enter numbers only.";
        return;
    }
    const converter = createConverter(fromUnit, toUnit);
    const result = converter(values);
    distanceResult.textContent = `Result: ${Array.isArray(result) ? result.join(", ") : result}`;
});
// Temperature converter form
const temperatureForm = document.getElementById("temperatureForm");
const temperatureResult = document.getElementById("temperatureResult");
temperatureForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("temperatureValue").value;
    const fromUnit = document.getElementById("temperatureFrom").value;
    const toUnit = document.getElementById("temperatureTo").value;
    if (input.trim() === "") {
        temperatureResult.textContent = "Please enter a value.";
        return;
    }
    const values = input
        .split(",")
        .map((value) => Number(value.trim()));
    if (values.some((value) => Number.isNaN(value))) {
        temperatureResult.textContent = "Please enter numbers only.";
        return;
    }
    const converter = createConverter(fromUnit, toUnit);
    const result = converter(values);
    temperatureResult.textContent = `Result: ${Array.isArray(result) ? result.join(", ") : result}`;
});
// Navigation tabs
const weightTab = document.getElementById("weightTab");
const distanceTab = document.getElementById("distanceTab");
const temperatureTab = document.getElementById("temperatureTab");
const weightSection = document.getElementById("weightForm").parentElement;
const distanceSection = document.getElementById("distanceForm").parentElement;
const temperatureSection = document.getElementById("temperatureForm").parentElement;
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
