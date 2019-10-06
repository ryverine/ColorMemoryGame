# Color Memory Game

Deployed App: https://ryverine.github.io/ColorMemoryGame/

New version of Color Memory Clicky Game built with React.

A memory game build with React. An exercise in breaking up an application's UI into components, managing component state, and responding to user events.

# Technologies

* HTML
* CSS | Bootstrap
* JavaScript
* Node.js
* React.js

# Game Play

Click each color only once!

User's score is incremented when clicking an image for the first time. 

The user's score is reset to 0 if they click the same image more than once, and the user will get the option to restart the game.

Every time an image is clicked, the images rendered to the page shuffle themselves in a random order.

Once all images have been clicked the user will receive a congratulatory message and get the option to restart the game.

# Special Thanks To Arnaud Christ!

GitHub Pages deploy was a bit quarrelsome.

Arnaud's article helped me get my React app deployed.

>    How to Create a React Application and Deploy It on GitHub Pages
>
>    Arnaud Christ
>
>    Jul 29, 2019
>
>    https://www.pluralsight.com/guides/how-to-create-react-application-and-deploy-on-github-pages

This article had me create the `gh-pages` branch manually and push the resulting content of `npm run build` to that branch.

Previous articles seemed to rely on the built-in funcionality of [gh-pages npm](https://www.npmjs.com/package/gh-pages), like the [create-react-app deployment guide](https://create-react-app.dev/docs/deployment).

I could not get my app deployed wih those dircetion on account of recieving a `Could not read from remote repository` error after executing `npm run deploy`.




