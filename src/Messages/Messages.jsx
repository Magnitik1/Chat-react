import './messages.css';
import Text from './Text';
import msgs from "../redax/msgs";

function Messages(props) {
  let myText=msgs.map((e)=><Text text2={e}/>)
  // alert(myText);
  return (
    <div className="Messages">
      {myText}
    </div>
  );
}

export default Messages;
