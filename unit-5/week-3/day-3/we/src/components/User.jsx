import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const User = () => {
  const [user, setuser] = useState([]);
  useEffect(() => {
    axios.get(`https://reqres.in/api/users`).then(({ data }) => {
      setuser(data.data);
    });
  }, []);

  return (
    <div>
      {user.map((e) => {
        return (
          <div key={e.id}>
            <Link to={`/user/${e.id}`}>
              {" "}
              {e.id}. {e.first_name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
