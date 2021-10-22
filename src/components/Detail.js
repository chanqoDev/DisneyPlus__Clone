import styled from "styled-components";

const Detail = (props) => {
  return (
    <Container>
      <Background>
        <img
          alt=""
          src="https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_450,q_auto,w_767/v1633364472/amc-cdn/production/2/movies/66500/66489/MovieStillDynamic/129073.jpg"
        />
      </Background>
      <ImageTitle>
        <img
          alt=""
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngmart.com%2Ffiles%2F12%2FThe-Addams-Family-Logo-PNG-HD.png&f=1&nofb=1"
        />
      </ImageTitle>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

export default Detail;
