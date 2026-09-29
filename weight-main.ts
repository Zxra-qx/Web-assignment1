// Roselle Blanco
// September 28 2026
// Program: Unit Converter
// This Program take weight value(s) and converts it between kilograms and pounds.
// User can input either a single value or multiple comma-separted values.
// The progam should take user input and depending on if there is more than one number given
// put each number in an array.
// Then Calculate the conversion for the value(s) given.
// The converted values will then be displayed on screen

// Convert Kilograms to Pounds
const kilogramsToPounds = (kilograms: number | number[]): number | number[] => {
    if (Array.isArray(kilograms)) {
        return kilograms.map(kg => kg * 2.20462);
    }

    return kilograms * 2.20462;
};

const kgInput = document.getElementById("kg-input") as HTMLInputElement;
const kgButton = document.getElementById("kg-button") as HTMLButtonElement;
const kgResult = document.getElementById("kg-result") as HTMLParagraphElement;

// Weight Converter
const handleKgConvert = (): void => {
    const inputValue = kgInput.value;
    let kilograms: number | number[];

    if (inputValue.includes(",")) {

        kilograms = inputValue
            .split(",")
            .map(value => Number(value.trim()))
    }else{
        kilograms = Number(inputValue);
    };
    const pounds: number | number[] = kilogramsToPounds(kilograms);
        if (Array.isArray(pounds)) {
            let resultText = "";

            pounds.forEach((value, index) => {
                resultText += value.toFixed(4);

            if (index < pounds.length - 1) {
                resultText += ", ";
            }
    });

    kgResult.textContent = resultText;
} else {
    kgResult.textContent = pounds.toFixed(4);
}
};

kgButton.addEventListener("click", handleKgConvert)

// Pounds to Kilograms Converter
// The same logic as kilograms to pounds but instead take the value and convert
// to kilograms
const poundsToKilograms = (pounds: number | number[]): number | number[] => {
    if (Array.isArray(pounds)) {
        return pounds.map(lb => lb / 2.20462);
    }

    return pounds / 2.20462;
};
const lbInput = document.getElementById("lb-input") as HTMLInputElement;
const lbButton = document.getElementById("lb-button") as HTMLButtonElement;
const lbResult = document.getElementById("lb-result") as HTMLParagraphElement;

const handleLbConvert = (): void =>{
    const inputValue = lbInput.value;
    let pounds: number | number[];

    if (inputValue.includes(",")) {

        pounds = inputValue
            .split(",")
            .map(value => Number(value.trim()))
    }else{
        pounds = Number(inputValue);
    };
    const kilograms : number | number[] = poundsToKilograms(pounds);
        if (Array.isArray(kilograms)){
            let resultText = "";

            kilograms.forEach((value, index) => {
                resultText += value.toFixed(4);

                if( index < kilograms.length - 1){
                    resultText += ", ";
                }
        });

        lbResult.textContent = resultText;
    } else {
    lbResult.textContent = kilograms.toFixed(4);
}
};

lbButton.addEventListener("click", handleLbConvert);

