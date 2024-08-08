### 1 How Primitive and Non-Primitive Variables are handle using state in React?
<b>Primitive</b>
<ul>
<li>Variables include number, string, boolean, Null, Undefined.</li>
<li>These are immutable and compared by values</li>
<li>Updating the state with primitive value triggers re-render if the new value is different from the current state</li>
</ul>
<b>Non-Primitive</b>
<ul>
<li>Variables include object, arrays and function</li>
<li>These are mutable and compared by reference</li>
<li>Updating the state with non-primitve value requires a new reference. Simply modifing the existing object or array won't trigger re-render. Beacuse react uses shallow comparision</li>
<li>Shallow comparision checks for reference change. Simply changing the existing object or array won't trigger re-render as reference is not changing</li>
</ul>

----

### 2 What are environment variables?
- Environment Variable are the sensitive data that are used to store the configuration settings, secret, or any other informatiion that are going to be used across entire application without hardcoding them in the codebase
- They provide a way to manage setting that may vary between development, testing and production environment

    **Env File can be use to manange configuration in different environment**
    - Different types of .env file `.env or .env.development, .env.production, .env.test, .env.stagging` 
    - By running different commands like `npm run dev`, `npm run test` and `npm run build` will load the env file automatically respectively depending upon the environment
    
----

### 3 How to run build command speicific to env.development file, as build command defualt take .env.production file as a reference?
- By default react app uses .env.production file for build process. We can override this behaviour by explicitly setting the environment
- To do this we need `env-cmd` npm package for `macOS, linus`.
- Then we need to set to `"build:development": "NODE_ENV=development react-scripts build"` script 
- ***For `windows`*** we need to install `cross-env`
- we need to set to `"build:development": "cross-env NODE_ENV=development react-scripts build"` script 
- ***run command `npm run build:development`***

----    