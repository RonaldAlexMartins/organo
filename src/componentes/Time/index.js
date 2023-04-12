import Colaborador from "../colaborador";
import "./Time.css";

const Time = (props, time) => {
  const css = { backgroundColor: time.corSecundaria, backgroundImage: 'url(/imagens/fundo.png)' }  
  return (
    
    props.colaboradores.length > 0 && <section className="time" style={css}>
      <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map( (colaborador, indice) => <Colaborador corDeFundo = {time.corPrimaria} key={indice} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
      </div>            
    </section>

  );
};

export default Time;