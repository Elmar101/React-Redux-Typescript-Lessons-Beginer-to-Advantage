import { connect } from 'react-redux';
import './App.scss';
import { IUSER } from './models/user';
import { updateUserAction } from './redux/actions/user-action/userAction';
import { Dispatch, RootState } from './redux/store';
interface Props {
  user: {username: string}
  userDispatch?: (user: IUSER) => {
    type: string;
    payload: {
        username: string;
    };
  }
}
function App(props: Props) {
  return (
    <div className="App">
      {props.user.username}
      <button onClick={()=> props.userDispatch && props.userDispatch({username: "Mehmet"}) }> Change User Name</button>
    </div>
  );
}
const mapStateToProps = (store: RootState) => {
  return {
    user: store.user
  }
};

const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    userDispatch: (user: IUSER) => dispatch(updateUserAction(user))
  }
}


export default connect(mapStateToProps,mapStateToDispatch)(App);
