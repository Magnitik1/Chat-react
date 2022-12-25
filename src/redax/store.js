import userReducer from "./userReducer";
import messagesReducer from "./messagesReducer";
import msgs from "./msgs";

let store = {
  dispatch(type, text) {
    switch (type) {
      case "AddNewUser":
        userReducer();
        break;
      case "WriteMessage":
        messagesReducer(this.CurentUser+"\n"+text);
        break;
      default:
        break;
    }
  },
  CurentUser:"Alex",
  state: [
    {
      id: 1,
      name: "Steve",
    },
    {
      id: 2,
      name: "Alex",
    },
    {
      id: 3,
      name: "Bob",
    },
  ],
};

export default store;
