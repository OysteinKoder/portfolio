import { createContext } from "react";

interface CollapsedContextProps {
  isCollapsed: boolean;
  toggleCollapsed: () => void;
}

export const CollapsedContext = createContext<CollapsedContextProps>({
  isCollapsed: false,
  toggleCollapsed: () => {},
});
