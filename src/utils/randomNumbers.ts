/**
 * 
 * @param min 
 * @param max 
 * @returns value between min and max
 */
export const randomNumbers = (min: number, max: number): number => {
    const value = Math.floor(Math.random() * max) + min
    return value
}