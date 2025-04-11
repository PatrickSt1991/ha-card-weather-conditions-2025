// src/styles/summary.ts
import { css } from 'lit';
export const summaryStyle = css `
  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    text-align: center;
    color: var(--primary-text-color);
  }

  .summary .location {
    font-size: 1.2em;
    font-weight: bold;
  }

  .summary .description {
    font-size: 1em;
    font-style: italic;
    margin-top: 0.25em;
    color: var(--secondary-text-color);
  }

  .summary .icon {
    width: 48px;
    height: 48px;
    margin: 0.5em 0;
  }

  .summary .temp {
    font-size: 2.5em;
    font-weight: 500;
  }

  .summary .temp span.unit {
    font-size: 0.6em;
    vertical-align: super;
    margin-left: 0.1em;
  }

  .summary .state {
    font-size: 1em;
    margin-top: 0.25em;
    text-transform: capitalize;
  }
`;
//# sourceMappingURL=summary.js.map