import ProductDetail from "./ProductDetail";

const ProducList = () => {

    // 주로 데이터를 가지고있음 하위 컴포넌트들을 감싸고있다
    // 컨테이너형 컴포넌트 
    const products = [
        { pno: 1, pname: '상품1', price: 3000, imgFile:'c01.jpg'},
        { pno: 2, pname: '상품2', price: 5000, imgFile:'c02.jpg' },
        { pno: 3, pname: '상품3', price: 7000, imgFile:'c03.jpg' },
        { pno: 4, pname: '상품4', price: 9000, imgFile:'c04.jpg' },
        { pno: 5, pname: '상품5', price: 1000, imgFile:'c05.jpg' },
    ]


    return (
        <ul className="productList">
            {products.map(p =>
                <ProductDetail
                    key={p.pno}
                    product={p} />
                
            )}
        </ul>
    );
}

export default ProducList;