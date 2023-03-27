import "./ListaSuspensa.css";

const ListaSuspensa = (props, obrigatorio = false) => {
  return (<div className="lista-suspensa">
      <label>{props.label}</label>
      <select required={obrigatorio} value={props.valor} onChange={(evento) => props.aoAlterado(evento.target.value)}>
        <option value=""></option>
        {props.itens.map((item) => (<option key={item}>{item}</option>))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
