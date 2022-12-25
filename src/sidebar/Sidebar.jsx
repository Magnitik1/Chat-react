import './sidebar.css';
import NewUser from './NewUser/NewUser';
import Users from './Users/Users';

function Sidebar(props) {
    let showUsers=props.store.state.map(e=><Users name={e.name}/>);
    let a=0;
  return (
    <div className="Sidebar">
        <NewUser store={props.store}/>
        {showUsers}
    </div>
  );
}

export default Sidebar;
