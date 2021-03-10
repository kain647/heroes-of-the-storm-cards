import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: center;
	margin-bottom: 50px;
  img {
    width: 350px;
    height: auto;
    z-index: 1;
  }
`;
export const ContainerBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  img.fullscreen {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 0;
  }
`;
export const HeroCard = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: auto;
  box-sizing: border-box;
  box-shadow: 0 0 15px 6px rgb(0 0 0 / 40%);
  margin: 0 0 auto;
  z-index: 1;
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  flex-direction: column;
  z-index: 1;
`;
export const BoxImage = styled.div`
  display: flex;
  box-sizing: border-box;
  img {
    width: 100%;
    height: auto;
  }
`;
export const NavigationButtons = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #0a1133;
`;
export const HeroTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 100%;
  margin-bottom: 15px;
  h1 {
    color: #fff;
    font-weight: 700;
    margin-bottom: 20px;
    font-size: 32px;
    text-shadow: 0 0 12px #011933;
    text-align: center;
  }
`;
export const AbilitiesMain = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  text-transform: uppercase;
  font-weight: 700;
  border: 1px solid #39f;
  color: #39f;
  background-color: rgba(0, 26, 51, 0.9);
  font-size: 18px;
  padding: 15px;
  cursor: pointer;
  outline: none;
  margin-bottom: 20px;
  :hover {
    background-color: #036;
    color: #fff;
  }
`;
export const AbilitiesSection = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 8px;
  margin-right: 20px;
  padding: 10px;
  color: #fff;
  img {
    width: 54px;
    height: 54px;
    border-radius: 54px;
  }
`;
export const Abilities = styled.div`
  display: flex;
  img {
    margin-right: 5px;
  }
`;
export const TableRow = styled.tr`
  box-sizing: border-box;
  height: 40px;
`;
export const TableH = styled.th`
  border-right: 1px solid #5266cc;
  width: 35%;
  text-align: left;
  padding-left: 10px;
  opacity: 0.9;
  border-bottom: 1px solid #528fcc;
  background: linear-gradient(
    0deg,
    rgba(51, 85, 255, 0.2) 0,
    rgba(0, 77, 153, 0) 50%,
    rgba(51, 85, 255, 0)
  );
`;
export const TableD = styled.td`
  align-items: center;
  opacity: 0.9;
  border-bottom: 1px solid #528fcc;
  text-align: left;
  padding-left: 10px;
  background: linear-gradient(
    0deg,
    rgba(51, 85, 255, 0.2) 0,
    rgba(0, 77, 153, 0) 50%,
    rgba(51, 85, 255, 0)
  );
`;
