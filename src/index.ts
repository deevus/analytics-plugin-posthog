import { AnalyticsInstance, AnalyticsPlugin } from "analytics";
import { posthog } from "posthog-js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Metadata = Record<string, any>;

export interface PostHogPluginConfig {
  token: string;
  apiHost?: string;
}

interface Params {
  payload: {
    event: string;
    userId: string;
    properties: Metadata;
    traits: Metadata;
  };
  config: PostHogPluginConfig;
  instance: AnalyticsInstance;
}

export interface PostHogPluginBrowserInstance {
  conversion(conversion_id: string): void;
}

const posthogPlugin = (config: PostHogPluginConfig): AnalyticsPlugin => {
  return {
    name: "posthog",
    config,

    initialize({ config }: Params): void {
      if (!config.token) {
        throw new Error("No PostHog project API key defined");
      }

      posthog.init(config.token, {
        api_host: config.apiHost ?? "https://us.posthog.com",
        autocapture: false,
      });
    },

    page: ({ payload }: Params) => {
      posthog.capture("$pageview", payload.properties);
    },

    track: ({ payload }: Params) => {
      posthog.capture(payload.event, payload.properties);
    },

    identify: ({ payload }: Params) => {
      posthog.identify(payload.userId, payload.traits);
    },

    loaded() {
      return posthog.__loaded;
    },
  };
};

export default posthogPlugin;
