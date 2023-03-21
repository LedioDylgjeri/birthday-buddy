import React from 'react'
import People from './People'

function List({people}) {
  return (
    <section>
      {people.map(person => {
        return <People key={person.id} {...person}/>
      })}
    </section>
  )
}

export default List