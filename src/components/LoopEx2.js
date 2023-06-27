// 페이지 처리시 사용하는 루프방법
const LoopEx2 = ({start,end}) => {

    console.log("start", start, "end", end)

    // 자바의 final 와 Javascript의 const 
    // 참조변수 일경우 참조하는 주소가 바뀌면 안된다.

    const arr =[]

    for(let i =start; i<=end; i++){
        arr.push(<li key={i}>AAA{i}</li>)
    }

    return (  
        <ul>
            {arr}
        </ul>
    );
}
 
export default LoopEx2;