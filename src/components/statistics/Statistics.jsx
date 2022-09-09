import PropTypes from 'prop-types';
import { Box } from "components/Box";
import { StatsTitle, InfoBox, Info } from "../statistics/statistics.styled";
import getRandomHexColor from "components/randomColors";

export default function Statistics({dataStat}) {
       return (
        <Box bg="background" width="250px" p={4} mt={3}>
            <StatsTitle>Upload stats</StatsTitle>
            <InfoBox>
                {dataStat.map(({id, label, percentage}) => ( 
                    <Info  style={{background: getRandomHexColor()}} key={id}>
                        <span>{label}</span>
                        <span>{percentage}</span>
                    </Info>
                ))}
            </InfoBox>
        </Box>
    
    );
};

Statistics.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number
};