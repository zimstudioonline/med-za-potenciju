import { makeRouteHandler } from "@keystatic/next/route-handler";

import keystaticConfig from "../../../../../keystatic.config";

/** Prima izmene iz admina i upisuje ih — lokalno u fajlove, na produkciji u GitHub. */
export const { POST, GET } = makeRouteHandler({ config: keystaticConfig });
