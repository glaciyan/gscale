import { INamed } from "./contracts/INamed";
import DaysOfWeekKey from "./keys/DaysOfWeekKey";

export const DaysOfWeek: { [key in DaysOfWeekKey]: INamed } = {
  monday: {
    name: "Monday",
    normalizedName: "mo",
  },
  tuesday: {
    name: "Thuesday",
    normalizedName: "tu",
  },
  wednesday: {
    name: "Wednesday",
    normalizedName: "we",
  },
  thursday: {
    name: "Thursday",
    normalizedName: "th",
  },
  friday: {
    name: "Friday",
    normalizedName: "fr",
  },
  saturday: {
    name: "Saturday",
    normalizedName: "sa",
  },
  sunday: {
    name: "Sunday",
    normalizedName: "su",
  },
};
