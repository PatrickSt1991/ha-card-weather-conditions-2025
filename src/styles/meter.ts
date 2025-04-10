// src/styles/meter.ts
import { css } from 'lit';

export const meterStyle = css`
  .meter {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 1em;
    font-size: 0.9em;
    color: var(--secondary-text-color);
  }

  .meter .value {
    font-weight: bold;
    color: var(--primary-text-color);
  }

  .meter .label {
    font-size: 0.8em;
  }
`;
