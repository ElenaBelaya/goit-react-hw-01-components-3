import PropTypes from 'prop-types';
import { FriendItem, FriendStatus, FriendName } from '../friend/friend.styled';
export default function Friend({ avatar, name, isOnline, id }) {
  return (
    <FriendItem>
 <FriendStatus status={isOnline}>•{isOnline}</FriendStatus>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <FriendName>{name}</FriendName>
    </FriendItem>
 
  )
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  
}
