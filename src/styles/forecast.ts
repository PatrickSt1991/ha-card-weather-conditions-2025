// src/styles/forecast.ts
import { css } from 'lit';

export const forecastStyle = css`
  .forecast {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 8px;
    margin-top: 1em;
  }

  .forecast .day {
    text-align: center;
    font-size: 0.85em;
    color: var(--secondary-text-color);
  }

  .forecast .date {
    font-weight: bold;
  }

  .forecast .condition {
    font-size: 0.9em;
    margin: 4px 0;
  }

  .forecast .high,
  .forecast .low {
    display: block;
  }
`;
