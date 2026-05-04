import { capacitacionDataOne, capacitacionDataTwo } from './services/capacitacionData';
import ProjectPageLayout from '../../components/Layouts/ProjectPageLayout';

const ProjectsCapacitacion = () => {
  const contentSections = [
    { data: capacitacionDataOne, inverse: true },
    { data: capacitacionDataTwo, reverse: true },
  ];

  return (
    <ProjectPageLayout
      title="Servicio de Capacitación"
      sectionTitle="Programa habilitación laboral"
      showTitleSection
      contentSections={contentSections}
    />
  );
};

export default ProjectsCapacitacion;
