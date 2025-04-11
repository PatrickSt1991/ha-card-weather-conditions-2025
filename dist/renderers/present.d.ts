import { HomeAssistant } from 'custom-card-helpers';
import { CardConfig, ITerms } from '../types';
interface PresentRenderOptions {
    hass: HomeAssistant;
    config: CardConfig;
    terms: ITerms;
}
export declare function renderPresent({ hass, config, terms }: PresentRenderOptions): import("lit-html").TemplateResult<1>;
export {};
//# sourceMappingURL=present.d.ts.map