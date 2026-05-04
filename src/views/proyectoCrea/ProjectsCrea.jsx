import { creaDataOne, creaDataThree, creaDataTwo } from './services/creaData';
import CreaBlock from './components/CreaBlock';
import VideoCrea from './components/VideoCrea';
import ProjectPageLayout from '../../components/Layouts/ProjectPageLayout';

const ProjectsCrea = () => {
  return (
    <ProjectPageLayout title="Proyecto CREA 2026" contentSections={[]}>
      <CreaBlock {...creaDataOne} reverse />
      <CreaBlock {...creaDataThree} inverse />
      <CreaBlock {...creaDataTwo} reverse />
      <VideoCrea />
    </ProjectPageLayout>
  );
};

export default ProjectsCrea;
