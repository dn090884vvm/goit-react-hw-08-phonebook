import { useState } from 'react';
import { authOperations } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>name</p>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <p>email</p>
      <input type="email" name="email" value={email} onChange={handleChange} />
      <p>password</p>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <button>Register</button>
    </form>
  );
}
