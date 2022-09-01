import { Link } from './Navigation.styled';

export default function Navigation() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
    </div>
  );
}
