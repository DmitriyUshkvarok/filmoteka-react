import styled from 'styled-components';
import playIcon from '../../images/iconfinder-play.svg';

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 70px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ColumnInfo = styled.div`
  max-width: 50%;
  padding: 10px;
`;

export const PosterMovie = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  top: 10%;
  right: -50%;
  z-index: -1;
  transform: translate(-50%, 0);
  opacity: 0.1;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  -webkit-transform: translate(-50%, 0);
  -moz-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
  -o-transform: translate(-50%, 0);

  @media screen and (max-width: 1000px) {
    top: 15%;
  }

  @media screen and (max-width: 768px) {
    top: 16%;
  }

  @media screen and (max-width: 500px) {
    top: 20%;
  }
`;

export const BtnBackDetailsWrapper = styled.div`
  margin-top: 190px;

  @media screen and (max-width: 705px) {
    margin-top: 230px;
  }

  @media screen and (max-width: 380px) {
    margin-top: 250px;
  }
`;

export const BtnBack = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: var(--color);
  margin-top: 10px;

  &:hover {
    background-color: rgb(243, 165, 21);
  }
`;

export const IconBack = styled.img`
  margin-right: 10px;
`;

export const InfoTitle = styled.h1`
  max-width: 700px;
  font-size: 70px;
  text-align: left;
  color: var(--color);
  text-shadow: 0 0 1px black;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 27px;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
    text-align: center;
    margin-top: 20px;
  }
`;

export const ScoreDetails = styled.p`
  font-size: 20px;
  color: gold;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 25px;
    text-align: center;
    margin-top: 20px;
  }
`;

export const OverviewTitle = styled.h2`
  font-size: 40px;
  color: var(--color);
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 27px;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
    text-align: center;
    margin-top: 20px;
  }
`;

export const Overview = styled.p`
  max-width: 600px;
  font-size: 20px;
  color: var(--color);
  margin-bottom: 10px;
  text-align: justify;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const GenreListDetails = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  color: var(--border-color);
`;

export const ColumnImg = styled.div`
  position: relative;
  cursor: pointer;
  max-width: 50%;
  padding: 10px;
  border-radius: 10px;
  overflow: hidden;

  &:hover::before {
    pointer-events: none;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
    transition: all 0.4s;
  }

  &:hover::after {
    pointer-events: none;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    background: url(${playIcon}) no-repeat center center;
    background-size: contain;
    transition: all 0.4s;
  }

  &:hover .detalisImg {
    transform: scale(1.1);
  }

  @media screen and (max-width: 700px) {
    order: -1;
  }
`;

export const DetalisImg = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s;
  border-radius: 10px;
`;

export const ReviewList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Cast = styled.div`
  font-size: 30px;
  color: gold;
  transition: color 0.4s;

  &:hover {
    color: var(--hover-color-text);
  }
`;

export const Review = styled.div`
  font-size: 30px;
  color: gold;
  transition: color 0.4s;

  &:hover {
    color: orange;
  }
`;

export const VideoBackdrop = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const VideoModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 500px;
  width: 1100px;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.57);
  border-radius: 3px;
  box-shadow: 0 0 5px 5px rgba(201, 162, 45, 0.7),
    inset 0 0 30px 10px rgba(201, 162, 45, 0.7);
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

export const IconBackModal = styled.div`
  position: absolute;
  display: flex;
  fill: orange;
  width: 100px;
  height: 50px;
  top: 1%;
  left: 1%;
  cursor: pointer;
`;

export const AddMoviesBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 100%;
  padding: 5px;
  color: var(--color);
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  background: var(--background-header);
  border: 1px solid var(--border-color);
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;

  &:disabled {
    background: gray;
    opacity: 0.4;
  }
`;

export const AuthBtnText = styled.p`
  font-size: 10px;
  color: var(--color);
  margin-top: 5px;
`;
