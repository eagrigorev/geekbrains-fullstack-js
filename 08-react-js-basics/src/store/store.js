import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { messageReducer } from "./reducers/message-reducer";
import { profileReducer } from "./reducers/profile-reducer";
import { messageListReducer } from "./reducers/message-list-reducer";
import { chatListReducer } from "./reducers/chat-list-reducer";
import { chatIdReducer } from "./reducers/chat-id-reducer";
import { adviceSlipReducer } from "./reducers/advice-slip-reducer";
import { fbUserReducer } from "./reducers/fb-user-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    profile: profileReducer,
    message: messageReducer,
    messageList: messageListReducer,
    chatId: chatIdReducer,
    chatList: chatListReducer,
    adviceSlip: adviceSlipReducer,
    fbUser: fbUserReducer
});
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["profile", "adviceSlip"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)),
);
export const persistor = persistStore(store);