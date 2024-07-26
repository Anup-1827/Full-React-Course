<h1>React Fiber</h1>
<ul>
<li>React Fiber is a plain JS Object with some properties</li>
<li>The current React reconciler, is React Fiber reconciler, which is named after its object and is a default reconciler since React version 16.</li>
<li>React Fiber Focuses on animations and responsiveness. It has ability to split work into chunks and prioritize task. We can pause work and come back later</li>
<li>React fiber is asynchronous, which is opposite to old React reconciler</li>
<li><b>Old Reconciler :-- Stack Reconciler</b> It is synchronous works like stack, you can add or remove item. But you need to wait until the stack is empty</li>
<li><b>Stack Reconciler Example</b></li>
<li>Imagine we have a Text field. Ideally we would always able to type inside the text field without any delay. If there is only one text field, naturally that's not a problem. What if something else is happening. Suppose there is a network request happening in the background that results into some element being rendered. We will experience delay because the stack reconciler is in the middle of processing those element</li>
<li>Stack reconciler is synchronous and with that come some major limitation.</li>
</ul>
<hr/>
<b>The core underlying idea is that Fiber also represent unit of work</b>
<ul>
<li>React first process units of work and we end up something called finished work</li>
<li>Afterwards, React first commits this work resulting visible changes in the DOM</li>
<li>This all happens in two phases (i) Render Phase (ii) Commit Phase</li>
</ul>
<b>Render Phase</b>
<ul>
<li>React does all sort of asynchronous things behind the scenes that aren't visible to the user</li>
<li>React can pause work, prioritize work or may even discard it in this phase</li>
<li>During this phase, react process all of the Fibers, which represents unit of work </li>
<li>Internal function beginWork() and completeWork() is being called</li>
</ul>

<b>Commit Phase</b>
<ul>  
<li>This phase is synchronous and can not be interupted</li>
</ul>

<b>Fiber Properties</b>
<p>A fiber object has specific properties that allow it to track information and the relationship between fiber nodes.</p>
<a href="https://blog.openreplay.com/react-fiber-explained/">React Fiber Details</a> <br/>
<code>
fiberNode{  
   stateNode,
   child,
   sibling,
   return,
   type,
   alternate,
   key,
   updateQueue,
   memoizedState,
   pendingProps,
   memoizedProps,
   tag,
   effectTag,
   nextEffect
}
</code>
<ul>
<li>React Fiber always has 1 to 1 relationship with instance of React Component</li>
<li>"type of" something is stored inside the tag property. It is a number from 0 to 24</li>
<li>The stateNode refer to component instance a fiber belongs to. Using this property React can access the state associated with fiber</li>
<li>child and sibling point to other fibers with respect to the current fiber node.</li>
</ul>

**Fibers are quit similar to ReactElement. Which is partially true**   
   - React element and fiber contain similar properties like *type* and *key*  
   - The main difference is React element are always recreated everytime. Where as React Fiber are reused as often as possible
   - React Fiber are mostly created once while mounting
   - Function Like *createFiberFromElement(), createFiberFromFragment(), createFiberFromText()* are used in Source Code
