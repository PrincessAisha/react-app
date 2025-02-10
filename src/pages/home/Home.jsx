import React from 'react'
import './Home.css'
import Posts from '../../components/posts/Posts'

export default function Home() {
  return (
    <div className='home'>
      <h1 className='title'><marquee scrollamount="5s">Welcome To Our Website</marquee></h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint corrupti modi hic quia at, sequi consequatur expedita aliquid suscipit est minus impedit voluptatem facere voluptatibus corporis temporibus cumque architecto dicta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam molestias sint velit delectus porro, aperiam, id voluptatum laudantium iusto ad nihil tempore reiciendis odit! Veritatis excepturi unde adipisci nostrum fuga. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum exercitationem aliquid voluptatem incidunt eius sit nam odio? Et praesentium quaerat deleniti sed, quas minima odit, debitis voluptas beatae saepe eius?</p>
      <Posts />
    </div>
    
  )
}
