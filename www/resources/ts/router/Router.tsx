// @NOTE: Import library functions.
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// @NOTE: Import custom functions.
import Home from '@pages/Home';
import NotFound from '@pages/errors/NotFound';
import TopBar from '@components/Layout/TopBar';

// @NOTE: Import misc.
import routes from '@constants/routes';

/**
 * Router component that defines all routes available inside
 * the application. It defines a set of public, private and
 * error routes. All routes defines in this component can be
 * accessed by user.
 *
 * @returns JSX.Element
 */
export default function Router() {
    return (
        <BrowserRouter>
            <TopBar />

            <Switch>
                {/* @NOTE: Public pages */}
                <Route path={routes.home.url} exact component={Home} />

                {/* @NOTE: Private pages. */}

                {/* @NOTE: Error pages. */}
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}
