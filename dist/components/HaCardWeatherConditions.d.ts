import { LitElement } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import { CardConfig } from '../types';
export declare class HaCardWeatherConditions extends LitElement {
    hass?: HomeAssistant;
    private config?;
    private iconConfig?;
    private flags?;
    private terms?;
    private invalidConfig;
    static styles: import("lit").CSSResult[];
    setConfig(config: CardConfig): Promise<void>;
    getCardSize(): number;
    protected render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=HaCardWeatherConditions.d.ts.map