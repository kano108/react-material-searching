import { useState } from "react";
import "./App.css";
import SearchBar from "material-ui-search-bar";

const getdata = () => {
  const list = localStorage.getItem("kishan");
  if (list) {
    return JSON.parse(localStorage.getItem("kishan"));
  } else {
    return [];
  }
};

function App() {
  const [input, setInput] = useState("");
  const [item, setItems] = useState(getdata());
  const [searchInput, setSearchInput] = useState("");
  const submit = (e) => {
    e.preventDefault();
    const allData = {
      Id: new Date().getTime().toString(),
      Name: input,
    };
    setItems([...item, allData]);
    localStorage.setItem("kishan", JSON.stringify([...item, allData]));
    setInput("");
  };

  // const requestsearch = (searchedVal = String) => {

  //   const filter_value = item.filter((elem) => {
  //     return elem.Name.toLowerCase().includes(searchedVal.toLowerCase());
  //   });
  //   setItems(filter_value);
  // };

  const requestsearch = (searchedVal) => {
    console.log("searchedVal", searchedVal);
    const filter_value = item.filter((elem) => {
      if (searchedVal) 
      {
        return elem.Name.toLowerCase().includes(searchedVal.toLowerCase());
      } 
      else 
      {
       
        return getdata()
      }
    });
    if(searchedVal.length==0)
    {
      setItems(getdata());
    }
    else{
      setItems(filter_value);

    }
  };

  // const cancelSearch = () => {
  //   setSearchInput("");
  //   requestsearch(searchInput);

  // };

  return (
    <div className="App">
      <h1>React Material-Ui Searching</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <br />
      <button type="submit" onClick={(e) => submit(e)}>
        Submit
      </button>
      <br />
      <br />
      <SearchBar value={searchInput} onChange={(e) => requestsearch(e)} />
      {item.map((elem) => {
        return <h1>{elem.Name}</h1>;
      })}
    </div>
  );
}

export default App;
