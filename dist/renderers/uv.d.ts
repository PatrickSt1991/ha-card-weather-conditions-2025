import { HomeAssistant } from 'custom-card-helpers';
import { CardConfig, ITerms } from '../types';
interface UVRenderOptions {
    hass: HomeAssistant;
    config: CardConfig;
    terms: ITerms;
}
export declare function renderUv({ hass, config }: UVRenderOptions): import("lit-html").TemplateResult<1>;
export {};
//# sourceMappingURL=uv.d.ts.map