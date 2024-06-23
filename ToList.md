1. Diff Algorithm 
2. Reconcilation
3. React Fiber Architecture
4. Parcel Bundler
5. Why don't we use index as key? --> https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/
6. While creating class based components why does the followin is written
<code>
 constructor(props){
    super(props)
 }
</code>
6. (answer) constructor method indeed takes props as an argument so that components has accces to this.props inside the constructor. Constructor is a method in class which calls whenever the instance of the class is created <br/>
super(props) ---> It is necessary to pass props as an argument inside the super method which helps react to configure this.props is currently setup

7. We can write componentDidMount method async, but not useEffect hook async?
