import "./textLine.css";
import { useState } from "react";
import Messages from "../Messages/Messages";

function TextLine(props) {
  let text1="";
  let SendMSG=()=>{
    props.store.dispatch("WriteMessage", text1);
    settest(true);
  }
  let [testname, settest]=useState();
  return (
    <div className="TextLine">
      <form>
          <input className="textline" placeholder="Write your message..." id="mytext" onChange={(e) => text1=e.target.value}/>
          <input className="sendB" type="submit" value="Send" onClick={SendMSG} />
      </form>
      {!testname ? null :<Messages/>}
    </div>
  );
}

export default TextLine;
