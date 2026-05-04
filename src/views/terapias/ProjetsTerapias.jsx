import {
  auditivaPsicologiaData,
  fisioterapiaData,
  introduccionData,
  logopediaData,
  neuroPsicologiaData,
  psicoPedagogíaData,
  psicologiaData,
  terapiaOcupacionalData,
  visualPedagogíaData,
} from './services/terapiasData';
import ProjectPageLayout from '../../components/Layouts/ProjectPageLayout';
import ProjectsIntro from './components/ProjectsIntro';

const ProjectsTerapias = () => {
  const contentSections = [
    { data: introduccionData, reverse: true },
    { data: logopediaData, inverse: true },
    { data: fisioterapiaData, reverse: true },
    { data: terapiaOcupacionalData, inverse: true },
    { data: psicoPedagogíaData, reverse: true },
    { data: neuroPsicologiaData, inverse: true },
    { data: auditivaPsicologiaData, reverse: true },
    { data: visualPedagogíaData, inverse: true },
    { data: psicologiaData, reverse: true },
  ];

  return (
    <ProjectPageLayout
      title="Servicio de Terapia"
      IntroComponent={ProjectsIntro}
      contentSections={contentSections}
    />
  );
};

export default ProjectsTerapias;
