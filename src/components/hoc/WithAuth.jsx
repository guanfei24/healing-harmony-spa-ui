import { useAuth } from "../hooks/useAuth";
import Login from "../management/Login";
import { useLocation } from "react-router-dom";

export default function WithAuth(WrappedComponent) {
  const WithAuthComponent = () => {
    const location = useLocation();
    const userFromRoute = location.state?.user || "";

    const { user, isAuthenticated } = useAuth(userFromRoute);

    console.log("user: ", user);
    console.log("isAuthenticated: ", isAuthenticated);

    if (!isAuthenticated) return <Login />;
    return <WrappedComponent user={user} />;
  };

  return WithAuthComponent;
}
