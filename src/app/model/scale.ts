import { Pitch } from './pitch';
import { ScaleDegree } from './scale-degree.enum';

export interface Scale {
  pitchesPerDegree: Map<ScaleDegree, Pitch>;
}
