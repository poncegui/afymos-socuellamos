import "./normalize.css";

import { Route, Routes } from "react-router-dom";

import AvisoLegal from "./components/Footer/AvisoLegal";
import Chart from "./views/juntaDirectiva/Chart";
import ClubDeportivo from "./views/ClubDeportivo/ClubDeportivo";
import LandingView from "./views/Landing/LandingView";
import NewsDetail from "./views/News/NewsDetail";
import NewsDiaDiscapacidadPage from "./views/News/NewsDiaDiscapacidadPage";
import Nosotros from "./views/nosotros/Nosotros";
import NoticiaReforma from "./views/reforma/NoticiaReforma";
import PoliticaPrivacidad from "./components/Footer/PoliticaDePrivacidad";
import ProjectsCapacitacion from "./views/capacitacion/ProjectsCapacitacion";
import ProjectsCataVinos from "./views/Landing/components/ProjectsCataVino/ProjectsCataVinos";
import ProjectsCentroDia from "./views/centroDia/ProjecsCentroDia";
import ProjectsCentroDiversidad from "./views/instalaciones/ProjectsCentroDiversidad";
import ProjectsCrea from "./views/proyectoCrea/ProjectsCrea";
import ProjectsDiagnostico from "./views/valoracionDiagnostico/ProjectsDiagnostico";
import ProjectsDonaciones from "./views/Donaciones/ProjectsDonaciones";
import ProjectsFamilias from "./views/apoyoFamilias/ProjectsFamilias";
import ProjectsFormacion from "./views/formacion/ProjectsFormacion";
import ProjectsReconocimientoFundacion from "./views/ReconocimientoFundacionMapre/ReconocimientoFundacionMapre";
import ProjectsTerapias from "./views/terapias/ProjetsTerapias";
import ProjectsTransparencia from "./views/transparencia/ProjetsTransparencia";
import ProjectsVivienda from "./views/viviendasApoyo/ProjectsVivienda";
import ProjectsVoluntariado from "./views/voluntariado/ProjectsVoluntariado";
import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import VisorCrea from "./views/Landing/components/pdf/VisorCrea2024";
import VisorFormacion from "./views/Landing/components/pdf/VisorFormacion";
import VisorPdfCuentas from "./views/Landing/components/pdf/VisorPdfCuentas";
import VisorPdfOrganigrama from "./views/Landing/components/pdf/VisorPdfOrganigrama";

const App = () => {
  return (
    <>
      <ScrollToTop smooth />
      <Routes>
        <Route path="/reforma-centro-dia" element={<NoticiaReforma />} />
        <Route
          path="/reconocimiento-fundacion-mapfre"
          element={<ProjectsReconocimientoFundacion />}
        />
        <Route path="/transparencia" element={<ProjectsTransparencia />} />
        <Route path="/terapias" element={<ProjectsTerapias />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/apoyo-familias" element={<ProjectsFamilias />} />
        <Route path="/ocio-y-voluntariado" element={<ProjectsVoluntariado />} />
        <Route path="/viviendas-con-apoyo" element={<ProjectsVivienda />} />
        <Route path="/centro-de-dia" element={<ProjectsCentroDia />} />
        <Route path="/proyecto-crea" element={<ProjectsCrea />} />
        <Route path="/club-deportivo-afymos" element={<ClubDeportivo />} />
        <Route
          path="/valoracion-y-diagnostico"
          element={<ProjectsDiagnostico />}
        />
        <Route path="/donaciones" element={<ProjectsDonaciones />} />
        <Route
          path="/servicio-capacitacion"
          element={<ProjectsCapacitacion />}
        />
        <Route
          path="/instalaciones-centro-diversidad"
          element={<ProjectsCentroDiversidad />}
        />
        <Route
          path="/valoracion-y-diagnostico"
          element={<ProjectsDiagnostico />}
        />
        <Route path="/organigrama" element={<VisorPdfOrganigrama />} />
        <Route path="/cuentas-anuales" element={<VisorPdfCuentas />} />
        <Route path="/documentacion-formacion" element={<VisorFormacion />} />
        <Route path="/crea2024" element={<VisorCrea />} />
        <Route path="/formacion" element={<ProjectsFormacion />} />
        <Route path="/junta-directiva" element={<Chart />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/cata-vinos" element={<ProjectsCataVinos />} />
        <Route
          path="/noticias/dia-discapacidad-diputacion-cr-2025"
          element={<NewsDiaDiscapacidadPage />}
        />
        <Route path="/noticias/:slug" element={<NewsDetail />} />
        <Route path="/" element={<LandingView />} />
      </Routes>
      <ScrollToTop smooth />
    </>
  );
};

export default App;
