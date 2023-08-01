console.log('testing..')
/*
    npm i nodemon -g
    Nodemon moniters your files and as you save it automatically restarts the server.
    -g: it is to install a package globally.

    terminal : nodemon
    it will know to look for index.js


    # adding a package to a project:
    first init npm: npm init 
    npm package json file: it is important because this is what npm reads to figure out which packages are required to be installed for your project.

    # npm i date-fns: this stands for date functions.

    # we mention node_modules folder in a .gitignore file so that when we push the project it doesnt push the modules too.

    # npm install: this command in terminal will read the package.json file and install the required node modules we need. This is important because when we clone a repo from github it install the required modules for that project.

    # to save a module as a Dev dependancy:
    we can save nodemon as a dev dependancy using 2 commands.
    1: npm i nodemon --save-dev 
    2: npm i nodemon -D 

    # Scripts in package.json are how server interacts with the project. Checkout the scripts in package.json

    # npm i uuid :  allows use to generate different ids for different entries.

    # Now lets say you want to install a specific version of a module->
    terminal: npm i module_name@X.Y.Z 
    X.Y.Z being that specific version.

    X: major version
    Y: minor version
    Z: patch
    if you see ^X this means go ahead to allow an update to a minor version or patch if needed but do not update a major version it can have breaking changes to you application.
    if you dont put anything it means only that version should be installed.
    ~X now this says to update a patch version but not a minor version or major,  this is what you will usualy see: "~X.Y.Z".
    * means you the absolute latest version every time. this is not safe.

    # Now to uninstall a package:
    you can use 
    npm rm module_name -D(or -g) "ypu need to specify it a dev dependancy or a global one"
    you can also use:
    npm unistall module_name -D(or -g)
    npm un module_name -D(or -g)

    it will remove it from devDependancy value in the package.jason file, but remember if you have that package mentioned in the scripts you will have to remove those scripts personally.
    because it doesnt remove it from your scripts.
    */

    

    const {format} = require('date-fns')
    const {v4:uuid} = require('uuid')


    console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'))
    
    console.log(uuid())
    

   console.log('nodemon')
