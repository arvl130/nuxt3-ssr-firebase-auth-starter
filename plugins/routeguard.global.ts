import useCurrentUser from "~~/components/useCurrentUser"
import useTokenExpiryStatus from "~~/components/useTokenExpiryStatus"

export default defineNuxtPlugin(() => {
  const user = useCurrentUser()
  const tokenExpired = useTokenExpiryStatus()

  addRouteMiddleware(
    "route-guard",
    (to) => {
      if (to.path !== "/tokenexpired" && tokenExpired.value)
        return navigateTo({
          path: "/tokenexpired",
          query: {
            redirectUrl: to.path,
          },
        })

      if (to.path === "/login" && user.value) return navigateTo("/")
      if (to.path === "/" && !user.value) return navigateTo("/login")
    },
    { global: true }
  )
})
