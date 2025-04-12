import { HomeAssistant } from 'custom-card-helpers';
import { CardConfig, IconsConfig, ITerms } from '../types';
interface SummaryRenderOptions {
    hass: HomeAssistant;
    config: CardConfig;
    icons: IconsConfig;
    terms: ITerms;
}
export declare function renderSummary({ hass, config, icons, terms }: SummaryRenderOptions): import("lit-html").TemplateResult<1>;
export {};
//# sourceMappingURL=summary.d.ts.map