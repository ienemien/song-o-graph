import { Scale } from '../model/scale';
import { ScaleDegree } from '../model/scale-degree.enum';
import { Pitch } from '../model/pitch';

export class ScalesStub {
  public static A_MAJOR: Scale = { pitchesPerDegree: new Map([
                  [ScaleDegree.TONIC, {
                                             names: [
                                                 'A'
                                             ],
                                             position: 9
                                         }],
                                         [ScaleDegree.SUPERTONIC, {
                                             names: [
                                                 'B'
                                             ],
                                             position: 11
                                         }],
                                         [ScaleDegree.MEDIANT, {
                                             names: [
                                                 'C-sharp',
                                                 'D-flat'
                                             ],
                                             position: 1
                                         }],
                                         [ScaleDegree.SUBDOMINANT, {
                                             names: [
                                                 'D'
                                             ],
                                             position: 2
                                         }],
                                         [ScaleDegree.DOMINANT, {
                                             names: [
                                                 'E'
                                             ],
                                             position: 4
                                         }],
                                         [ScaleDegree.SUBMEDIANT, {
                                             names: [
                                                 'F-sharp',
                                                 'G-flat'
                                             ],
                                             position: 6
                                         }],
                                         [ScaleDegree.LEADING_TONE, {
                                             names: [
                                                 'G-sharp',
                                                 'A-flat'
                                             ],
                                             position: 8
                                         }]])};
}
