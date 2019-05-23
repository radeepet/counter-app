import React from 'react'

const Ninjas = ({ninjas, deleteNinja}) => {
  const list = ninjas.map(ninja => {
    return ninja.age > 20 ? (
      <div className="myHome" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <button onClick={()=>{deleteNinja(ninja.id)}}> Delete Ninja</button>
      </div>
    ) : null
  })
 return (
   <div>{list}</div>
 )

}

export default Ninjas
