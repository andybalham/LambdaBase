import { ExampleClass } from '../src/ExampleClass';
import { expect } from 'chai';

describe('Test class', () => {

    it('does something', () => {

        const exampleClass = new ExampleClass();

        const result = exampleClass.doSomething();

        expect(result).to.be.true;
    });
});