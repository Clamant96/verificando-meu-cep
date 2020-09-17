import React from 'react';

import ApiCep from '../../services/api';

import './style.css';

class Pesquisa extends React.Component {
    constructor() {
        super();

        this.state = {
            rua: '',
            bairro: '',
            cidade: '',
            estado: ''
        }
    }

    handleDados(evento) {

    // AMRAXENO O VALOR DIGITADO PELO USUARIO
    const cep = evento.target.value;

        // ACESSA O ARQUIVO E VERIFICA O CEP
        ApiCep.SearchCep(cep).then((res) => {
            let rua = res.data.logradouro;
            let bairro = res.data.bairro;
            let cidade = res.data.localidade;
            let estado = res.data.uf;

            // ATRIBUINDO OS VALOR BUSCADO NAS VARIAVEIS
            this.setState({
                rua: rua,
                bairro: bairro,
                cidade: cidade,
                estado: estado
            })
        })
    }

render() {
    return(
        <div id="container">
            <div id="caixaCEP">
                <p>CEP: </p> 
                <input id="inputCEP" type="text" onBlur={ this.handleDados.bind(this) } placeholder="CEP" />

            </div>

            <div id="caixaEndereco">
                <p>Endereco: </p>
                <input id="inputEndereco" type="text" value={ this.state.rua} disabled/>
                    
            </div>

            <div id="caixaBairro">
                <p>Bairro: </p>
                <input id="inputBairro" type="text" value={ this.state.bairro} disabled/>

            </div>

            <div id="caixaCidade">
                <p>Cidade: </p>
                <input id="inputCidade" type="text" value={ this.state.cidade} disabled/>

            </div>

            <div id="caixaUF">
                <p>UF: </p>
                <input id="inputUF" type="text" value={ this.state.estado} disabled/>
            </div>

        </div>       
      
    )
  };
}

export default Pesquisa;