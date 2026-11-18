import StudentAvatar from './StudentAvatar.jsx';
import StudentInformation from './StudentInformation.jsx';
export default function StudentCard() {
return (
<article className="student-card">
<StudentAvatar />
<StudentInformation />
</article>
);
}