import PropTypes from 'prop-types';
import StatEl from '../statEl/statEl';
import { SectionStat, StatList, SectionTitle } from './statistics.styled';


export default function Statistics ({ title, stats }) {
    return (
      <SectionStat>
  {title && (
        <SectionTitle>{title}</SectionTitle>
      )}    
  
    <StatList>
    {stats.map(stat => (
      
        <StatEl key={stat.id}
        label={stat.label}
        percentage={stat.percentage}
          />
      ))}
    </StatList>    
    
      </SectionStat>  
 
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    }))

}