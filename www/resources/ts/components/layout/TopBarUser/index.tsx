// @NOTE: Import library functions.
import { TopBar as PolarisTopBar } from '@shopify/polaris';
import { ArrowLeftMinor } from '@shopify/polaris-icons';

// @NOTE: Import custom functions.
// {...}

// @NOTE: Import misc.
// {...}

export interface ITopBarUserProps {
    isUserMenuOpen: boolean;
    toggleIsUserMenuOpen: () => void;
}

export default function TopBarUser({ toggleIsUserMenuOpen, isUserMenuOpen }: ITopBarUserProps) {
    return (
        <PolarisTopBar.UserMenu
            actions={[
                {
                    items: [{ content: 'Back to Shopify Plus', icon: ArrowLeftMinor }],
                },
                {
                    items: [{ content: 'Community forums' }],
                },
            ]}
            name="Scott"
            detail="Snow Devil"
            initials="S"
            open={isUserMenuOpen}
            onToggle={toggleIsUserMenuOpen}
        />
    );
}
