import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export const Userlist = () => {
  const { id } = useParams();
  const [se, setuser] = useState([]);
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then(({ data }) => {
      setuser(data.data);
    });
  }, [id]);

  return <div></div>;
};
