import { connect } from 'react-redux';
import { ActionTypes, fetchPayments } from 'actions/index';
import Overview from 'pages/Payments/PaymentsOverview';
import { State } from 'reducers';
import { ThunkDispatch } from 'redux-thunk';

const mapStateToProps = ({ app: { payments, error } }: State) => ({
  payments,
  error,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<State, null, ActionTypes>
) => ({
  fetchPayments: () => dispatch(fetchPayments()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
