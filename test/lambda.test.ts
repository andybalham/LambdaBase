import { expect } from 'chai';
import { handle } from '../src/lambda';

describe('Test lambda', () => {
  it('handles something', async () => {
    const event = 'Hello Lambda!';

    const result = await handle(event);

    expect(result).to.equal(event);
  });
});
