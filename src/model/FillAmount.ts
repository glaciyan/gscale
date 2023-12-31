export enum FillState {
  None,
  Partial,
  Done,
}

// TODO this is stupid just do max and amount and do a getState()
// create a class like ItemProgress
interface FillAmount {
  state: FillState;
  amount: number;
}

export default FillAmount;
