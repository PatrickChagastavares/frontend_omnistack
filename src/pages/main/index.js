import React, { Component } from 'react';
import api from "../../services/api";

import logo from "../../assets/logo.png"
import "./styles.css";

export default class main extends Component {
    state = {
        newBox: "",

    };

    handleSubmit = async e => {
        e.preventDefault();

        //solicitando um resposta da API, criação de uma pasta/boxes
        const response = await api.post("/boxes", {
            title: this.state.newBox,
        });

        //solicitando requisição e direcionado para a box criada!
        this.props.history.push(`/boxes/${response.data._id}`)
    };

    handleInputChange = (e) => {
        //pegando valor do texto digitado pelo usuario, na tela inicial de criação da box
        this.setState({ newBox: e.target.value });
    };

    render() {
        return (
            <div id="main-container">
                <form onSubmit={this.handleSubmit} >
                    <img src={logo} alt="" />
                    <input
                        placeholder="criar um box"
                        value={this.state.newBox}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Criar</button>
                </form>
            </div>
        );
    };
}
