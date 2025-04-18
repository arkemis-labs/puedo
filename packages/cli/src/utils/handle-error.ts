// originally from https://github.com/shadcn-ui/ui/blob/cd9a55b76a66cccb222daf964a75fe018eeca434/packages/cli/src/utils/handle-error.ts

import { logger } from "./logger";

export function handleError(error: unknown) {
  if (typeof error === "string") {
    logger.error(error);
    process.exit(1);
  }

  if (error instanceof Error) {
    logger.error(error.message);
    process.exit(1);
  }

  logger.error("Something went wrong. Please try again.");
  process.exit(1);
}
