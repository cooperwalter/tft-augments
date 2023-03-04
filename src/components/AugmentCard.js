/** @jsxImportSource @emotion/react */ // need to add this in every file? :(
import _ from "lodash";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  css,
} from "@mui/material";

const AugmentCard = ({ onClick, children, type, probability, ...rest }) => {
  return (
    <Card>
      <CardActionArea onClick={onClick} {...rest}>
        <CardContent
          css={css`
            width: 12.5vh;
            height: 12.5vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          `}
        >
          <Typography>{_.upperFirst(type)}</Typography>
          <Typography>{probability * 100}%</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AugmentCard;
