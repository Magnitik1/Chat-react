import style from './users.modul.css';

function Users(props) {
    // props.state();
  return (
    <div className={style.Users}>
        <p>{props.name}</p>
    </div>
  );
}

export default Users;
