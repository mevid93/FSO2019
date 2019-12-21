import React from 'react'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = (props) => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification store={props.store} />
      <AnecdoteList store={props.store} />
      <AnecdoteForm store={props.store} />
    </div>
  )
}

export default App