import { Scale } from '../model/scale';
import { ScaleDegree } from '../model/scale-degree.enum';
import { Pitch } from '../model/pitch';

export class ScalesStub {
  public static C_MAJOR: Scale = new Scale(new Map<ScaleDegree, Pitch>()
    .set(ScaleDegree.TONIC, new Pitch(0, ['C']))
    .set(ScaleDegree.SUPERTONIC, new Pitch(2, ['D']))
    .set(ScaleDegree.MEDIANT, new Pitch(4, ['E']))
    .set(ScaleDegree.SUBDOMINANT, new Pitch(5, ['F']))
    .set(ScaleDegree.DOMINANT, new Pitch(7, ['G']))
    .set(ScaleDegree.SUBMEDIANT, new Pitch(9, ['A']))
    .set(ScaleDegree.LEADING_TONE, new Pitch(11, ['B']))
  );
}
