import { IItemAvailability } from "./contracts/IItemAvailability";
import { IdIndex } from "./contracts/UsingId";
import { ItemGroups as ig } from "./ItemGroups";
import { DaysOfWeek as dw } from "./util/DaysOfWeek";

export const ItemAvailability: IdIndex<IItemAvailability> = {
  freedom: {
    item: ig.freedom,
    days: [dw.monday, dw.thursday, dw.sunday],
  },
  resistance: {
    item: ig.resistance,
    days: [dw.tuesday, dw.friday, dw.sunday],
  },
  ballad: {
    item: ig.ballad,
    days: [dw.wednesday, dw.saturday, dw.sunday],
  },

  prosperity: {
    item: ig.prosperity,
    days: [dw.monday, dw.thursday, dw.sunday],
  },
  diligence: {
    item: ig.diligence,
    days: [dw.tuesday, dw.friday, dw.sunday],
  },
  gold: {
    item: ig.gold,
    days: [dw.wednesday, dw.saturday, dw.sunday],
  },

  transience: {
    item: ig.transience,
    days: [dw.monday, dw.thursday, dw.sunday],
  },
  elegance: {
    item: ig.elegance,
    days: [dw.tuesday, dw.friday, dw.sunday],
  },
  light: {
    item: ig.light,
    days: [dw.wednesday, dw.saturday, dw.sunday],
  },
};
