/** @jsxImportSource @emotion/react */ // need to add this in every file? :(
import _ from "lodash";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

const AugmentCard = ({ onClick, children, type, probability, ...rest }) => {
  return (
    <Card>
      <CardActionArea onClick={onClick} {...rest}>
        <CardContent>
          <Typography>{_.upperFirst(type)}</Typography>
          <Typography>{probability * 100}%</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AugmentCard;
