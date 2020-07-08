import { Pitch } from './pitch';

describe('Pitch', () => {
  it('should create an instance', () => {
    expect(new Pitch(1, ['C'])).toBeTruthy();
  });
});
