import { formacionDataOne, formacionDataThree, formacionDataTwo } from './services/formacionData';
import { Content } from '../../components/Content/Content';
import PageHead from '../../components/SEO/PageHead';
import ProjectPageLayout from '../../components/Layouts/ProjectPageLayout';

const ProjectsFormacion = () => {
  const contentSections = [
    { data: formacionDataOne, inverse: true },
    { data: formacionDataThree, inverse: true },
  ];

  return (
    <>
      <PageHead
        title="Formación"
        description="Programas de formación integral en habilidades sociales, laborales y de autonomía personal para personas con discapacidad."
        keywords="formación, educación, habilidades, autonomía"
        canonical="https://afymos.org/formacion"
      />
      <ProjectPageLayout
        title="Centro de Formación"
        sectionTitle="Fomentamos la formación"
        showTitleSection
        contentSections={contentSections}
      >
        <Content {...formacionDataTwo} reverse />
      </ProjectPageLayout>
    </>
  );
};

export default ProjectsFormacion;
