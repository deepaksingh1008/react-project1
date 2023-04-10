import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
     <main>
      <h1>Deepak Singh</h1>
      <p>Solutiom to all your Problems</p>
     </main>
    </div>
    <div className="home2">
      <img src={vg} alt="Graphics" />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem omnis 
          magni dolore
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum magni
          sed dicta
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
      </div>
    </div>
    <div className="home3" id='about'>
      <div>
      <h1>Who we are?</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores illum quis, inventore, perferendis exercitationem accusantium delectus vitae consectetur, soluta maiores atque placeat veritatis! Expedita doloremque vel ipsum dicta est, architecto at blanditiis animi rerum consequatur quisquam consequuntur, enim consectetur ea praesentium delectus excepturi quidem quas nemo iusto sint. Debitis assumenda molestiae, aliquam voluptatibus dolor autem consequuntur qui earum illum ad vel alias. Earum blanditiis explicabo impedit voluptates eaque necessitatibus odit quisquam laboriosam commodi. Vero itaque consequuntur enim ipsum voluptatum. Ex repellat alias sit voluptatum, officia neque nihil sequi deleniti?

      </p>
      </div>
    </div>
    <div className="home4" id='brands'>
      <div className='div1'>
        <h1>Brand</h1>
        <article>
          <div style={
            {
              animationDelay:"0.3s",
            }
          }>
             <AiFillGoogleCircle/>
             <p>Google</p>
          </div>
          <div style={
            {
              animationDelay:"0.5s",
            }
          }>
             <AiFillAmazonCircle/>
             <p>Amazone</p>
          </div>
          <div style={
            {
              animationDelay:"0.7s",
            }
          }>
             <AiFillYoutube/>
             <p>Youtube</p>
          </div>
          <div style={
            {
              animationDelay:"0.1s",
            }
          }>
             <AiFillInstagram/>
             <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home