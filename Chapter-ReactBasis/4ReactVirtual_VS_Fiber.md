# React Virtual DOM VS React Fiber Tree

### React Virtual DOM
- React Virtual DOM is a light weight virtual representation of Real DOM. When a user interact with the web page built with React, the virtual DOM is updated first, then react determines what changes need to be made to the actual DOM.

### React Fiber Tree
- React Fiber Tree is an internal algorithm that react uses to manage the order and priority of updates to the Virtual DOM. React Fiber is a reimplementataion of reconcilation algorithm


**In summary, React Virtual DOM is a high-level concept that describes how React updates the actual DOM, while React Fiber Tree is a low-level implementation detail that helps React manage the order and priority of updates to the Virtual DOM.**  