import './materialUIInstall'
import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import theme from './theme'
import {store} from './store';
import {Provider} from 'react-redux';
import {ThemeProvider} from '@material-ui/styles'
import {SnackbarProvider} from 'notistack';
import App from './components/App'
import ReactDOM from 'react-dom'
import reducerProvider from './context'

ReactDOM.render(
    //react-router-dom make history global
    <reducerProvider>
        <Provider store={store}>

            <ThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={3}>
                    <App/>
                </SnackbarProvider>
            </ThemeProvider>
        </Provider>
    </reducerProvider>
    , document.getElementById('root'));
registerServiceWorker();
