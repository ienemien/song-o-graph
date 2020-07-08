import { Scale } from './scale';
import { Pitch } from './pitch';
import { ScaleDegree } from './scale-degree.enum';

describe('Scale', () => {
  let pitchesPerDegree: Map<ScaleDegree, Pitch>;

  beforeEach(() => {
    pitchesPerDegree = new Map<ScaleDegree, Pitch>();
    pitchesPerDegree.set(ScaleDegree.TONIC, new Pitch(1, ['C']));
    pitchesPerDegree.set(ScaleDegree.SUPERTONIC, new Pitch(2, ['D']));
    pitchesPerDegree.set(ScaleDegree.MEDIANT, new Pitch(3, ['E']));
    pitchesPerDegree.set(ScaleDegree.SUBDOMINANT, new Pitch(4, ['F']));
    pitchesPerDegree.set(ScaleDegree.DOMINANT, new Pitch(5, ['G']));
    pitchesPerDegree.set(ScaleDegree.SUBMEDIANT, new Pitch(6, ['A']));
    pitchesPerDegree.set(ScaleDegree.LEADING_TONE, new Pitch(7, ['B']));
  });

  it('should create an instance', () => {
    expect(new Scale(pitchesPerDegree)).toBeTruthy();
  });

  it('should return the pitch by degree', () => {
    const scale = new Scale(pitchesPerDegree);
    expect(scale.findPitchByDegree(ScaleDegree.MEDIANT).names[0]).toEqual('E');
  });
});
