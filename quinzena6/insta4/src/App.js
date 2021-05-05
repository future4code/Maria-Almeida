import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

<Post
          nomeUsuario={'luara'}
          fotoUsuario={'https://cdn.pixabay.com/photo/2019/01/25/11/18/girl-3954232_960_720.jpg'}
          fotoPost={'https://cdn.pixabay.com/photo/2015/03/17/14/05/sparkler-677774_960_720.jpg'}
        />

<Post
          nomeUsuario={'olga'}
          fotoUsuario={'https://cdn.pixabay.com/photo/2014/09/23/06/04/brothers-457237_960_720.jpg'}
          fotoPost={'https://cdn.pixabay.com/photo/2017/11/11/21/55/girl-2940655_960_720.jpg'}
        />
      </MainContainer>
    );
  }
}

export default App;
