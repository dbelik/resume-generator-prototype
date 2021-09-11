// @NOTE: Import library functions.
import { ThemeConfig } from '@shopify/polaris/dist/types/latest/src/utilities/theme';

// @NOTE: Import custom functions.
// {...}

// @NOTE: Import misc.
import routes from '@constants/routes';

const dark: ThemeConfig = {
    colorScheme: 'dark',
    logo: {
        width: 240,
        url: routes.home.url,
        accessibilityLabel: 'Resume generator',
        topBarSource: '/images/logo/dark.svg',
    },
};

export default dark;
