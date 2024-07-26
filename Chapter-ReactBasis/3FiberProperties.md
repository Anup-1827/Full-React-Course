# Fiber Properties
- Relationship between the Fibers is mananged by these three properties child, siblings and return ***(Fiber Relationships)***
- As ReactElement forms a tree. FiberElement forms a tree
- We are fimilar with parent and children in React Element. **But in Fiber Tree there aren't any children. There is only single child**
-   ```
    <div>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
    </div>
    ```
    - **For Above Code**
    - div child key is referencing to the first child Heading 1
    - sibiling of Heading 1 is referencing to Heading 2
    - sibiling of Heading 2 is referencing to Heading 3
    - Where as Heading 3 sibling and child are referencing to null
    - ***Most Imp* All the return key of Heading 1,2&3 Fiber are referencing to the main DIV**

## As we know React Fiber processes unit of work. By work means
- Whenever state changes 
- Whenever lifecycle function is called
- Whenever there is a change in the DOM
- *Whenever react processes a fiber, it either handles the work directly or process it for the future*
- React uses ***time slicing()*** feature which can split work into chunks
- **For Example :--** High Priority work like animation processing is resolved first while Low Priority work like API calls/ network requests can be delayed further
- High Priority Work Method :- requestAnimationFrame() 
- Low Priority Work Method :-  requestIdleCallback()