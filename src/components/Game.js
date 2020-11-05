import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Item from "./Item"
import useInterval from "../hooks/use-interval.hook"
import useDocTitleHook from "../hooks/use-docTitle.hook"
import useKeyDown from "../hooks/use-keyDown.hook"

import cookieSrc from "../cookie.svg";
const items = [
  { id: "cursor", name: "Cursor", cost: 10, value: 1 },
  { id: "grandma", name: "Grandma", cost: 100, value: 10},
  { id: "farm", name: "Farm", cost: 1000, value: 80 },
];

const Game = () => {
  // TODO: Replace this with React state!
  const [numCookies, setNumCookies] = useState(100)
  const [purchasedItems, setPurchasedItems] = useState({cursor: 0, grandma:0, farm: 0})
  const handlePurchase = (item) => {
    if(item.cost <= numCookies) {
    setNumCookies(numCookies - item.cost)
    setPurchasedItems({...purchasedItems, [item.id]: purchasedItems[item.id] + 1});
    }
    else {
      alert("Need more dought mate.")
    }
  };
  
  const cookieGenerator = (purchasedItems) => {
   const total = purchasedItems.cursor * 1 + purchasedItems.grandma * 10 + purchasedItems.farm * 80
   return total
  }

  useDocTitleHook(`You're at ${numCookies}`, "Cookie Clicker Idle Game")

  useInterval(() => {
    const numOfGeneratedCookies = cookieGenerator(purchasedItems);
    setNumCookies(numCookies + numOfGeneratedCookies)
  }, 1000);

  const handleCookie = () => {
    setNumCookies(numCookies + 1)
    console.log("+1");
  };

useKeyDown("Space", handleCookie);
  
  return (
    <Wrapper>
      <GameArea>
        <Indicator>
          <Total>{numCookies} cookies</Total>
          {cookieGenerator(purchasedItems)} cookies automatically baked per second
        </Indicator>
        <Button>
          <Cookie 
          src={cookieSrc}
          onClick={handleCookie} />
        </Button>
      </GameArea>

      <ItemArea>
        <SectionTitle>Items:</SectionTitle>
        {items.map((item, index) => {
          return <Item 
            item={item}
            id={item.id}        
            name={item.name}
            cost={item.cost}
            value={item.value}
            isFocused={item.isFocused}
            purchasedItems={purchasedItems}
            handleClick={handlePurchase} 
            index={index}
          />
        })}
        {/* TODO: Add <Item> instances here, 1 for each item type. */}
      </ItemArea>
      <HomeLink to="/">Return home</HomeLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const GameArea = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;
const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Cookie = styled.img`
  width: 200px;
`;

const ItemArea = styled.div`
  height: 100%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.h3`
  text-align: center;
  font-size: 32px;
  color: yellow;
`;

const Indicator = styled.div`
  position: absolute;
  width: 250px;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
`;

const Total = styled.h3`
  font-size: 28px;
  color: lime;
`;

const HomeLink = styled(Link)`
  position: absolute;
  top: 15px;
  left: 15px;
  color: #666;
`;

export default Game;
