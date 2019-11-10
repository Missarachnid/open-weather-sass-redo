const workboxBuild = require('workbox-build');

const buildSW = () => {
  
  return workboxBuild.injectManifest({
    swSrc: 'src/custom-sw.js', 
    swDest: 'build/sw.js', 
    globDirectory: 'build',
    globPatterns: [
      '**\/*.{js,css,html,png,jpg}',
    ]
  }).then(({count, size, warnings}) => {
    //warnings.forEach(console.warn);
    //console.log(`${count} files will be precached, totaling ${size} bytes.`);
  });
}
buildSW();