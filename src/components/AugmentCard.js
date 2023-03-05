/** @jsxImportSource @emotion/react */ // need to add this in every file? :(
import _ from "lodash";
import { motion } from "framer-motion";

import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  css,
} from "@mui/material";
import config from "../config";

const AugmentCard = ({ onClick, children, type, probability, ...rest }) => {
  const color = config.AUGMENT_COLORS[type];
  return (
    <motion.div layout animate={{ opacity: 1 }}>
      <Card {...rest}>
        <CardActionArea onClick={onClick}>
          <CardContent
            css={css`
              width: 12.5vh;
              height: 12.5vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              background-color: ${color};
            `}
          >
            <Typography
              css={css`
                color: white;
                font-weight: bold;
              `}
            >
              {_.upperFirst(type)}
            </Typography>
            <Typography
              css={css`
                color: white;
                font-weight: bold;
              `}
            >
              {Math.round(probability * 100).toFixed(0)}%
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </motion.div>
  );
};

export default AugmentCard;
