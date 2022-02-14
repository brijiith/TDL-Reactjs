import './List.css'
function List (props) {
const deleteItem =key => {
const newList =props.itemList.filter(itemObj=>{
   return itemObj.key !== key
})
props.updateItemList(newList)
}
    return (<div>
        {props.itemList.map( itemObj=>{
            return (
            <div className="Item"> 
                <p>{itemObj.item}</p> 
                <button onClick={()=> deleteItem(itemObj.key)}>x</button>
             </div>)
        })}
    </div>
    )
}
export default List 