import { HomeAssistant } from 'custom-card-helpers';
import { CardConfig, ITerms } from '../types';
interface AirQualityRenderOptions {
    hass: HomeAssistant;
    config: CardConfig;
    terms: ITerms;
}
export declare function renderAirQualities({ hass, config }: AirQualityRenderOptions): import("lit-html").TemplateResult<1>;
export {};
//# sourceMappingURL=airQuality.d.ts.map