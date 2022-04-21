import { Link } from "react-router-dom";
export const Navbar = () => {
  const arr = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/user", title: "User" }
  ];
  return (
    <div>
      {arr.map((e, i) => (
        <Link key={i} to={e.path}>
          {e.title}
        </Link>
      ))}
    </div>
  );
};
