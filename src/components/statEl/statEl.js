import PropTypes from 'prop-types';
import { StatItem, StatUnit } from './statEl.styled';
import { getRandomHexColor } from '../../color';
export default function StatEl ({ label, percentage, id }) {
    return (
   
      <StatItem color = { getRandomHexColor() } >
   <span className="label">{label}</span>
   <StatUnit>{percentage}%</StatUnit>
      </StatItem>   
   
  )
}

StatEl.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
 
  
  
}