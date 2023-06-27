const LoopEx = () => {
    
    const arr = [1,2,3,4,5,6]

    const result = arr.map((ele,idx)=>{

        if(ele%2===0){
            return <li key={idx}>{ele}</li>
        }
       
    })
    
    

    // Warning: Each child in a list should have a unique "key" prop.
    // React의 component -> JSX -> HTML
    // React는 교체할부분만 교체해주는 특징이있다.(Virtual DOM)
    // -> 각각의 Component에 내부적으로 키라는 값을 만들어서 관리한다.
    // {arr.map(ele => <li>AAA</li>)} 의 경우 아직 내용물이 나오지않았다.
    // 키가 없게되서 나중에 바꿀수가 없다.
    // 반복문이면 키라는 속성이 있어야된다.
    // 키값을 이용해서 component를 바꾼다
    // react의 반복은 항상 완벽한 Data를 만들어서 반복한다.
    return (
        <>       
        <ul>
          {result}
        </ul>
        <hr/>

        </>

      );
}
 
export default LoopEx;
