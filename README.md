## Trail Finder

Trail Finder is a web app that allows people to look for trails near them utilizing a location based search. Users can enter their ZIP code or City, State combination to find trails.

## How it works

Trail Finder utilizes the Foursquare Places and Photo API to fetch data from to display for users. Many of these API calls are made from pages, and that data is then passed in as props to the child components.

## Technologies used

Trail Finder is being built using React and NextJS. These technologies allow Trail Finder to take advantage of server side rendering for speed optimizations. I am planning on deploying it using Vercel.

## Where it is currently at

I am currently styling Trail Finder and working on populating the details page. Currently, Trail Finder only has support for City, State based search, but I am working on implementing ZIP code based search.