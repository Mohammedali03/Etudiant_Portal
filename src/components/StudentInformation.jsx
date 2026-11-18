export default function StudentInformation() {
const nom = 'Sara El Amrani';
const filiere = 'Génie informatique';
const niveau = 2;
const email = 'sara@universite.ma';
return (
<section className="student-information">
<h2>{nom}</h2>
<p>Filière : {filiere}</p>
<p>Niveau : {niveau}e année</p>
<p>Email : {email}</p>
</section>
);
}
