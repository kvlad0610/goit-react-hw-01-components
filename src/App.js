import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import transactions from './components/TransactionHistory/transactions.json';
import friends from './components/Friends/friends.json';
import ProfileCard from './components/Profile/ProfileCard';
import Statistics from './components/Statistics/Statistics';
import Container from './components/Container/Container';
import Header from './components/Heder/Heder';
import FriendList from './components/Friends/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import './App.css';

const App = () => {
  return (
    <>
      <Header title={'Домашнее задание №1'} />
      <Container>
        <ProfileCard user={user} />
        <Statistics title={'Upload stats'} statistics={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
};
export default App;
