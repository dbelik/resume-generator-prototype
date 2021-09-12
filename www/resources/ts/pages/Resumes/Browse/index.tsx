// @NOTE: Import library functions.
import { Layout, MediaCard, Page, ResourceList } from '@shopify/polaris';

// @NOTE: Import custom functions.
import PreviewItem from '@components/Images/PreviewItem';

// @NOTE: Import misc.
// {...}

/**
 * ResumesBrowse - lists available resume templates.
 *
 * @returns JSX.Element
 */
export default function ResumesBrowse() {
    // @NOTE: Render component.
    return (
        <Page title="All templates" divider>
            <Layout>
                <Layout.Section oneThird>
                    <PreviewItem
                        title="First"
                        description="First card"
                        img="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                        url="/create/"
                    />
                </Layout.Section>
                <Layout.Section oneThird>
                    <PreviewItem
                        title="Second"
                        description="Second card"
                        img="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                        url="/create/"
                    />
                </Layout.Section>
                <Layout.Section oneThird>
                    <PreviewItem
                        title="Third"
                        description="Third card"
                        img="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                        url="/create/"
                    />
                </Layout.Section>
            </Layout>
        </Page>
    );
}
