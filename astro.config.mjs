import { defineConfig } from "astro/config";

const [owner = "YOUR_GITHUB_USERNAME", repo = "ios-portfolio"] = (
  process.env.GITHUB_REPOSITORY ?? ""
).split("/");
const isUserSite = repo === `${owner}.github.io`;

export default defineConfig({
  site: `https://${owner}.github.io`,
  base: isUserSite ? "/" : `/${repo}`,
  integrations: []
});
