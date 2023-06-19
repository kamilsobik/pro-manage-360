import { useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const RequireAuth = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setAuthenticated(user);
          setLoading(false);
          return;
        }
        setAuthenticated(null);
        setLoading(false);
      },
      (error) => {
        throw new Error(error);
      }
    );
  }, []);

  if (!authenticated && loading) {
    return (
      <p>
        <Loader />
      </p>
    );
  }

  if (!authenticated && !loading) {
    return navigate("/signin");
  }

  return children;
};

export default RequireAuth;
