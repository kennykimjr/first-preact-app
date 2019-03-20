# First Preact App
This is an example app that uses [Preact](https://github.com/developit/preact), [Express](https://github.com/expressjs/express), and [NextJS](https://github.com/zeit/next.js/) to deliver an optimized example demonstration repository. By combining all three frameworks, it is possible to deliver an extremely efficiently-sized project that can scale well. Hopefully this can serve as a boilerplate for those trying to make all three technologies work in tandem.

## Instructions
    git clone https://github.com/kennykimjr/first-preact-app.git
    cd first-preact-app
    touch .env
   
In your .env file, specify **PORT=3000**

    npm install
    npm run build
    npm run start

Head over to http://localhost:3000 to see the app running locally!

## Credits 
I could not have gotten this project done without the following sources to guide me through this:
* [Using Preact with NextJS](https://github.com/zeit/next.js/tree/canary/examples/using-preact)
* [dcatanzaro/nextjs-preact](https://github.com/dcatanzaro/nextjs-preact)
* [mluberry/nextjs-express](https://github.com/mluberry/nextjs-express/blob/master/server.js)
* [Building a server-rendered React app with Next.js & Express.js](https://blog.logrocket.com/how-to-build-a-server-rendered-react-app-with-next-express-d5a389e7ab2f)
