// @NOTE: Import library functions.
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, MediaCard, Page, ResourceList } from '@shopify/polaris';

// @NOTE: Import custom functions.
import PreviewItem from '@components/Images/PreviewItem';

// @NOTE: Import misc.
import loadResumes from '@actions/resumes/list';
import { IRootStore } from '@store/index';
import IResume from '@interfaces/IResume';

/**
 * ResumesBrowse - lists available resume templates.
 *
 * @returns JSX.Element
 */
export default function ResumesBrowse() {
    // @NOTE: Misc hooks.
    const dispatch = useDispatch();
    const resumes = useSelector((state: IRootStore) => state.resumes);

    useEffect(() => {
        dispatch(loadResumes());
    }, []);

    // @NOTE: Closures.
    const renderResumes = useCallback(() => {
        return resumes.data.data.map((resume: IResume, key: number) => {
            return (
                <Layout.Section oneThird key={key}>
                    <PreviewItem
                        title={resume.title}
                        description={resume.description}
                        img={resume.image}
                        url={resume.url}
                    />
                </Layout.Section>
            );
        });
    }, [resumes]);

    // @NOTE: Render component.
    return (
        <Page title="All templates" divider>
            <Layout>{renderResumes()}</Layout>
        </Page>
    );
}
