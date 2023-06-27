import styled from "styled-components";

const ThumImg = styled.img`
    width: 100px;
    height: 100px;    
`
const BlueDiv = styled.div`
    background-color: blue
`



const ProductDetail = ({product}) => {
    
    const {pno,pname,price,imgFile} = product
   

    return ( 
        <li>
            <BlueDiv>PNO {pno} </BlueDiv>
            <div>NAME {pname} </div>
            <div>{price} </div>
            <button>BUY</button>
            <div><ThumImg src={require(`../../image/${imgFile}`)}></ThumImg></div>
        </li>
     );
}
 
export default ProductDetail;