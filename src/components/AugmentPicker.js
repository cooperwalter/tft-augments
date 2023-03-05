/** @jsxImportSource @emotion/react */
import { Typography, css } from "@mui/material";
import { motion } from "framer-motion";

import AugmentCard from "./AugmentCard.js";
import { getAugmentChances } from "../modules/augments/augments.js";

const AugmentPicker = ({
  index,
  augments,
  selectedAugment,
  onSelect,
  round,
  css: cssProp,
  ...rest
}) => {
  augments = augments.slice(0, index);
  if (index > augments.length) {
    return null;
  }
  return (
    <motion.div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
      `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Typography
        variant="h5"
        css={css`
          margin-bottom: 1.5vh;
        `}
      >
        {round}
      </Typography>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          ${cssProp};
        `}
        {...rest}
      >
        {Object.entries(getAugmentChances(augments))
          .filter(([_type, probability]) => probability > 0)
          .filter(([type], i) => !selectedAugment || type === selectedAugment)
          .map(([type, probability], i, list) => (
            <AugmentCard
              key={`${type}-${probability}`}
              onClick={() => onSelect(index, type)}
              type={type}
              probability={probability}
              css={css`
                margin-bottom: ${i !== list.length - 1 ? "3vh" : "0px"};
              `}
            />
          ))}
      </div>
    </motion.div>
  );
};

export default AugmentPicker;
