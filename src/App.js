/** @jsxImportSource @emotion/react */ // need to add this in every file? :(
import React from "react";
import { Button, Link, Typography, css } from "@mui/material";

import "./App.css";
import { AugmentPicker, BuyMeACoffee } from "./components";
import config from "./config";

/**
 * Design
 *
 * When no augments are selected, show all possible augments
 * When one augment is selected:
 *  - show the selected augment with it original probability
 *  - show all possible augments with their new probabilities
 * When two augments are selected:
 *  - show both selected augments with their original probabilities
 *  - show the final augment types with their probabilities
 * When all three augments are selected:
 *  - show all three selected augments with their original probabilities
 *  - show the probability of that three-augment combination (maybe always show this?)
 * When one or more augments are selected, show a button to reset the selection
 */

/**
 * TODO LIST
 * - [] Fix the size of the AugmentCard
 * - [] Animate changes tastefully, one piece at a time
 * - [] Optimize for mobile
 */

function App() {
  const [choices, setChoices] = React.useState([]);

  const onSelect = (index, choice) => {
    setChoices([...choices.slice(0, index), choice]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div
          css={css`
            flex: 1;
          `}
        />
        <Typography variant="h4">TFT Augment Probabilities</Typography>
        <div
          css={css`
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
          `}
        >
          <BuyMeACoffee />
        </div>
      </header>
      <body>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            flex: 1;
          `}
        >
          <AugmentPicker
            index={0}
            augments={choices}
            selectedAugment={choices[0]}
            onSelect={onSelect}
            css={css`
              margin: 0 3vh 3vh;
            `}
            round="2-1"
          />
          <AugmentPicker
            index={1}
            augments={choices}
            selectedAugment={choices[1]}
            onSelect={onSelect}
            css={css`
              margin: 0 3vh 3vh;
            `}
            round="3-2"
          />
          <AugmentPicker
            index={2}
            augments={choices}
            selectedAugment={choices[2]}
            onSelect={onSelect}
            css={css`
              margin: 0 3vh 3vh;
            `}
            round="4-2"
          />
        </div>
        <Button onClick={() => setChoices([])}>Reset</Button>
      </body>
      <footer className="App-footer">
        <Typography variant="body1" color="inherit">
          Patch: {config.PATCH}
        </Typography>
        <Link href={config.REPOSITORY_URL} color="inherit" variant="body1">
          Source Code: {config.REPOSITORY_URL}
        </Link>
      </footer>
    </div>
  );
}

export default App;
