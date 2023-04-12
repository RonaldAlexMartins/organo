import Colaborador from "../colaborador";
import "./Time.css";

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria, backgroundImage: 'url(/imagens/fundo.png)' }  
  return (
    
    props.colaboradores.length > 0 && <section className="time" style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map( (colaborador, indice) => <Colaborador corDeFundo = {props.corPrimaria} key={indice} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
      </div>            
    </section>

  );
};

export default Time;