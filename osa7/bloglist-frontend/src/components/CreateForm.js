import React from 'react'
import { useField } from '../hooks'
import filterInvalidDOMProps from 'filter-invalid-dom-props'
import { setNotification } from '../reducers/notificationReducer'
import { createBlog } from '../reducers/blogReducer'
import { connect } from 'react-redux'
import styled from 'styled-components'

const CreateForm = ({ createBlogVisible, setCreateBlogVisible, ...props }) => {
  const title = useField('text')
  const author = useField('text')
  const url = useField('text')
  const hideWhenVisible = { display: createBlogVisible ? 'none' : '' }
  const showWhenVisible = { display: createBlogVisible ? '' : 'none' }

  const handleCreate = async (event) => {
    event.preventDefault()
    try {
      props.createBlog(title.value, author.value, url.value)
      title.reset()
      author.reset()
      url.reset()
      props.setNotification(`a new blog ${title.value} by ${author.value} added`, 'info', 3)
    } catch (exception) {
      props.setNotification('Failed to create blog', 'error', 3)
    }
  }

  const Button = styled.button`
  background: Bisque;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid Chocolate;
  border-radius: 3px;`

  const Input = styled.input`
  margin: 0.25em;`

  return (
    <div>
      <div style={hideWhenVisible}>
        <Button onClick={() => setCreateBlogVisible(true)}>new blog</Button>
      </div>
      <div style={showWhenVisible}>
        <h2>create new</h2>
        <form onSubmit={handleCreate}>
          <div>
            title: <Input {...filterInvalidDOMProps(title)} />
          </div>
          <div>
            author: <Input {...filterInvalidDOMProps(author)} />
          </div>
          <div>
            url: <Input {...filterInvalidDOMProps(url)} />
          </div>
          <Button type="submit">create</Button>
        </form>
        <Button onClick={() => setCreateBlogVisible(false)}>cancel</Button>
      </div>
    </div>
  )
}

export default connect(null, { setNotification, createBlog })(CreateForm)