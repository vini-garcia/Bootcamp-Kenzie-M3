import { Link } from "react-router-dom";

export function Home({ members }) {
  return (
    <main>
      <section>
        <h1></h1>
        <ul>
          {members.map((member) => (
            <li key={member.id}>
              {member.type === "pj" ? (
                <Link to={`/company/${member.id}`}>{member.name}</Link>
              ) : (
                <Link to={`/customer/${member.id}`}>{member.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
