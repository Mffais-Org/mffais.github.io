import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    "/app-guide",
    "/legal/(privacy-policy|terms-and-conditions)",
    "/(en|bg|bn|ca|chi|cs|da|de|el|es-la|es|fi|fr|hi|hu|id|it|ja|ko|lt|mr|ms|nl|no|pl|pt-br|ro|ru|sk|sr|sv|th|tl|tr|uk|vi|zh)/:path*",
  ],
};
