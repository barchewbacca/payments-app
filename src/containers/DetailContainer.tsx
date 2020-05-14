import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Detail from 'pages/Payments/PaymentDetail';
import { State } from 'reducers';
import { ActionTypes, fetchPayment, fetchRefunds } from 'actions';
import { MatchProps } from 'ts-models';

const mapStateToProps = (
  { app: { payments, refunds, error } }: State,
  { match }: MatchProps
) => {
  const payment = payments.find(item => item.id === match.params.id);

  return {
    payment,
    customer: payment && payment.customer,
    refunds: refunds || [],
    error,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<State, null, ActionTypes>,
  {
    match: {
      params: { id },
    },
  }: MatchProps
) => ({
  fetchPayment: () => dispatch(fetchPayment(id)),
  fetchRefunds: () => dispatch(fetchRefunds(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
