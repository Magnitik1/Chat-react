import Messages from "../Messages/Messages";
import msgs from "./msgs";

let messagesReducer = (text) => {
    msgs.push(text);
    // alert(msgs);
    console.log(msgs);
    // <Messages/>
};
  
export default messagesReducer;