import {
  voluntariadoFive,
  voluntariadoFour,
  voluntariadoOne,
  voluntariadoSix,
  voluntariadoThree,
  voluntariadoTwo,
} from './services/voluntariadoData';
import ProjectPageLayout from '../../components/Layouts/ProjectPageLayout';

const ProjectsVoluntariado = () => {
  const contentSections = [
    { data: voluntariadoOne, inverse: true },
    { data: voluntariadoTwo, reverse: true },
    { data: voluntariadoThree, inverse: true },
    { data: voluntariadoFour, reverse: true },
    { data: voluntariadoFive, inverse: true },
    { data: voluntariadoSix, reverse: true },
  ];

  return (
    <ProjectPageLayout
      title="Servicio de Ocio y Voluntariado"
      sectionTitle="Nuestro programa de voluntariado"
      showTitleSection
      contentSections={contentSections}
    />
  );
};

export default ProjectsVoluntariado;
