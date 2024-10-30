import { makeRandomIndex, chooseWordFromListByIndex } from '../index.js';

describe('Running unit tests', () => {
    test('Test random number generating', () => {
        expect(makeRandomIndex(['Git', 'Action'])).toBeGreaterThanOrEqual(0);
        expect(makeRandomIndex(['Git', 'Action'])).toBeLessThanOrEqual(2);
    });
    test('Rövid felhasználó név teszt', () => {
        expect(chooseWordFromListByIndex(1, ['Git', 'Action'])).toBe('Action');
        expect(chooseWordFromListByIndex(0, ['Git', 'Action'])).toBe('Git');

    });
})
