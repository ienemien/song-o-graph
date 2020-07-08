export class Pitch {
  private pitchPos: number;
  private pitchNames: string[];

  constructor(position: number, names: string[]) {
    this.pitchPos = position;
    this.pitchNames = names;
  }

  public get position(): number {
    return this.pitchPos;
  }

  public get names(): string[] {
    return this.pitchNames;
  }
}
