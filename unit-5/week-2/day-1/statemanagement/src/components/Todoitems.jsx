export const Todoitems = ({ items, toggle }) => {
    return (
        <div className={items.status ? " Green" : "red"} id="todoitems" >
            <h3>{items.task} </h3>
            <div> <p>{items.status ? "Done" : "Not Done"}</p>
                <button onClick={() => { toggle(items.id) }}>O</button>
            </div>
        </div>
    )
}