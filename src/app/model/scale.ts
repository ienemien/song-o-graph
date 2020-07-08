import { Pitch } from './pitch';
import { ScaleDegree } from './scale-degree.enum';

export class Scale {
  private pitchPerDegree: Map<ScaleDegree, Pitch>;

  constructor(pitchPerDegree: Map<ScaleDegree, Pitch>) {
    this.pitchPerDegree = pitchPerDegree;
  }

  public allPitchesPerDegree(): Map<ScaleDegree, Pitch> {
    return this.pitchPerDegree;
  }

  public findPitchByDegree(degree: ScaleDegree): Pitch {
    return this.pitchPerDegree.get(degree);
  }
}
