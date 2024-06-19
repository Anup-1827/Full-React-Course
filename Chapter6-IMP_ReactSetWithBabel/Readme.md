1. Setting React with babel
2. CDN Link for React and ReactDOM is used
3. npm init -y
4. npm install --save-dev @babel/core @babel/cli @babel/preset-react
5. .babelrc file is created. Defined presets for @babel/preset-react
6. npx babel ./index.js --out-dir lib --> This is a command to create a build for the js file having JSX to convert into JS
7. <b>We can not use import statements in the application because we need bundlers like to parcel and webpack to bundel the code.</b> That is why we have used CDN Links for React and React DOM.