import { createContext } from "react";

export type ContactActions = { talk: () => void; booking: () => void };

export const OverlayContext = createContext<ContactActions>({
  talk: () => undefined,
  booking: () => undefined,
});
