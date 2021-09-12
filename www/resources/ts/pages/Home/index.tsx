// @NOTE: Import library functions.
import { Banner, Button, Layout, Page } from '@shopify/polaris';

// @NOTE: Import custom functions.
// {...}

// @NOTE: Import misc.
// {...}

/**
 * Home - Home page component. It gives general information about
 * website.
 *
 * @returns JSX.Element
 */
export default function Home() {
    return (
        <Page title="Welcome">
            <Layout>
                <Layout.Section>
                    <Banner title="Get a discount">
                        <p>You can save up to 70% for 1 year subscription today</p>
                    </Banner>
                </Layout.Section>
                <Layout.Section>
                    <p>
                        Use professional field-tested resume templates that follow the exact ‘resume rules’ employers
                        look for. Easy to use and done within minutes - try now for free!
                    </p>
                    <Button primary>Create resume</Button>
                </Layout.Section>
            </Layout>
        </Page>
    );
}
