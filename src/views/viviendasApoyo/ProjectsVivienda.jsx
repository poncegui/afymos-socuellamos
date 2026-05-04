import {
  viviendasDataOne,
  viviendasDataThree,
  viviendasDataTwo,
} from './services/viviendasData';
import ProjectPageLayout from '../../components/Layouts/ProjectPageLayout';

const ProjectsViviendas = () => {
  const contentSections = [
    { data: viviendasDataOne, inverse: true },
    { data: viviendasDataTwo, reverse: true },
    { data: viviendasDataThree, inverse: true },
  ];

  return (
    <ProjectPageLayout
      title="Viviendas"
      sectionTitle="Apoyo acceso viviendas"
      showTitleSection
      contentSections={contentSections}
    />
  );
};

export default ProjectsViviendas;
