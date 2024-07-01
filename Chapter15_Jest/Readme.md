1. Why do we need test cases?
1. (answer) Whenever working on big application managed by many developers, we build any component or write code. To ensure that our code is not showing unusal behaviour by affecting the non-related component, so we write Test Cases.<br/>
It helps in maintainability
2. Test Driven Development --> We write test case even before writing code. It is best practice. We will always have 100% test case. The Development process is very slow

3. Different Type of Testing ---Manual Testing ---Automated Testing (Selenium Testing) ---End to End Testing ---Unit Testing ---Integration Testing ---Smoke Testing ---Regressive Testing
4. Headless Browser for Testing 
5. <b>JEST</b> is a delightful javascript testing framework with  a focus on simplicity
6. React Testing Library is a part of <b>Testing Library</b>

<h1>Getting Started For Testing<h1>
<ul style="font-size:16px">
    <li>Install testing/libarary and JEST</li>
    <li>Configure JEST <b>npx jest --init</b> npx is used not npm because we need to run this command just once in our project</li>
    <li>npm install -D jest-environment-jsdom  "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.</li>
    <li>Now, if we run "npm run test" It will throw an error of import statmenet</li>
    <li>We need to configure JEST with babel. Create .babelrc file</li>
    <li><b>Run</b> npm install --save-dev babel-jest @babel/core @babel/preset-env <b>to configure import statement</b></li>
    <li>write test case <code>test("Checking Test",()=>{
    expect(sum(2,5)).toBe(7)
})</code></li>
    <li>npm run test</li>
    <li>import { render } from "@testing-library/react"</li>
    <li>render component</li>
    <li>npm run test</li>
    <li>We will get an error :-- <em>jsx is not enabled</em></li>
    <li>We need to configure using "@babel/preset-react"</li>
    <li>["@babel/preset-react", {"runtime":"automatic"}]</li>
    <li>Now JSX is configured</li>
    <br/>
    <br/>
    <em>
    <li>JEST does not under stand png|jpg| or any other format of image</li>
    <li>JEST can only read JS file</li>
    </em>
    <li>To fix this there is <b>moduleNameMapper</b> in jest.config.js file. We need to add mock js while testing</li>
    <li>Create Mock File for testing</li>
    <li>Inside <em>jest.config.js</em> file add configuration to <em>moduleNameMapper</em></li>
    <li>
        <code>
          moduleNameMapper: {
    "\\.(jpg|png|svg)$": "../mock/dummyImg.js",
  },
        </code>
    </li>
    <li>npm run start</li>
    <h1>When Redux is Integrate</h1>
    <li>If integrated with redux we should get an error of <b>'unhandled exception'</b></li>
    <li>To fix it we need to provide React Provider to the component</li>
    <li>
     <\Provider store={store}> 
     <\Header/>
     <\/Provider>
     </li>
     <br/>
     <br/>
     <h1>React Router DOM is Integrated</h1>
    <li>If we are using react-router-dom we need to wrap our component inside <\StaticRouter\/\> from react-router-dom/server</li>
    <h1>When fetch API is integrated</h1>
    <li>fetch is a Browser API. When running in the server environment. It gives error</li>
    <h2>To be in the DOM</h2>
    <li>body.getByTestId("heading")  <\div data-testid="heading">Header<\/div></li>
    <h1>Hot Module Reloading in JEST</h1>
    <li>"watch": "jest --watch"</li>
    <li></li>
    <li></li>
</ul>