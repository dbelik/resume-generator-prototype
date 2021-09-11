// @NOTE: Import library functions.
import { Navigation as PolarisNavigation } from '@shopify/polaris';

// @NOTE: Import custom functions.
// {...}

// @NOTE: Import misc.
import { mainRoutes } from '@constants/routes';

/**
 * Defines navigational component for mobile devices.
 *
 * @returns JSX.Element
 */
export default function Navigation() {
    return (
        <PolarisNavigation location="/">
            <PolarisNavigation.Section items={mainRoutes} />
        </PolarisNavigation>
    );
}
