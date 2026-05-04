import NavBarViews from '../Header/NavBarViews';
import ScrollToTop from '../ScrollToUp';
import { ContentProjects } from '../Content/ContentProjects';
import PartnersList from '../Partners/PartnerList';
import TitleSection from '../TitleSection';
import {
  colaboradoresData,
  partnersData,
} from '../Partners/services/partnersListData';

/**
 * Layout reutilizable para páginas de proyectos
 * Elimina código duplicado en ~15 vistas diferentes
 *
 * @param {string} title - Título del NavBar
 * @param {string} sectionTitle - Título de la sección (opcional)
 * @param {boolean} showTitleSection - Mostrar TitleSection (default: false)
 * @param {React.Component} IntroComponent - Componente de introducción personalizado (opcional)
 * @param {Array} contentSections - Array de objetos con datos para ContentProjects
 * @param {boolean} showPartners - Mostrar secciones de partners (default: true)
 * @param {React.ReactNode} children - Contenido adicional personalizado
 */
const ProjectPageLayout = ({
  title,
  sectionTitle,
  showTitleSection = false,
  IntroComponent,
  contentSections = [],
  showPartners = true,
  children
}) => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title={title} />

      {/* Intro personalizado o TitleSection */}
      {IntroComponent && <IntroComponent />}
      {showTitleSection && sectionTitle && (
        <TitleSection title={sectionTitle} size />
      )}

      {/* ContentProjects dinámicos */}
      {contentSections.map((section, index) => (
        <ContentProjects
          key={index}
          {...section.data}
          inverse={section.inverse}
          reverse={section.reverse}
        />
      ))}

      {/* Contenido personalizado adicional */}
      {children}

      {/* Partners - siempre al final */}
      {showPartners && (
        <>
          <PartnersList
            size
            marginBottom
            data={colaboradoresData}
            title="Socios Colaboradores"
          />
          <PartnersList
            size
            inverse
            marginBottom
            data={partnersData}
            title="Cofinanciaciones"
          />
        </>
      )}
    </>
  );
};

export default ProjectPageLayout;
