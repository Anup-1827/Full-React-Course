1. Any piece of JSX can have only parent element
2. If we don't want a parent element to wrap the component, then use <b>React.Fragment</b>
3. React.Fragment is an empty tag, instead we can write <b>Empty Tag <></> </b> which is shorthad for React.Fragment
4. Config Driven UI
5. React use concept of Vitual DOM which at the backed uses the concept of <b>Reconsiliation</b>. Which means it uses <b>Diff Algorithm</b> which compares the both the virtual dom and Real dom to only render the data which is updated