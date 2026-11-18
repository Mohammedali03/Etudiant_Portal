export default function WelcomeMessage() {
const titre = 'Bienvenue sur votre espace';
const description =
'Consultez vos informations académiques';
return (
<section className="welcome-message">
<h2>{titre}</h2>
<p>{description}</p>
</section>
);
}