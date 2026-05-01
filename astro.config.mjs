import { defineConfig } from "astro/config";

const [owner = "YOUR_GITHUB_USERNAME", repo = "ios-portfolio"] = (
  process.env.GITHUB_REPOSITORY ?? ""
).split("/");
const isUserSite = repo === `${owner}.github.io`;
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: `https://${owner}.github.io`,
  base: isGitHubActions ? (isUserSite ? "/" : `/${repo}`) : "/",
  integrations: []
});
