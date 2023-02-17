import React from "react";
import { Navigate } from "react-router-dom";

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
export default function ProtectedRoute({ component: Component, ...props }) {
  return props.loggedIn ? <Component {...props} /> : <Navigate to="/sign-in" />;
}
