import { Pitch } from './pitch';
import { ScaleDegree } from './scale-degree.enum';

export class Scale {
  private pitchesPerDegree: Map<ScaleDegree, Pitch>;

  constructor(pitchesPerDegree: Map<ScaleDegree, Pitch>) {
    this.pitchesPerDegree = pitchesPerDegree;
  }

  public allPitchesPerDegree(): Map<ScaleDegree, Pitch> {
    return this.pitchesPerDegree;
  }

  public findPitchByDegree(degree: ScaleDegree): Pitch {
    return this.pitchesPerDegree.get(degree);
  }
}
