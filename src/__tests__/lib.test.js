import { nameValidation } from "../lib/helpers";

describe('Library folder', () => { 
  it('name validator should only accept letters', () => {
    expect(nameValidation('Aaron')).toBe('');
    expect(nameValidation('Aaron!')).toBe('Please only use letters for your name');
    expect(nameValidation('åaron')).toBe('Please only use letters for your name');
  });
 })