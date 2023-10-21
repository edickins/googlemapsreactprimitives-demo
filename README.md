https://github.com/edickins/googlemapsreactprimitives-demo

# example repository to demonstrate issue with googlemap-react-primitives app not rendering

# components when example code is ported into a Vite project

I put the code from example.tsx into a MyMap component that is rendered by App.
The MyMap component is inside src>components>googlemaps

# components not rendering on the map

to replicate bug:

- download repo
- run npm install
- run npm run dev to launch app
- notice that the map renders but without markers or overlay
- go to MyMap line 57 and comment out the s being rendered
- notice how other map components render through HMR soft re-render
- uncomment the code
- notice the s render.
- refresh the page and notice that all map components no-longer render

# render without React.Strictmode fixes the bug

To remove the React.Strict mode go to Main and remove the <React.StrictMode></React.StrictMode> wrapper around

- re-run the app (npm run dev)
- Notice that all components render correctly as expected over the map.
- refresh the page and notice components are still rendering correctly.
