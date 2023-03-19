import Colaborador from "../colaborador";
import "./Time.css";

const Time = (time, colaboradores) => {
  const css = { backgroundColor: time.corSecundaria, backgroundImage: 'url(/imagens/fundo.png)' }  
  return (
    
    colaboradores.length > 0 && <section className="time" style={css}>
      <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>
      <div className="colaboradores">
        {colaboradores.map( colaborador => <Colaborador corDeFundo = {time.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
      </div>            
    </section>

  );
};

export default Time;