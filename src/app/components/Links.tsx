import { useContext } from 'react';
import NavigationContext from '../context/nav';

const Link: React.FC <ILink>= ({to, children}) => {
  const { navigate } = useContext(NavigationContext);


  const handleClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    navigate(to);
  };

  return <a onClick={handleClick}>{children}</a>;
}

export default Link;
