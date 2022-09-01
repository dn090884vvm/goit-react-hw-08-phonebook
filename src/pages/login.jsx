import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>email</p>
      <input type="email" name="email" value={email} onChange={handleChange} />
      <p>password</p>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <button>Login</button>
    </form>
  );
}
