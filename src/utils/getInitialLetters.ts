export const getInitialLetters = (value: string): string => {
    return value.split(' ').reduce((acc, curr) => {
        return acc += curr.charAt(0).toUpperCase()
    }, '')
}