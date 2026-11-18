import './App.css';
import Header from './components/Header.jsx';
import WelcomeMessage from './components/WelcomeMessage.jsx';
import StudentCard from './components/StudentCard.jsx';
import Footer from './components/Footer.jsx';
import UniversityInformation from './components/UniversityInformation.jsx';
export default function App() {
    
return (
<>

<Header />
<main className="main-content">
<WelcomeMessage />
<UniversityInformation/>
<StudentCard />
</main>
<Footer />

</>
);
}
