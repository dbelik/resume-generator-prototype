// @NOTE: Import library functions.
import { useCallback, useState } from 'react';
import { Frame, TopBar as PolarisTopBar } from '@shopify/polaris';

// @NOTE: Import custom functions.
import TopBarUser from '@components/Layout/TopBarUser';
import Navigation from '@components/Layout/Navigation';

// @NOTE: Import misc.
// {...}

/**
 * TopBar - Lays down navigational bar for the application. It
 * uses polaris' TopBar component.
 *
 * @returns JSX.Element
 */
export default function TopBar() {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    /**
     * Handles navigation menu toggle.
     */
    const handleNavigationToggle = useCallback(() => {
        setIsMenuOpen((isMenuOpen) => !isMenuOpen);
    }, []);

    /**
     * Toggles user menu.
     */
    const toggleIsUserMenuOpen = useCallback(() => {
        setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen);
    }, []);

    return (
        <Frame
            topBar={
                <PolarisTopBar
                    userMenu={
                        <TopBarUser isUserMenuOpen={isUserMenuOpen} toggleIsUserMenuOpen={toggleIsUserMenuOpen} />
                    }
                    showNavigationToggle
                    onNavigationToggle={handleNavigationToggle}
                />
            }
            navigation={<Navigation />}
            showMobileNavigation={isMenuOpen}
            onNavigationDismiss={handleNavigationToggle}
        ></Frame>
    );
}
