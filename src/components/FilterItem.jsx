

export default function FilterItem(props) {
  return (
    <div className="searchItems">
      <div>{props.filterByItems}</div>
      <div className="remove">
        <img src="./images/icon-remove.svg" alt="remove icon" />
      </div>
    </div>
  );
}
