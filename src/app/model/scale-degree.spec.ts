import { ScaleDegree } from './scale-degree';

describe('ScaleDegree', () => {
  it('should create an instance', () => {
    expect(new ScaleDegree(1)).toBeTruthy();
  });

  it('should set the right scale degree name for the first degree on construction', () => {
    const result = new ScaleDegree(1);
    expect(result.name).toEqual('Tonic');
  });

  it('should set the right scale degree name for the third degree on construction', () => {
      const result = new ScaleDegree(3);
      expect(result.name).toEqual('Mediant');
  });

  it('should set the right scale degree name for the seventh degree on construction', () => {
        const result = new ScaleDegree(7);
        expect(result.name).toEqual('Leading Tone');
    });
});
