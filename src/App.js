import "./normalize.css";

import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import ScrollStepper from "./components/ScrollStepper";
import CookieBanner from "./components/CookieBanner/CookieBanner";
import Footer from "./components/Footer/Footer";

/* ── Lazy-loaded routes ──────────────────────────────────────────────────── */
const LandingView                    = lazy(() => import("./views/Landing/LandingView"));
const Nosotros                       = lazy(() => import("./views/nosotros/Nosotros"));
const ProjectsTerapias               = lazy(() => import("./views/terapias/ProjetsTerapias"));
const ProjectsFamilias               = lazy(() => import("./views/apoyoFamilias/ProjectsFamilias"));
const ProjectsVoluntariado           = lazy(() => import("./views/voluntariado/ProjectsVoluntariado"));
const ProjectsVivienda               = lazy(() => import("./views/viviendasApoyo/ProjectsVivienda"));
const ProjectsCentroDia              = lazy(() => import("./views/centroDia/ProjecsCentroDia"));
const ProjectsCrea                   = lazy(() => import("./views/proyectoCrea/ProjectsCrea"));
const ClubDeportivo                  = lazy(() => import("./views/ClubDeportivo/ClubDeportivo"));
const ProjectsDiagnostico            = lazy(() => import("./views/valoracionDiagnostico/ProjectsDiagnostico"));
const ProjectsDonaciones             = lazy(() => import("./views/Donaciones/ProjectsDonaciones"));
const ProjectsCapacitacion           = lazy(() => import("./views/capacitacion/ProjectsCapacitacion"));
const ProjectsCentroDiversidad       = lazy(() => import("./views/instalaciones/ProjectsCentroDiversidad"));
const ProjectsFormacion              = lazy(() => import("./views/formacion/ProjectsFormacion"));
const Chart                          = lazy(() => import("./views/juntaDirectiva/Chart"));
const PoliticaPrivacidad             = lazy(() => import("./components/Footer/PoliticaDePrivacidad"));
const AvisoLegal                     = lazy(() => import("./components/Footer/AvisoLegal"));
const ProjectsCataVinos              = lazy(() => import("./views/Landing/components/ProjectsCataVino/ProjectsCataVinos"));
const NewsDetail                     = lazy(() => import("./views/News/NewsDetail"));
const NewsDiaDiscapacidadPage        = lazy(() => import("./views/News/NewsDiaDiscapacidadPage"));
const ProjectsReconocimientoFundacion= lazy(() => import("./views/ReconocimientoFundacionMapre/ReconocimientoFundacionMapre"));
const ProjectsTransparencia          = lazy(() => import("./views/transparencia/ProjetsTransparencia"));
const NoticiaReforma                 = lazy(() => import("./views/reforma/NoticiaReforma"));
const VisorPdfOrganigrama            = lazy(() => import("./views/Landing/components/pdf/VisorPdfOrganigrama"));
const VisorPdfCuentas                = lazy(() => import("./views/Landing/components/pdf/VisorPdfCuentas"));
const VisorFormacion                 = lazy(() => import("./views/Landing/components/pdf/VisorFormacion"));
const VisorCrea                      = lazy(() => import("./views/Landing/components/pdf/VisorCrea2024"));

/* ── Fallback mientras carga cada ruta ──────────────────────────────────── */
const PageLoader = () => (
  <div
    role="status"
    aria-live="polite"
    aria-label="Cargando página"
    style={{
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <span className="sr-only">Cargando…</span>
    <svg
      aria-hidden="true"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      style={{ animation: "spin 1s linear infinite" }}
    >
      <circle cx="24" cy="24" r="20" stroke="#c6b1c9" strokeWidth="4" strokeDasharray="90 30" />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </svg>
  </div>
);

const App = () => (
  <>
    <ScrollStepper />
    <Suspense fallback={<PageLoader />}>
      <main id="main-content" role="main">
        <Routes>
          <Route path="/"                                            element={<LandingView />} />
          <Route path="/nosotros"                                    element={<Nosotros />} />
          <Route path="/terapias"                                    element={<ProjectsTerapias />} />
          <Route path="/apoyo-familias"                              element={<ProjectsFamilias />} />
          <Route path="/ocio-y-voluntariado"                         element={<ProjectsVoluntariado />} />
          <Route path="/viviendas-con-apoyo"                         element={<ProjectsVivienda />} />
          <Route path="/centro-de-dia"                               element={<ProjectsCentroDia />} />
          <Route path="/proyecto-crea"                               element={<ProjectsCrea />} />
          <Route path="/club-deportivo-afymos"                       element={<ClubDeportivo />} />
          <Route path="/valoracion-y-diagnostico"                    element={<ProjectsDiagnostico />} />
          <Route path="/donaciones"                                  element={<ProjectsDonaciones />} />
          <Route path="/servicio-capacitacion"                       element={<ProjectsCapacitacion />} />
          <Route path="/instalaciones-centro-diversidad"             element={<ProjectsCentroDiversidad />} />
          <Route path="/formacion"                                   element={<ProjectsFormacion />} />
          <Route path="/junta-directiva"                             element={<Chart />} />
          <Route path="/politica-privacidad"                         element={<PoliticaPrivacidad />} />
          <Route path="/aviso-legal"                                 element={<AvisoLegal />} />
          <Route path="/cata-vinos"                                  element={<ProjectsCataVinos />} />
          <Route path="/reforma-centro-dia"                          element={<NoticiaReforma />} />
          <Route path="/reconocimiento-fundacion-mapfre"             element={<ProjectsReconocimientoFundacion />} />
          <Route path="/transparencia"                               element={<ProjectsTransparencia />} />
          <Route path="/organigrama"                                 element={<VisorPdfOrganigrama />} />
          <Route path="/cuentas-anuales"                             element={<VisorPdfCuentas />} />
          <Route path="/documentacion-formacion"                     element={<VisorFormacion />} />
          <Route path="/crea2024"                                    element={<VisorCrea />} />
          <Route path="/noticias/dia-discapacidad-diputacion-cr-2025" element={<NewsDiaDiscapacidadPage />} />
          <Route path="/noticias/:slug"                              element={<NewsDetail />} />
        </Routes>
      </main>
      <Footer />
    </Suspense>
    <CookieBanner />
  </>
);

export default App;
