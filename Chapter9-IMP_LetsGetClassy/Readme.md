1. When creating a nested route like / -> /about -> /about/profile
2. We need to define children of children
3. While providing path to the children never write <b>/profile</b> it will consider localhost:1234/profile
4. Always write path to the children <b>profile</b> it will consider localhost:1234/about/profile
5. <b>/</b> means from root
6. <b>\<Outlet/\></b> plays the most important role while working with nesting children

<h2>Class Based Component </h2>

1.  Important Methods --> constructor, componentDidMount, render for rendering a component
2.  Inside a component --> constructor is called, render method is called and at last componentDidMount will be called
3.  When a Parent Component is redered all the lifecycle method is called accoringly, but when it sees the child component first it renders the lifecycle method of the child component then to the parent ---> This means componentDidMount method of parent will be called at the end after all the life cycle method of the child are triggered

4.  <code>
       class About extends React.component{
            constructor(){
            }

            componentDidMount(){
            }

            render(){
                return{
                    <ChildComponent1/>
                    <ChildComponent2/>
                }
            }

    }

           class ChildComponent1 extends React.component{
            constructor(){
            }

            componentDidMount(){
            }

            render(){
                return{
                }
            }

    }

        class ChildComponent2 extends React.component{
            constructor(){
            }

            componentDidMount(){
            }

            render(){
                return{
                }
            }
    }
    <code>
<h2>For the above code</h2>
<p>There is a Parent Component About it is rendering Two Child Component Component1 and Component2</p>
<p>Here are the below steps to the Life Cycle Method of Parent and Child is called</p>
<ul>
    <li>Constuctor of Parent</li>
    <li>Render of Parent</li>
    <br/>
    <br/>
    <li>Constuctor of Child1</li>
    <li>Render of Child1</li>
    <br/>
    <br/>
    <li>Constuctor of Child2</li>
    <li>Render of Child2</li>
    <br/>
    <br/>
    <li>ComponentDidMount of Child1</li>
    <br/>
    <li>ComponentDidMount of Child2</li>
    <br/>
    <br/>
    <li>ComponentDidMount of Parent</li>
</ul>

<h2>As we know, Component Life Cycle methods are called respectively <em>constructor(), render() and componentDidMount()</em> </h2>
<h3>Then why not the child component's <em>componentDidMount()</em> is called just after render method?</h3>
<h1>Because 👇</h1> 
![React rendering Phase](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram)

    1. React executes into two phases <b><em>(a) Render Phase (b) Commit Phase</em></b>
    2. <b>Render Phase :--</b> Where all the <b>Constructor and Render</b> Method is called
    3. After render phase react updates the DOM
    4. <b>Commit Phase :--</b> Where all the mounting and Unmount methods are called like <b>componentDidMount, componentDidUpdate, componentWillUnMountx</b>


5. <code>
       class About extends React.component{
            constructor(){
            }

            componentDidMount(){
            }

            render(){
                return{
                    <ChildComponent1/>
                }
            }

    }

           class ChildComponent1 extends React.component{
            constructor(){
            }

            async componentDidMount(){
                "API Call"
            }

            render(){
                return{
                }
            }

    }
</code>
<h2>For the above code</h2>
<p>There is a Parent Component About it is rendering one Child Component Component1. And API call is made in Child1 Component</p>
<p>Here are the below steps to the Life Cycle Method of Parent and Child is called</p>
<ul>
    <li>Constuctor of Parent</li>
    <li>Render of Parent</li>
    <br/>
    <br/>
    <li>Constuctor of Child1</li>
    <li>Render of Child1</li>
    <br/>
    <br/>
    <li>ComponentDidMount of Parent</li>
    <br/>
    <br/>
    <li>ComponentDidMount of Child1</li>
</ul>

<p>Here, <b>Parent ComponentDidMount</b> is called first.</p>
<h1>Because 👇</h1> 
    1. Method of ComponentDidMount() of Child1 is an asynchronous method
    2. Which is why it is called at the end after the parent Component

6. componentDidUpate() --> Called after every next render method
7. componentWillUnmount() --> When component is unmountted

