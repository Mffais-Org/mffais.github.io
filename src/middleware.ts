import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    "/app-guide",
    "/legal/(privacy-policy|terms-and-conditions)",
    "/(en|de)/:path*",
  ],
};
