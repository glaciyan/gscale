export enum FillState {
  None,
  Partial,
  Done,
}

interface FillAmount {
  state: FillState;
  amount: number;
}

export default FillAmount;
