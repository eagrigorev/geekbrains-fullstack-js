import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./firebase";
import reportWebVitals from "./reportWebVitals";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { theme } from "./components/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor} >
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();