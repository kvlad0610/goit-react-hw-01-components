import user from './user.json';
import statistics from './statistical-data.json';
import ProfileCard from './components/Profile/ProfileCard';
import Statistics from './components/Statistics/Statistics';
import './App.css';

const App = () => {
  return (
    <>
      <ProfileCard user={user} />
      <Statistics title={'Upload stats'} statistics={statistics} />
    </>
  );
};
export default App;
