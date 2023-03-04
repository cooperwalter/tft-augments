/** @jsxImportSource @emotion/react */
import { css } from "@mui/material";

import AugmentCard from "./AugmentCard.js";
import { getAugmentChances } from "../modules/augments/augments.js";

const AugmentPicker = ({
  index,
  augments,
  selectedAugment,
  onSelect,
  css: cssProp,
  ...rest
}) => {
  if (index > augments.length) {
    return null;
  }
  return (
    <div
      css={css`
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        ${cssProp};
      `}
      {...rest}
    >
      {!selectedAugment ? (
        Object.entries(getAugmentChances(augments))
          .filter(([_type, probability]) => probability > 0)
          .map(([type, probability]) => (
            <AugmentCard
              key={`${type}-${probability}`}
              onClick={() => onSelect(index, type)}
              type={type}
              probability={probability}
              css={css`
                margin-bottom: 3vh;
              `}
            />
          ))
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
