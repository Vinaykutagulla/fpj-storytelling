import StudentToProfessionalLogo from './components/StudentToProfessionalLogo';

function App() {
  return (
    <div>
      {/* Use the logo */}
      <StudentToProfessionalLogo 
        size={120} 
        variant="journey" 
        animated={true}
        showText={true}
      />
    </div>
  );
}