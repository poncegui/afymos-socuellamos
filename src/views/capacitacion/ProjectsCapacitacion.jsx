import { capacitacionDataOne, capacitacionDataTwo } from './services/capacitacionData';
import { partnersData } from '../../components/Partners/services/partnersListData';
import ProjectPageLayout from '../../components/Layouts/ProjectPageLayout';

const ProjectsCapacitacion = () => {
  const contentSections = [
    { data: capacitacionDataOne, inverse: true },
    { data: capacitacionDataTwo, reverse: true },
  ];

  const fondosEuropeosLogo = partnersData.filter(
    partner => partner.name === 'Fondos Europeos'
  );

  return (
    <ProjectPageLayout
      title="Servicio de Capacitación"
      sectionTitle="Programa habilitación laboral"
      showTitleSection
      contentSections={contentSections}
      footerData={fondosEuropeosLogo}
      footerTitle="Cofinanciado por"
    />
  );
};

export default ProjectsCapacitacion;
