export class Pin {
  input: boolean;
  enabled: boolean;
  value: number;
  ID: number;
  frequency: number;
  setInput(isInput: boolean): void {
    this.input = isInput;
  }
}
