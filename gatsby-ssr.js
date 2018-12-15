import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions ) => {
  if (process.env.NODE_ENV !== `production`) return null

  return setPostBodyComponents([
    <script key="gatsby-plugin-parsely-analytics-async-queue"
      dangerouslySetInnerHTML={{
        __html: `
          var parselyPreload = {eventQueue: [], loaded: false};
          PARSELY = {
            autotrack: false,
            onload: function() {
                parselyPreload.loaded = true;
                console.log('flushing queue', parselyPreload);
                for (var i = 0; i < parselyPreload.eventQueue.length; i++) {
                    PARSELY.beacon.trackPageView(parselyPreload.eventQueue[i]);
                }
            }
          };
        `
      }}
    />,
    <div
      key="gatsby-plugin-parsely-analytics-root-cfg"
      id="parsely-root"
      style={{ display: 'none' }}
    >
      <span id="parsely-cfg" data-parsely-site={pluginOptions.site}></span>
    </div>,
    <script
      key="gatsby-plugin-parsely-analytics-library"
      dangerouslySetInnerHTML={{
        __html: `
          (function(s, p, d) {
            var h=d.location.protocol, i=p+"-"+s,
                e=d.getElementById(i), r=d.getElementById(p+"-root"),
                u=h==="https:"?"d1z2jf7jlzjs58.cloudfront.net"
                :"static."+p+".com";
            if (e) return;
            e = d.createElement(s); e.id = i; e.async = true;
            e.src = h+"//"+u+"/p.js"; r.appendChild(e);
          })("script", "parsely", document);
    `
      }}
    />,
  ])
}
