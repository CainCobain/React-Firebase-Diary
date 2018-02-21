import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {BrowserRouter,Switch, Link, Route, Redirect} from 'react-router-dom';
import Header from './components/header/Header';
import Login from './components/Login';
import Loading from './components/Loading';
import NoteDetail from './components/NoteDetail';
import AuthComp from './components/AuthComp';

// create store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));



// provide the store to react 

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
    <Loading>
        <div>
            <Switch>
                <Route path="/login" component={Login} exact={true} />
                <AuthComp>
                    <Header />
                    <Route path="/" component={App} exact={true} />
                    <Route path="/:id" component={NoteDetail} exact={true} />
                </AuthComp>
            </Switch>
        </div>
    </Loading>
    </BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
