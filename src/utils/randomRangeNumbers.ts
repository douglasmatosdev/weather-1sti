import { randomNumbers } from "./randomNumbers"

/**
 * 
 * @param min 
 * @param max 
 * @param range 
 * @returns A range of number between min and max
 */
export const randomRangeNumbers = (min: number, max: number, range: number): number[] => {
    let listRandomNumbers: number[] = []

    while (listRandomNumbers.length < range) {

        let randomNumber = randomNumbers(min, max)

        if (listRandomNumbers.indexOf(randomNumber) === -1) {
            listRandomNumbers.push(randomNumber)
        }
    }

    return listRandomNumbers
}