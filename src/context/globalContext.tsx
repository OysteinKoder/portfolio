import { createContext } from "react";

type CollapsedContextProps = {
  isCollapsed: boolean;
  toggleCollapsed: () => void;
};

export const CollapsedContext = createContext<CollapsedContextProps>({
  isCollapsed: false,
  toggleCollapsed: () => {},
});
