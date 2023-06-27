// components => 반복사용되는것들이 잇는곳
// 함수형으로 만들어지고
// 다른곳에 사용시 커스텀태그로 추가해주면됨.
// react component => 하나의 단위 태그로 감싸야된다.
// react에서 데이터 표현은 {}로 감싼다.
// props에서부터 전달 구조분해 할당은 가능하다.
// 구조분해 할당 => 내가 원하는 데이터만 분해해서 쓰겠다라고 선언
// Component는 JSX를 반환해주면된다.
// JSX에는 결과물을 만드는거라 문을 쓸수 없다
// 반복할수 있는 => 객체 또는 배열 => <jsx>
const HelloWorld = ({ product }) => {

    if (!product) {

        return <h1>상품이 없습니다.</h1>
    }

    const { pno, pname, price } = product || {pno:-1,pname:'',price:0}

    return (<div>
        <div>{pno}</div>
        <div>{pname}</div>
        <div>{price}</div>
        { price >= 5000 ?
            <div>비싸요</div>: <div>싸요</div>
        }
    </div>);
}

export default HelloWorld;