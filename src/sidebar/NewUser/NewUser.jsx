import style from './newUser.modul.css';

function NewUser(props) {
  let Add=()=>{
    props.store.dispatch("AddNewUser");
  }
  return (
    <div className={style.NewUser}>
        <button onClick={Add}>Add new User</button>
    </div>
  );
}

export default NewUser;
