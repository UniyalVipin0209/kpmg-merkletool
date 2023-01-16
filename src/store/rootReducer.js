import { combineReducers } from "redux";
import login from "./Login/reducer";
import admin from "./Admin/reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["admin", "login"],
};

const authPersist_admin_Config = { key: "admin", storage: sessionStorage };
const authPersist_login_Config = { key: "login", storage: sessionStorage };

const rootReducer = combineReducers({
  //key: value
  admin: persistReducer(authPersist_admin_Config, admin),
  login: persistReducer(authPersist_login_Config, login),
});
export default persistReducer(persistConfig, rootReducer);

// export default combineReducers({
//     login,
//     admin
// });
