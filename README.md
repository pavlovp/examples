System.js App. In order to run it run:
`npm install`
`npm run build`
`npm run serve`

React and react-dom are loaded using UMD loader (fetched from remote cdn).
'remote' folder gets copied to 'dist' on build. This mimics a remote server.

The 'remote' folder could be hosted somewhere else - its is not required for the build process.
It is included here so we don't need to serve two separate locations when running localy.

Both host app and the remote are System.js modules.
There is system.js import map in index.html.

This App is PoC for:
- Setting up simple React app (host app)
- Being able to externalize/federate some of React components (fetched from 'remote' folder)
- Both the host app and the remote app are using the same React instance (fetched from CDN)


