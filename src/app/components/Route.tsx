import { useContext } from "react";
import NavigationContext from "../context/nav";

const Route: React.FC<IRout> = ({ path, children }) => {
  const { currentPath } = useContext(NavigationContext);
  if (path === currentPath) {
    return <>{children}</>;
  }
  return null;
};

export default Route;
