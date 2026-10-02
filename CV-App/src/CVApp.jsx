import Header from '../components/header.jsx';
import GeneralInfoSection from '../components/general.jsx';
import EducationSection from '../components/education.jsx';
import PracticalExperienceSection from '../components/practical.jsx';
import '../styles/CVApp.css';

export default function CVApp() {
  return (
    <div className="cv-app">
      <Header />
      <GeneralInfoSection />
      <EducationSection />
      <PracticalExperienceSection />
    </div>
  );
}
