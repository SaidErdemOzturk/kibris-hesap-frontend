import { LOGIN, LOGOUT } from "../actions/userAction";
import { user } from "../initialValues/user";

const initialState = {
  user: user
}
export default function userReducer(state = initialState, { type, user }) {
  switch (type) {
    case LOGIN:
      localStorage.setItem("ePosta", `${user.ePosta}`);
      localStorage.setItem("firmaAdi", `${user.firmaAdi}`);
      localStorage.setItem("firmaUnvani", `${user.firmaUnvani}`);
      localStorage.setItem("token", `${user.token}`);
      return {
        ...state,
        user: user
      };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
}
