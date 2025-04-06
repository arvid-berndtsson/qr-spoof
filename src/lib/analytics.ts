import { env } from "./env";

export const analyticsConfig = {
  websiteId: env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
  src: `${env.NEXT_PUBLIC_UMAMI_URL}/script.js`,
  dataAutoTrack: true,
  dataDoNotTrack: true,
  dataCache: true,
};
