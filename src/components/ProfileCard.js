import Profile from "./Profile";
const ProfileCard = ({ user }) => (
  <Profile
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
  />
);
export default ProfileCard;
