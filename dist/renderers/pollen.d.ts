import { HomeAssistant } from 'custom-card-helpers';
import { CardConfig, ITerms } from '../types';
interface PollenRenderOptions {
    hass: HomeAssistant;
    config: CardConfig;
    terms: ITerms;
}
export declare function renderPollens({ hass, config }: PollenRenderOptions): import("lit-html").TemplateResult<1>;
export {};
//# sourceMappingURL=pollen.d.ts.map