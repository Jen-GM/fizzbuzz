const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
    test('Should print 0 if it receives 0', () => {
        const expected = 0;  
        const result = fizzbuzz(0); 
        expect(expected).toBe(result); 

    });

    test('Should print fizz if it receives 3', () => {
        const expected = 'fizz';  
        const result = fizzbuzz(3); 
        expect(expected).toBe(result); 
    });

    test('Should print fizz if it receives a multiple of 3', () => {
        const expected = 'fizz';  
        const result = fizzbuzz(6); 
        expect(expected).toBe(result); 
    });

    test('Should print fizz if it receives 5', () => {
        const expected = 'buzz';  
        const result = fizzbuzz(5); 
        expect(expected).toBe(result); 
    });

    test('Should print buzz if it receives a multiple of 5', () => {
        const expected = 'buzz';  
        const result = fizzbuzz(25); 
        expect(expected).toBe(result); 
    });

    test('Should print fizzbuzz if it receives a multiple of 3 AND 5', () => {
        const expected = 'fizzbuzz';  
        const result = fizzbuzz(15); 
        expect(expected).toBe(result); 
    });
    
});