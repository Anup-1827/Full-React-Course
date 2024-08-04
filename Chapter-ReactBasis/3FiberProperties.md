# Fiber Properties
- Relationship between the Fibers is mananged by these three properties child, siblings and return ***(Fiber Relationships)***
- As ReactElement forms a tree. FiberElement forms a tree
- We are familar with parent and children in React Element. **But in Fiber Tree there aren't any children. There is only single child**
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


# Fiber Tree
- Fiber uses two trees. The fist one is the current tree and the second one is the workInProgress tree
- Current Tree is what is currently on the screen, this mean react does not make changes directly on the screen. If it make changes in the current tree that will lead to an inconsistent UI
- So, react make changes in the workInProgreess tree. Then react simply swaps workInProgress tree with the current tree and current tree with workInProgress tree
- **IMPORTANT**
- React can discard changes during the render phase in workInProgress tree, so changes to the DOM or lifecycle methods can not be executed during the render phase.
- The result of the render phase is not only a tree of Fiber Node to be swapped with current node, but also a list of **Effects**


### What is an Effect?
- Effect is an activity like mutating the DOM or calling a particular life cycle method
- These activity is called side effects, so where these effects are coming from
- These effects can affect the other components, so they can not be executed during the render phase
- Effect is also a type of work so this type of work is heavily depends upon the Fiber 
- Method like render() and shouldComponentUpdate() are the part of render phase
- Effects are tracked using properties like <b>firstEffect, nextEffect, lastEffect, etc</b>
- During commit phase, React goes through all Effects and applies them to component instance
- This result in changes visible to the user

**Fiber processes units of work processed by calling functions like `beginWork()` and `completeWork()`. React steps into Fiber by calling beginWork() and keeps stepping until it reaches a Fiber without children. Compelete that Fiber by calling `completeWork()`**

