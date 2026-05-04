import {
  diagnosticoDataOne,
  diagnosticoDataThree,
  diagnosticoDataTwo,
} from './services/diagnosticoData';
import ProjectPageLayout from '../../components/Layouts/ProjectPageLayout';

const ProjectsDiagnostico = () => {
  const contentSections = [
    { data: diagnosticoDataOne, inverse: true },
    { data: diagnosticoDataTwo, reverse: true },
    { data: diagnosticoDataThree, inverse: true },
  ];

  return (
    <ProjectPageLayout
      title="Valoración y diagnostico"
      contentSections={contentSections}
    />
  );
};

export default ProjectsDiagnostico;
