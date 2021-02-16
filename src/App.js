import user from './user.json';
import statisticalData from './statistical-data.json';
import ProfileCard from './components/Profile/ProfileCard';
import Statistics from './components/Statistics/Statistics';
import Container from './components/Container/Container';
import Header from './components/Heder/Heder';
import './App.css';

const App = () => {
  return (
    <>
      <Header title={'Домашнее задание №1'} />
      <Container>
        <ProfileCard user={user} />
        <Statistics title={'Upload stats'} statistics={statisticalData} />
      </Container>
    </>
  );
};
export default App;
