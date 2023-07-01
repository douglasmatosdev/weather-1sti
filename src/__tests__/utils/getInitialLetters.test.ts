import { getInitialLetters } from "../../utils/getInitialLetters";

describe('utils -> getInitialLetters', () => {
    const text = 'Duque de Caxias'
    it('should returns "DC"', () => {
        expect(getInitialLetters(text)).toEqual('DC')
    })
});