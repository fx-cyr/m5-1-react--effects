import React, {useEffect, useRef}from "react";
import styled from "styled-components";

const Item = (props) => {
let {id, name, cost, value, item, index} = props
let { purchasedItems } = props
const {handleClick} = props
const focusRef = useRef()

useEffect(()=> {
    if (index === 0) {
        focusRef.current.focus()
    }
}, [])
// console.log(purchasedItems)
// console.log(props)
    return (
        <Wrapper>
            <ItemInfo>    
                <ItemButton ref={focusRef} onClick={(ev) => handleClick(item)}>{name}</ItemButton>
    <ItemDescription>Cost: {cost} cookie(s). Produces {value} cookies/second.</ItemDescription>
            </ItemInfo>
            <ItemCount>{purchasedItems[item.id]}</ItemCount>
        </Wrapper>
    )
}

const Wrapper = styled.div`
margin:10px;
display:flex;
justify-content: space-between;
align-items:center;
`;

const ItemInfo = styled.p`
display:block;
`;

const ItemButton = styled.button`
background: #222;
color:white;
font-size:22px;
cursor: pointer;
margin-bottom:10px;
padding:5px 10px;
text-align:center;
border: 2px solid peru;
border-radius: 5px;
`;

const ItemDescription = styled.p`
`;

const ItemCount = styled.h1`
padding-left:30px;
`;

export default Item;