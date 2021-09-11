// @NOTE: Import library functions.
import { IconSource } from '@shopify/polaris';
import { HomeMajor, SearchMajor } from '@shopify/polaris-icons';

// @NOTE: Import custom functions.
// {...}

// @NOTE: Import misc.
// {...}

/**
 * Define a route in the application. It's being used
 * in Router component to define available routes as well
 * as in navigational bar.
 */
interface IRoute {
    url: string;
    label: string;
    icon: IconSource;
}

/**
 * Variable that holds all routes in the application.
 */
const routes = {
    home: { url: '/', label: 'Home', icon: HomeMajor } as IRoute,
    browse: { url: '/browse', label: 'Browse', icon: SearchMajor } as IRoute,
};

/**
 * Variable that holds all routes that are supposed to be used
 * in main section of navigational bar.
 */
export const mainRoutes = [routes.home, routes.browse];

export default routes;
