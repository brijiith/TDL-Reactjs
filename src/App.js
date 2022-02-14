
import './App.css';
import { useState } from "react"
import List from './components/List';
import { upload } from '@testing-library/user-event/dist/upload';
function App() {
  const[ currentItem, setCurrentItem]= useState(null)
  const[ itemList , updateItemList] = useState([])
  const onChangeHandler= e => {
      console.log("current value ", e.target.value)
      setCurrentItem(e.target.value)
  }
      const addItemList= () => {
        updateItemList([...itemList, {item:currentItem, key:Date.now()}])
        console.log("list items",itemList)
        setCurrentItem("")
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className= "Wrapper">
      <div className="header">
    <h2>To Do</h2>
    <input value ={currentItem} onChange={onChangeHandler}/>
    <button onClick={addItemList} className="addBtn">Add</button>
  </div>  
  <List itemList={itemList} updateItemList={updateItemList}/>
  </div>
      </header>
  
    </div>
  );
}

export default App;
