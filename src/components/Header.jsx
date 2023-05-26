
const Header =({keywords, deleteKeywords, clearAll})=> {
    return (
        <div className="header-container">
            <ul>
            {keywords.map((key,id) => {
                return <li key={id}>{key}
                <button className="close" onClick={() => {
                    deleteKeywords(key)
                }}>
                    <img src="./images/icon-remove.svg" alt="close" />
                </button>
                </li>
            })}
            </ul>
            <div
            onClick={() => {
                clearAll();
            }}
            >clear</div>
        </div>
    )
}

export default Header