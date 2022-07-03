import PropTypes from 'prop-types';
import Friend from '../friend/Friend';
import { FriendBox } from './friendList.styled';


export default function FriendList({ friends }) {
return (
    <FriendBox>
{friends.map((friend) => ( 
       <Friend key={friend.id}
        avatar={ friend.avatar}
        name={ friend.name}
        isOnline={ friend.isOnline}       
        />      
 
        ))} 
    </FriendBox> 

    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,        }
           
        ))}




