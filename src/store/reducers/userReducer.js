import LocalStorageService from "../../services/localStorageService";
import { LOGIN, LOGOUT } from "../actions/userAction";
import { user } from "../initialValues/user";

const initialState = {
  user: user
}
export default function userReducer(state = initialState, { type, user }) {
  switch (type) {
    case LOGIN:
      const localStorageService = new LocalStorageService()
      
      localStorageService.setItemWithTime("ePosta", `${user.ePosta}`,600);
      localStorageService.setItemWithTime("firmaAdi", `${user.firmaAdi}`,600);
      localStorageService.setItemWithTime("firmaUnvani", `${user.firmaUnvani}`,600);
      localStorageService.setItemWithTime("token", `${user.token}`,600);
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
