export module Utils {
    export function getInputValue(input: HTMLInputElement) {
        let dateValue = input.valueAsDate
        if (dateValue)
            return dateValue;
        let numValue = input.valueAsNumber;
        if (!isNaN(numValue))
            return numValue;

        let stringValue = input.value;
        let strAsNumber = Number(stringValue);
        if (!isNaN(strAsNumber))
            return strAsNumber;
        return stringValue;
    }

    export function getSelectInputValue(input: HTMLSelectElement) {
        let dateValue = input.valueAsDate
        if (dateValue)
            return dateValue;
        let numValue = input.valueAsNumber;
        if (!isNaN(numValue))
            return numValue;

        let stringValue = input.value;
        let strAsNumber = Number(stringValue);
        if (!isNaN(strAsNumber))
            return strAsNumber;
        return stringValue;
    }

    export function setInputValue(input: HTMLInputElement | HTMLSelectElement, value: any) {
        input.value = value ? value : "";
    }
}