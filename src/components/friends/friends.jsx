import PropTypes from 'prop-types';
import { Box } from "components/Box";
import { FriendsListItem, IsOnlineChecker } from "../friends/friends.styled";

export default function FriendsList({ friends }) {
   
    return (
        <Box mt="30px" mb={5}>
            {friends.map(({id, isOnline, avatar, name}) => (
                <FriendsListItem key={id}>
                    <IsOnlineChecker isOnline={isOnline}></IsOnlineChecker>
                    <img src={avatar} alt="User avatar" width="48" />
                    <p>{name}</p>
                </FriendsListItem>
            ))}
        </Box>
    );   
    
};


FriendsList.propTypes = {
     friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }),
  ),
};

   