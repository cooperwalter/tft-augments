import ReactGA from "react-ga4";
import config from "../config";

export function init() {
  if (process.env.NODE_ENV !== "development") {
    ReactGA.initialize(config.GA4_MEASUREMENT_ID);
  }
}

export function logAugmentChoice() {
  console.log("logging augment choice");
  return ReactGA.event({
    category: "interaction",
    action: "augment_choice",
    label: "Augment Choice", // optional
  });
}

export function logAugmentReset() {
  console.log("logging augment reset");
  return ReactGA.event({
    category: "interaction",
    action: "augment_reset",
    label: "Augment Reset", // optional
  });
}

export function logBuyMeACoffeeClick() {
  console.log("logging buy me a coffee click");
  return ReactGA.event({
    category: "interaction",
    action: "buy_me_a_coffee_click",
    label: "Buy Me A Coffee Click", // optional
  });
}
