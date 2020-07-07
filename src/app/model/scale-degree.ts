export class ScaleDegree {
  private degreeNr: number;
  private degreeName: string;

  constructor(degreeNr: number) {
    this.degreeNr = degreeNr;
    this.degreeName = this.determineName(degreeNr);
  }

  public get name(): string {
    return this.degreeName;
  }

  private determineName(degreeNr: number): string {
    switch (degreeNr) {
      case 1: return 'Tonic';
      case 2: return 'Supertonic';
      case 3: return 'Mediant';
      case 4: return 'Subdominant';
      case 5: return 'Dominant';
      case 6: return 'Submediant';
      case 7: return 'Leading Tone';
    }
  }
}
