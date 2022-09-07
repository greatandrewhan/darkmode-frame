import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

export default function Content() {
  const { isDark } = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
      }}
    >
      <h1>Hello {user}!, Have a great day! =P</h1>
    </div>
  );
}
