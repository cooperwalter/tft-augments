/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@mui/material";
import * as analytics from "../modules/analytics";

const BuyMeACoffee = () => {
  React.useEffect(() => {
    const coffeeButton = document.getElementById("buy-me-a-coffee-button");
    coffeeButton.addEventListener("click", analytics.logBuyMeACoffeeClick);
    return () =>
      coffeeButton.removeEventListener("click", analytics.logBuyMeACoffeeClick);
  }, []);
  return (
    <a
      id="buy-me-a-coffee-button"
      href="https://www.buymeacoffee.com/cooperwalter"
      target="_blank"
      rel="noreferrer"
      css={css`
        height: 45px;
        width: 150px;
        &:hover {
          opacity: 0.8;
        }
      `}
    >
      <img
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        alt="Buy Me A Coffee"
        css={css`
          height: 45px;
          width: 150px;
        `}
      />
    </a>
  );
};
export default BuyMeACoffee;
