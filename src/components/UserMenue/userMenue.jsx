// import { Wrapper } from './user.styled';
// import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
import { Wrapper, Button } from './userMenue.styled';

export default function UserMenue() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <Wrapper>
      {name !== null && <p>{`Welcome,  ${name}`}</p>}

      <Button type="Button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
}
