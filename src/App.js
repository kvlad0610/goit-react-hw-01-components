import user from "./user.json";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return <ProfileCard user={user} />;
};
export default App;
