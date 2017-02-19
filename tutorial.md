##Steps to create this example from scratch:

**Electron**:
1. Create a folder;
2. Create a new app with npm: `npm init`. **Change the entry point to main.js instead of index.js**;
3. Install Electron and save to your dev dependencies: `npm install --save-dev electron`;
4. Create the following files in the root of your project, based on the [Electron quickstart tutorial] (http://electron.atom.io/docs/tutorial/quick-start/):
⋅⋅* main.js
⋅⋅* index.html
5. Put a start script in package.json to run electron:
⋅⋅*  "start": "electron ."

You are done with the Electron part! To test just run:
⋅⋅* npm start

**Angular 2**:

1. Change the scripts session in package.json to:
..* "scripts": {
      "start": "tsc && concurrently \"npm run tsc:w\" \"electron .\" ",
      "tsc": "tsc",
      "tsc:w": "tsc -w"
      },
2. Get the dependencies and the dev dependencies from the [Angular quickstart repository](https://github.com/angular/quickstart) and put it in your package.json. Note that in this example I didn't use all the dependencies.
3. Create the following files on the root of your project based on this repo:
..* tsconfig.json;
..* systemjs.config.js;
4. Check the changes that I made in the index.html to use Angular and do the same with your file.Basically the scripts and the <my-app> tag;
5. Create a folder **app** and the following files inside the folder, based on the files of this repo:
..*  app.module.ts;
..* app.component.ts;
..* main.ts;
6. run `npm install` and `npm start`;

That's it!!
