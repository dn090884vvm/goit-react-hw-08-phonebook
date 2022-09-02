import {
  HomeWrapper,
  Section,
  Header1,
  Header2,
  Suggest,
  ListEl,
  List,
} from './home.styled';

export function Home() {
  return (
    <HomeWrapper>
      <Header1>Hi mate, we welcome you to our service page</Header1>
      <Section>
        <Header2>Your Phonebook is waiting for you</Header2>
        <Suggest>We suggest you the following:</Suggest>
        <List>
          <ListEl>Adding your personal contacts into the phonebook</ListEl>
          <ListEl>Removing the contacts you don't need anymore</ListEl>
          <ListEl>
            Make the accounts as much as you need (don't abuse it 😏)
          </ListEl>
        </List>

        <p>
          If you are ready. Let's go to register unless you haven't had an
          account already 💪. Follow the links on the top.
        </p>
      </Section>
    </HomeWrapper>
  );
}
