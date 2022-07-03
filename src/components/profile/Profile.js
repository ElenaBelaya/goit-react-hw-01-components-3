import PropTypes from 'prop-types';
import { Image, BoxList, SpanEl, ProfileBox, UserName, UserTag, UserLocation, SpanIndex, UserIndex, ProfileDescription } from "./profile.styled";

export default function Profile( { username, tag, location, avatar, stats }) {
    return (
<ProfileBox>
  <ProfileDescription>

  <Image     
      src={avatar}
      alt="User avatar"
      className="avatar"   />     
    
    <UserName>{username}</UserName>
    <UserTag>@{tag}</UserTag>
    <UserLocation>{location}</UserLocation>

  </ProfileDescription>    
  
  <BoxList>
    <UserIndex>
      <SpanEl>Followers</SpanEl>
      <SpanIndex>{stats.followers}</SpanIndex>
    </UserIndex>
    <UserIndex>
       <SpanEl> Views</SpanEl>
       <SpanIndex>{stats.views}</SpanIndex>
    </UserIndex>
    <UserIndex>
       <SpanEl>Likes</SpanEl>
       <SpanIndex>{stats.likes}</SpanIndex>
    </UserIndex> 
  </BoxList>
 
</ProfileBox>
    )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,  
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
  
  
}