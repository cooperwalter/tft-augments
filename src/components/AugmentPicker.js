import { css } from "@mui/material";

import AugmentCard from "./AugmentCard.js";
import { getAugmentChances } from "../modules/augments/augments.js";

const AugmentPicker = ({ index, augments, selectedAugment, onSelect }) => {
  if (index > augments) {
    return null;
  }
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      {!selectedAugment ? (
        Object.entries(getAugmentChances(augments)).map(
          ([type, probability]) => (
            <AugmentCard
              onClick={() => onSelect(index, type)}
              type={type}
              probability={probability}
            />
          )
        )
      ) : (
        <AugmentCard
          type={selectedAugment}
          probability={
            getAugmentChances(augments.slice(0, index))[selectedAugment]
          }
        />
      )}
    </div>
  );
};

export default AugmentPicker;
