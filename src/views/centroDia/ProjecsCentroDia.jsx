import {
  centroDiaDataOne,
  centroDiaDataThree,
  centroDiaDataTwo,
} from './services/centroDiaData';
import ProjectPageLayout from '../../components/Layouts/ProjectPageLayout';

const ProjectsCentroDia = () => {
  const contentSections = [
    { data: centroDiaDataOne, inverse: true },
    { data: centroDiaDataTwo, reverse: true },
    { data: centroDiaDataThree, inverse: true },
  ];

  return (
    <ProjectPageLayout
      title="Centro de Día"
      sectionTitle="Nuestro Centro de día"
      showTitleSection
      contentSections={contentSections}
    />
  );
};

export default ProjectsCentroDia;
