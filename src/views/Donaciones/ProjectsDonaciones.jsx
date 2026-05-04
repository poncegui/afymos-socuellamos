import { donacionDataOne } from './services/donacionesData';
import ProjectPageLayout from '../../components/Layouts/ProjectPageLayout';

const ProjectsDonaciones = () => {
  const contentSections = [
    { data: donacionDataOne, inverse: true },
  ];

  return (
    <ProjectPageLayout
      title="Donaciones"
      sectionTitle="Crecemos contigo"
      showTitleSection
      contentSections={contentSections}
    />
  );
};

export default ProjectsDonaciones;
