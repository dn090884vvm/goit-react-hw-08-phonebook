// import { Wrapper } from './user.styled';
// import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
import { Wrapper, Button } from './userMenue.styled';

export default function UserMenue() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  // const token = useSelector(state => state.auth.token);
  // console.log(name);
  return (
    <Wrapper>
      {name !== null && <p>{`Welcome,  ${name}`}</p>}
      {/* <p>{`your token is ${token}`}</p> */}
      <Button type="Button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
}
