export default function({ route, store, error, redirect }) {
  if (!process.server) {
    if (!route.meta[0].public && !store.getters["auth/isAuthenticated"])
      redirect("/auth");
    else if (route.path === "/auth" && store.getters["auth/isAuthenticated"])
      redirect("/company");
  }
}
