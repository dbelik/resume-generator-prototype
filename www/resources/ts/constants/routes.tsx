// @NOTE: Import library functions.
import { IconSource } from '@shopify/polaris';
import { HomeMajor, SearchMajor, PlusMinor } from '@shopify/polaris-icons';

// @NOTE: Import custom functions.
// {...}

// @NOTE: Import misc.
// {...}

/**
 * IRoute - Define a route in the application. It's being used
 * in Router component to define available routes as well
 * as in navigational bar.
 */
interface IRoute {
    url: string;
    label: string;
    icon: IconSource;
}

/**
 * routes - Variable that holds all routes in the application.
 */
const routes = {
    home: { url: '/', label: 'Home', icon: HomeMajor } as IRoute,
    resumesBrowse: { url: '/browse', label: 'Browse', icon: SearchMajor } as IRoute,
    resumesCreate: { url: '/create', label: 'Create', icon: PlusMinor } as IRoute,
};

/**
 * mainRoutes - Variable that holds all routes that are supposed to be used
 * in main section of navigational bar.
 */
export const mainRoutes = [routes.home, routes.resumesBrowse, routes.resumesCreate];

export default routes;
