<!--
title: Adding PostHog to your app using open source analytics
description: Connect PostHog to the analytics library
pageTitle: PostHog
-->

# PostHog

This library exports the `posthog` plugin for the [`analytics`](https://www.npmjs.com/package/analytics) package & standalone methods for any project to use to make it easier to interact with [PostHog](https://www.posthog.com/).

This analytics plugin will load PostHog into your application.

## Installation

```bash
npm install analytics
npm install analytics-plugin-posthog
```

## How to use

```typescript
import Analytics from "analytics";
import posthog from "analytics-plugin-posthog";

const analytics = Analytics({
  app: "awesome-app",
  plugins: [
    posthog({
      token: "1234", // required
    }),
  ],
});
```
