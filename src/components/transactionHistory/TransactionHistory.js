import PropTypes from 'prop-types';
import Transaction from "../transaction/Transaction";
import { Table, TitleRow } from './transactionHistory.styled';


export default function TransactionHistory ({ items}) {
    return (
<Table>
<thead>
    <tr>
      <TitleRow>Type</TitleRow>
      <TitleRow>Amount</TitleRow>
      <TitleRow>Currency</TitleRow>
    </tr>
  </thead>

  <tbody>
    {items.map(item => (
  <Transaction key={item.id}
   type={item.type}
   amount={item.amount}
   currency={item.currency}
   />     
    ))}
  
  </tbody>
</Table>

)}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }
    ))
}