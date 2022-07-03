import PropTypes from 'prop-types';
import { Row, Column } from './transaction.styled';

export default function Transaction({ id, type, amount, currency}) {
    return (
       
    <Column>
      <Row>{type}</Row>
      <Row>{amount}</Row>
      <Row>{currency}</Row>
    </Column>
    )
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,

}
