import React, { useEffect, useCallback, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUserInfo } from "../auth/authSlice";

const RouteMiddleware = ({ children, isAuthRequired = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((state) => state?.auth?.userToken);
  const [tokenReady, setTokenReady] = useState(false);
  const getLocalStorageToken = () => {
    const persistAuth = localStorage.getItem("persist:auth");
    if (persistAuth) {
      try {
        const parsedPersistAuth = JSON.parse(persistAuth);
        const userInfo = JSON.parse(parsedPersistAuth.userToken || "{}");
        return userInfo || null;
      } catch (error) {
        console.error("Error parsing localStorage token:", error);
        return null;
      }
    }
    return null;
  };

  const localStorageToken = getLocalStorageToken();

  const handleLogout = useCallback(async () => {
    try {
      const parsedToken = localStorageToken ? localStorageToken.replace(/^"|"$/g, "") : null;
      if (parsedToken) {
          dispatch(removeUserInfo());
          localStorage.removeItem("persist:auth");
      }
      navigate("/auth");
    } catch (error) {
      dispatch(removeUserInfo());
      navigate("/auth");
    }
  }, [dispatch, localStorageToken, navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {

      if (localStorageToken === null || accessToken === undefined) {
        setTokenReady(true); 
        return;
      }

      if (!localStorageToken || !accessToken || localStorageToken !== accessToken) {
        handleLogout();
      } else {
        setTokenReady(true); 
      }
    }, 100);

    return () => clearTimeout(timer); 
  }, [accessToken, localStorageToken, handleLogout]);

  if (!tokenReady) {
    return null;
  }

  if (isAuthRequired) {
    if (!accessToken || !localStorageToken || localStorageToken !== accessToken) {
      return <Navigate to="/auth" />;
    }
    return children;
  }

  if (isAuthRequired === false && accessToken && window.location.pathname.startsWith("/auth")) {
    return <Navigate to="/home" />;
  }

  if (isAuthRequired === false) {
    return children;
  }

  if (isAuthRequired && (!accessToken || !localStorageToken || localStorageToken !== accessToken)) {
    return <Navigate to="/auth" />;
  }

  return children;
};

export default RouteMiddleware;
