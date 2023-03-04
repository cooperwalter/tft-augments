/** @jsxImportSource @emotion/react */
import { css } from "@mui/material";

const BuyMeACoffee = () => {
  return (
    <a
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
