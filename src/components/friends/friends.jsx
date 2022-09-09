import PropTypes from 'prop-types';
import { Box } from "components/Box";
import { FriendsListItem, IsOnlineChecker } from "../friends/friends.styled";

export default function FriendsList({ friends }) {
   
    return (
        <Box mt="30px" mb={5}>
            {friends.map(i => (
                <FriendsListItem key={i.id}>
                    <IsOnlineChecker isOnline={i.isOnline}></IsOnlineChecker>
                    <img src={i.avatar} alt="User avatar" width="48" />
                    <p>{i.name}</p>
                </FriendsListItem>
            ))}
        </Box>
    );   
    
};


FriendsList.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number
}