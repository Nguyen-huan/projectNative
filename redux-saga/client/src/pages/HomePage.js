import React from 'react'
import { Container } from '@material-ui/core'
import Header from '../components/Header'
import PostList from '../components/PostList'

export default function HomePage() {
  React.useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then((response) => response.json())
      .then((data) => console.log(data));
  })
  return (
    <Container maxwidth="lg">
      <Header />
      <PostList />
    </Container>
  )
}
