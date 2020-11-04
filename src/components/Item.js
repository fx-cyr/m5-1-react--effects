import React from "react";
import styled from "styled-components";

const Item = (props) => {
let {id, name, cost, value} = props
let { numOwned } = props
console.log(numOwned.cursor)
console.log(props)
    return (
        <Wrapper>
            <ItemInfo>    
                <ItemName>{name}</ItemName>
                <ItemDescription>Cost: {cost} cookie(s). Produces {value} cookies/second.</ItemDescription>
            </ItemInfo>
            <ItemCount>{numOwned[id]}</ItemCount>
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

const ItemName = styled.h2`
`;

const ItemDescription = styled.p`
`;

const ItemCount = styled.h1`
padding-left:30px;
`;

export default Item;