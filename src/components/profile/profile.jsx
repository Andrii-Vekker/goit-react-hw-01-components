import image from "./logo192.png";
import PropTypes from 'prop-types';
import { Box } from "components/Box";
import { Card, UserPhoto, Stats, StatsItem } from "./profile.styled";



export default function Profile({username, tag, location, avatar=image, stats}) {
    return (
        <Box bg="background" width="200px" p={4}>
            <Card>
                <UserPhoto
                    src={avatar}
                    alt="UserPhoto"
                />
                <p>{username}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </Card>

            <Stats>
                <StatsItem>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </StatsItem>
                <StatsItem>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </StatsItem>
                <StatsItem>
                    <span >Likes</span>
                    <span>{stats.likes}</span>
                </StatsItem>
            </Stats>
        </Box>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    }) 
};