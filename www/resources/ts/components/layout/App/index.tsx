// @NOTE: Import library functions.
import { AppProvider } from '@shopify/polaris';
import { Provider } from 'react-redux';
import { Link } from 'react-router-dom';

// @NOTE: Import custom functions.
import Router from '@router/Router';
import RouterLink from '@components/Links/RouterLink';

// @NOTE: Import misc.
import darkTheme from '@theme/dark';
import store from '@store/index';

/**
 * App - Create App component that will create project's theme, redux
 * and other providers.
 *
 * @returns {JSX.Element}
 */
export default function App() {
    return (
        <Provider store={store}>
            <AppProvider i18n={{}} theme={darkTheme} linkComponent={RouterLink}>
                <Router />
            </AppProvider>
        </Provider>
    );
}
