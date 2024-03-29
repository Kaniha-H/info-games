import React from "react";
// styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  // exit detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow= "auto";
      history.push("/");
    }
  };
  // data
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return(
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
              <Stats>
                <div className="rating">
                  <motion.h3 layoutId={`title ${pathId}`}>{ game.name }</motion.h3>
                  <p>Rating: { game.rating } / 5</p>
                </div>
                <Info>
                  <h3>Platforms</h3>
                  <Platforms>
                    { game.platforms.map(data => (
                      <p key={data.platform.id} className="platform">{ data.platform.name }</p>
                    )) }
                  </Platforms>
                </Info>
              </Stats>
              <Media>
                <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, 1280)} alt={game.background_image} />
              </Media>
              <Description>
                <p>{ game.description_raw }</p>
              </Description>
              <div className="gallery">
                {screen.results.map(screen => (
                  <img src={smallImage(screen.image, 1280)} key={screen.id} alt={screen.image} />
                ))}
              </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, .5);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: .5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
  }
`;
const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: #fff;
  position: absolute;
  left: 10%;
  color: #000;
  img {
    width: 100%;
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
  p {
    margin: 0 1rem;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0;
`;

export default GameDetail;