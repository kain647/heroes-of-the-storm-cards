import React from "react";
import Slider from "react-slick";
import {
  HeroCard,
  Content,
  BoxImage,
  NavigationButtons,
  HeroTable,
  AbilitiesMain,
  Button,
  AbilitiesSection,
  Abilities,
  TableRow,
  TableH,
  TableD,
  ContainerBackground,
  Header
} from "./styled";

const Heroes = () => {
  const heroesCards = [
    {
      photoHero: "hogger.jpg",
      nameHero: "Hogger",
      role: "Bruiser",
      difficulty: "Medium",
      universe: "Warcraft",
      primary: ["blowSquare.png", "dynamiteSquare.png", "wildSquare.png"],
      heroic: ["hoardaPult.png", "shockwaveSquare.png"],
      trait: ["hoardSquare.png"]
    },
    {
      photoHero: "murky.jpg",
      nameHero: "Murky",
      role: "Melee Assassin",
      difficulty: "Hard",
      universe: "Warcraft",
      primary: ["slime.png", "pufferfish.png", "safetyBubble.png"],
      heroic: ["marchOfTheMurlocs.png", "octoGrab.png"],
      trait: ["spawnEgg.png"]
    },
    {
      photoHero: "nova.jpg",
      nameHero: "Nova",
      role: "Ranged Assassin",
      difficulty: "Medium",
      universe: "StarCraft",
      primary: ["snipe.png", "pinningShot.png", "holoDecoy.png"],
      heroic: ["tripleTap.png", "precisionStrike.png"],
      trait: ["permanentCloak.png"]
    },
    {
      photoHero: "liMing.jpg",
      nameHero: "Li-Ming",
      role: "Ranged Assassin",
      difficulty: "Medium",
      universe: "Diablo",
      primary: [
        "magicMissiles.png",
        "arcaneOrb.png",
        "teleport.png",
        "archonPurePower.png"
      ],
      heroic: ["disintegrate.png", "waveOfForce.png"],
      trait: ["criticalMass.png"]
    },
    {
      photoHero: "butcher.jpg",
      nameHero: "The Butcher",
      role: "Melee Assassin",
      difficulty: "Medium",
      universe: "Diablo",
      primary: ["hamstring.png", "butchersBrand.png", "ruthlessOnslaught.png"],
      heroic: ["lambToTheSlaughter.png", "furnaceBlast.png"],
      trait: ["freshMeat.png"]
    },
    {
      photoHero: "sylvanas.jpg",
      nameHero: "Sylvanas",
      role: "Ranged Assassin",
      difficulty: "Medium",
      universe: "Warcraft",
      primary: [
        "witheringFire.png",
        "shadowDagger.png",
        "hauntingWave.png",
        "possession.png"
      ],
      heroic: ["wailingArrow.png", "mindControl.png"],
      trait: ["blackArrows.png"]
    }
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <ContainerBackground>
      <img src={`upload/background.jpg`} className="fullscreen" />
      <Header>
        <img src={`upload/logo.png`} />
      </Header>
      <HeroCard>
        <Slider {...settings}>
          {heroesCards.map(heroesCard => {
            return <HeroesCard {...heroesCard} key={heroesCard.photoHero} />;
          })}
        </Slider>
      </HeroCard>
    </ContainerBackground>
  );
};

const HeroesCard = React.memo(props => {
  const {
    photoHero,
    primary,
    heroic,
    trait,
    nameHero,
    role,
    difficulty,
    universe
  } = props;
  return (
    <Content>
      <BoxImage>
        <img src={`upload/${photoHero}`} alt="hogger" />
      </BoxImage>
      <NavigationButtons>
        <HeroTable>
          <h1>{nameHero}</h1>
          <table
            style={{
              border: "1px solid #5266cc",
              width: "80%",
              borderCollapse: "collapse",
              backgroundColor: "rgba(10,17,51,.9)",
              color: "#fff"
            }}
          >
            <tbody>
              <TableRow>
                <TableH>Role</TableH>
                <TableD>{role}</TableD>
              </TableRow>
              <TableRow>
                <TableH>Difficulty</TableH>
                <TableD>{difficulty}</TableD>
              </TableRow>
              <TableRow>
                <TableH>Universe</TableH>
                <TableD>{universe}</TableD>
              </TableRow>
            </tbody>
          </table>
        </HeroTable>
        <AbilitiesMain>
          <AbilitiesSection>
            <h2>PRIMARY ABILITIES</h2>
            <Abilities>
              {primary.map(item => (
                <img src={`upload/${item}`} />
              ))}
            </Abilities>
          </AbilitiesSection>
          <AbilitiesSection className="heroic">
            <h2>HEROIC ABILITIES</h2>
            <Abilities>
              {heroic.map(item => (
                <img src={`upload/${item}`} />
              ))}
            </Abilities>
          </AbilitiesSection>
          <AbilitiesSection className="trait">
            <h2>TRAIT</h2>
            <Abilities>
              {trait.map(item => (
                <img src={`upload/${item}`} />
              ))}
            </Abilities>
          </AbilitiesSection>
        </AbilitiesMain>
        <Button>Learn more</Button>
      </NavigationButtons>
    </Content>
  );
});

export default Heroes;
