import jwt from "jwt-decode";

export default function({ route, store, error, redirect }) {
  console.log("ROUTE", route.path, store.state.auth.token);

  if (!route.meta[0].public && !store.getters["auth/isAuthenticated"])
    redirect("/auth");
}
