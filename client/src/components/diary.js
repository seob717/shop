import React from 'react'
import { Aside } from "../components/index";

const Diary = () => {
  return (
    <div style={{ display: "flex" }}>
      <aside>
        <Aside />
      </aside>
      <section style={{flex:"1" ,marginLeft:'15px'}}>diary</section>
    </div>
  )
}

export default Diary
