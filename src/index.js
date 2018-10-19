import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ValidatedLoginForm from './Form/LoginForm';
import ValidatedRegisterForm from './Form/RegisterForm';
import AddLeaveForm from './Form/AddLeaveForm';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import {login, register, addLeave} from "./submitForm";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./Redux/Store";

/* ReactDOM.render(<App />, document.getElementById('root')); */

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <div>
                <div style={{ padding: 15 }}>
                    <ValidatedLoginForm onSubmit={login}/>
                </div>
                <div style={{ padding: 15 }}>
                    <ValidatedRegisterForm onSubmit={register}/>
                </div>
                <div style={{ padding: 15 }}>
                    <AddLeaveForm onSubmit={addLeave}/>
                </div>
            </div>
        </PersistGate>
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
