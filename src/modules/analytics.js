import ReactGA from "react-ga4";
import config from "../config";

export function init() {
  if (process.env.NODE_ENV !== "development") {
    ReactGA.initialize(config.GA4_MEASUREMENT_ID);
  }
}

export function logAugmentChoice() {
  return ReactGA.event({
    category: "interaction",
    action: "augment_choice",
    label: "Augment Choice", // optional
  });
}

export function logAugmentReset() {
  return ReactGA.event({
    category: "interaction",
    action: "augment_reset",
    label: "Augment Reset", // optional
  });
}
