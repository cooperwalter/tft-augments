import ReactGA from "react-ga4";

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
