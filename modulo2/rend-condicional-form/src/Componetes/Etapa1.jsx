import React from "react";

class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <label>
          <p>1. Qual o seu nome?</p>
          <input type= "text"/>
        </label>

        <label>
          <p>2. Qual sua idade?</p>
          <input type= "Number"/>
        </label>

        <label>
          <p>3. Qual seu email?</p>
          <input type= "text"/>
        </label>

        <p>4. Qual a sua ecolaridade?</p>
        <select>
          <option value="Ensino médio incompleto">
            Ensino médio incompleto
          </option>
          <option value="Ensino médio completo">Ensino médio completo</option>
          <option value="Ensino superior incompleto">
            Ensino superior incompleto
          </option>
          <option value="Ensino superior completo">
            Ensino superior completo
          </option>
        </select>
      </div>
    );
  }
}
export default Etapa1;
