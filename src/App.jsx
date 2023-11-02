import { useState } from "react";
function App() {
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState(""); // input을 위한 value
  const handleForEach = function () {
    let temp = "";
    array.forEach(function (item, index) {
      temp += `${index}: ${item} / `;
    });
    setResult(temp);
  };
  const handleFilter = function () {
    const filtered = array.filter((item, index) => item.includes(query));
    setResult(filtered.join(", "));
  };

  const handleMap = function () {
    const mapped = array.map((value, idx) => {
      return value.toUpperCase();
    });
    setResult(mapped.join(", "));
  };

  const handleReduce = function () {
    const reduced = array.reduce(function (acc, cur) {
      //acc 누적된값, cur 현재값
      return `${acc}+ ${cur}`;
    });
    setResult(reduced);
  };

  const handlePush = function () {
    if (query.length <= 0) {
      alert("추가하시려는 값을 입력해주세요");
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handlePop = function () {
    const newArr = [...array];
    newArr.pop();

    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handleSlice = function () {
    //slice는 새로운 배열
    const newArr = array.slice(1, 4);
    // console.log(newArr)

    setResult(newArr.join(", "));
  };

  const handleSplice = function () {
    const newArr = [...array];
    newArr.splice(2, 2, "kiwi", "lime"); //요소 두 개를 제외하고, 다른 요소를 추가

    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handleIndexOf = function () {
    const newArr = array.indexOf(query);

    setResult(newArr);
  };

  const handleIncludes = function () {
    const newArr = array.includes(query);
    setResult(newArr.toString());
    //includes boolean은 html 상에서 출력이 안되므로 변환한번해주어야함
  };

  const handleFind = function () {
    const newArr = array.find((arrays) => {
      return arrays.includes(query);
    });
    if (!newArr) {
      setResult("not Found");
    } else {
      setResult(newArr);
    }
  };

  const handleSome = function () {
    // const newArr = array.some((query) => array.includes(query))
    //  setResult(array.some(query => query === array).toString())
    const newArr = array.some((arrays) => {
      console.log(arrays);

      return arrays.includes(query);
    });
    console.log(newArr);
    setResult(newArr.toString());
  };

  const handleEvery = function () {
    const newArr = array.every((arrays)=>{
      if(query >2){
        return true
      }else{
        return false
      }
    })
    setResult(newArr.toString())
  };

  const handleSort = function () {
    const newArr = array.sort();
    setResult(newArr.join(", "));
  };

  const handlejoin = function () {
    const newArr = array.join(", ");
    setResult(newArr);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Standard반 배열 API 테스트</h1>
      <input
        value={query}
        onChange={function (e) {
          setQuery(e.target.value);
        }}
      />
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handlejoin}>join</button>
      </div>
      <div>
        <h3>원본배열</h3>
        <p>{array.join(", ")}</p>
      </div>
      <div>
        <h3>결과물</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}
export default App;
