import { familyDataOne, familyDataTwo } from './services/familiasData';
import ProjectPageLayout from '../../components/Layouts/ProjectPageLayout';

const ProjectsFamilias = () => {
  const contentSections = [
    { data: familyDataOne, inverse: true },
    { data: familyDataTwo, reverse: true },
  ];

  return (
    <ProjectPageLayout
      title="Servicio de atención a familias"
      sectionTitle="Apoyo a familiares"
      showTitleSection
      contentSections={contentSections}
    />
  );
};

export default ProjectsFamilias;
