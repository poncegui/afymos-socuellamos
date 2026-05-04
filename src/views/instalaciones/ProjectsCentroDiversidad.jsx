import {
  centroDiversidadDataOne,
  centroDiversidadDataThree,
  centroDiversidadDataTwo,
} from './services/centroDiversidadData';
import ProjectPageLayout from '../../components/Layouts/ProjectPageLayout';

const ProjectsCentroDiversidad = () => {
  const contentSections = [
    { data: centroDiversidadDataOne, inverse: true },
    { data: centroDiversidadDataTwo, reverse: true },
    { data: centroDiversidadDataThree, inverse: true },
  ];

  return (
    <ProjectPageLayout
      title="Nuestro Centro"
      sectionTitle="Centro de atención a la Diversidad Funcional"
      showTitleSection
      contentSections={contentSections}
    />
  );
};

export default ProjectsCentroDiversidad;
