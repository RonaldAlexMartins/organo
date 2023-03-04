const ListaSuspensa = (props) => {
  console.log(props.item);

  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select>
        {props.itens.map((item, index) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
