// import PropTypes from 'prop-types';
import { Box } from "components/Box";
import { StatsTitle, InfoBox, Info } from "../statistics/statistics.styled";
import getRandomHexColor from "components/randomColors";

export default function Statistics({dataStat}) {
       return (
        <Box bg="background" width="250px" p={4} mt={3}>
            <StatsTitle>Upload stats</StatsTitle>
            <InfoBox>
                {dataStat.map(i => ( 
                    <Info  style={{background: getRandomHexColor()}} key={i.id}>
                        <span>{i.label}</span>
                        <span>{i.percentage}</span>
                    </Info>
                ))}
            </InfoBox>
        </Box>
    
    );
};