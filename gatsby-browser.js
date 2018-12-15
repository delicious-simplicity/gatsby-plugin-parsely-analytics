export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== `production`) return null
  if (
    window.PARSELY && typeof window.PARSELY === 'object' &&
    window.parselyPreload && typeof window.parselyPreload === 'object'
  ) {
    var event = {
        url: location.href,
        js: 1
    }
    if (window.parselyPreload.loaded) {
      window.PARSELY.beacon.trackPageView(event);
    } else {
      window.parselyPreload.eventQueue.push(event);
    }
    return
  }
}
