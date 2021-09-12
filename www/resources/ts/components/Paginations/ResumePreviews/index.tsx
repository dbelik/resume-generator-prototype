// @NOTE: Import library functions.
import { Fragment, useCallback } from 'react';
import { Layout } from '@shopify/polaris';
import PreviewItem from '@components/Images/PreviewItem';

// @NOTE: Import custom functions.
import ResumePreviewsVariants from './Variants';

// @NOTE: Import misc.
import { IResumesReducerState } from '@reducers/resumes';
import IResume from '@interfaces/IResume';

export interface IResumePreviewsProps {
    resumes: IResumesReducerState;
}

/**
 * ResumePreviews - lists paginated resumes.
 *
 * @returns JSX.Element
 */
export default function ResumePreviews({ resumes }: IResumePreviewsProps) {
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
    if (resumes.loading) {
        return <ResumePreviewsVariants />;
    }

    return (
        <Fragment>
            <Layout>{renderResumes()}</Layout>
        </Fragment>
    );
}
