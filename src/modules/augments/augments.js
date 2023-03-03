/**
 * This module handles returning the chances of an augment type
 * being offered in each augment round based on previous augments.
 */
/**
 * TODO List
 * Parse the augment data from the augment file to 2D array
 *  - convert percentages to decimal
 * Process the augment data to remove weights (repeat the same augment combinations)
 * Write a function to return the augment chances for past augments (can be none)
 *  - returns an object with chances for each augment type
 */

import validate from "aproba";
import rawData from "./rawData";

let augmentData = [];

// parse raw data into 2D array of augment combinations with weights indicated by duplicated sub-arrays
function parseRawData(raw) {
  // replace all whitespace with a semicolon delimiter
  let items = raw.replace(/\s+/g, ";");
  items = items.split(";");
  let result = [];
  const chunkSize = 4;
  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize);
    result = [...result, chunk];
  }

  // clean up the data: convert percentages to decimals and standardize augment names
  const augmentCombinationProbabilities = result.map((combination) => {
    let [percentage, ...augments] = combination;

    // remove the % sign from the percentage
    percentage = percentage.split("%").join("");

    // convert to integer
    percentage = parseInt(percentage, 10);

    // standardize augment names to lowercase
    augments = augments.map((augment) => augment.toLowerCase());

    return [percentage, ...augments];
  });

  const data = [];
  // expand augment combinations to remove weights
  for (const combination of augmentCombinationProbabilities) {
    const [probability, ...augments] = combination;
    for (let i = 0; i < probability; i++) {
      data.push(augments);
    }
  }

  return data;
}

/**
 * Gets the chance for a specific augment type.
 * Possible augment types are: "hero", "gold", "silver", "prismatic"
 * @param {string} augmentType the augment type
 */
function getChanceFor(previousAugments, augmentType) {
  // validate the arguments
  validate("AS", arguments);

  // validate the augment type
  if (!["hero", "gold", "silver", "prismatic"].includes(augmentType)) {
    throw new Error(`Invalid augment type: ${augmentType}`);
  }

  // filter out the augment combinations that don't match the previous augments
  let matchingData = [...augmentData];
  for (const [index, aug] of previousAugments.entries()) {
    matchingData = matchingData.filter((combo) => {
      const boo = combo[index] === aug;
      return boo;
    });
  }

  // count the number of times the augment type appears in the matching data
  // for the current augment index
  const currentAugIndex = previousAugments.length;
  const count = matchingData.reduce((acc, combo) => {
    if (combo[currentAugIndex] === augmentType) {
      acc++;
    }
    return acc;
  }, 0);

  // return the chance of the augment type being offered
  return count / matchingData.length;
}

export function getAugmentChances(previousAugments) {
  validate("A", arguments);

  return {
    hero: getChanceFor(previousAugments, "hero"),
    gold: getChanceFor(previousAugments, "gold"),
    silver: getChanceFor(previousAugments, "silver"),
    prismatic: getChanceFor(previousAugments, "prismatic"),
  };
}

async function init() {
  augmentData = parseRawData(rawData);
  console.log(augmentData);
  console.log(getChanceFor(["silver"], "gold"));
}

init();
