import { Abilities, About, AcademicFormation, Certifications, Contact, Languages, ProfessionalExperience, Projects, SoftSkills } from '../components';
import { Footer, Header } from '../layout';

export const PortFolio= () => {
  return (
    <>
      <Header />
        <div className="container justify-content-center mt-5 text-center mx-auto"> 
        <div className="d-flex flex-column gap-3 justify-content-center">
        <div className="row">
            <div className="col-lg-12 card shadow border-0 p-3">
              <About />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 card shadow border-0 p-3"><Abilities /></div>
            <div className="col-lg-3 col-md-6 col-sm-12 card shadow border-0 p-3"><AcademicFormation /></div>
            <div className="col-lg-3 col-md-6 col-sm-12 card shadow border-0 p-3"><ProfessionalExperience /></div>
            <div className="col-lg-3 col-md-6 col-sm-12 card shadow border-0 p-3"><Certifications /></div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4 card shadow border-0 p-3">
              <Projects />
            </div>
            <div className="col-sm-12 col-md-4 card shadow border-0 p-3">
              <Languages />
            </div>
            <div className="col-sm-12 col-md-4 card shadow border-0 p-3">
              <SoftSkills />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 card shadow border-0 p-3">
              <Contact />
            </div>
          </div>
        </div>
        </div>
      <Footer />
    </>
  )
}
