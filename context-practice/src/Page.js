import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"
import Highlight from "react-highlight.js"
const Page = () => {
    const context = useContext(ThemeContext)
    return (
      <div className={`${context.theme}-theme`}>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          erat imperdiet sed euismod nisi porta lorem mollis aliquam. Enim nec
          dui nunc mattis enim ut tellus. Venenatis cras sed felis eget velit.
          Lacinia at quis risus sed vulputate odio ut. Velit aliquet sagittis id
          consectetur purus ut faucibus pulvinar elementum. Non blandit massa
          enim nec. Id leo in vitae turpis massa sed elementum tempus. Urna nec
          tincidunt praesent semper. Fermentum leo vel orci porta non pulvinar
          neque. Quam pellentesque nec nam aliquam sem et tortor consequat.
          Turpis nunc eget lorem dolor sed viverra ipsum nunc. Egestas sed sed
          risus pretium quam vulputate dignissim suspendisse. Orci ac auctor
          augue mauris augue neque gravida in. Eget magna fermentum iaculis eu
          non diam phasellus vestibulum lorem. Cursus risus at ultrices mi. Amet
          consectetur adipiscing elit duis tristique. Purus in mollis nunc sed
          id semper risus. Vulputate ut pharetra sit amet aliquam id. Vel orci
          porta non pulvinar neque laoreet suspendisse interdum consectetur.
          Morbi enim nunc faucibus a pellentesque sit amet porttitor. Integer
          quis auctor elit sed vulputate. Lorem donec massa sapien faucibus.
          Posuere sollicitudin aliquam ultrices sagittis. Vitae semper quis
          lectus nulla at volutpat. At auctor urna nunc id cursus. Risus sed
          vulputate odio ut enim blandit volutpat maecenas volutpat. Posuere
          morbi leo urna molestie at elementum eu facilisis sed. In nisl nisi
          scelerisque eu. Vel eros donec ac odio tempor orci dapibus ultrices
          in. Nisl condimentum id venenatis a condimentum vitae sapien
          pellentesque. Libero justo laoreet sit amet. Enim sit amet venenatis
          urna cursus eget nunc scelerisque.
        </p>
        
      </div>
    );
}

export default Page