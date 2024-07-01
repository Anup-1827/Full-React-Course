import { render } from "@testing-library/react";
// import "@testing-library/dom"
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../store";
import {StaticRouter} from "react-router-dom/server"

test("Render Header Component", ()=>{
   const header =  render(
      <StaticRouter>

       <Provider store={store}>
          <Header/>
      </Provider>
      </StaticRouter>
      )
   
      const div = header.getByTestId("heading")
      console.log(div);
      
   // expect(div.innerHTML)
   // const header =  render(  <Header/>)
})