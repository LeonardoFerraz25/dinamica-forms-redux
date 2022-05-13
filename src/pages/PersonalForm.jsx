import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';
import {
  userCPF,
  userEmail,
  userEndereco,
  userCidade,
  userEstado,
  userName } from '../redux/actions/userActions';

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    const { nome, email, cpf, endereco, cidade, estado } = this.state;
    const { history, setUserName, setUserEmail, setUserCpf, setUserCidade,
      setUserEndereco, setUserEstado } = this.props;

    setUserName(nome);
    setUserEmail(email);
    setUserCpf(cpf);
    setUserEndereco(endereco);
    setUserCidade(cidade);
    setUserEstado(estado);

    history.push('/professionalform');
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado } = this.state;
    const states = [
      'Rio de Janeiro',
      'Minas Gerais',
      'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
    return (
      <fieldset>
        <Input
          label="nome: "
          type="text"
          onChange={ this.handleChange }
          value={ nome }
          name="nome"
          required
        />
        <Input
          label="email: "
          type="text"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          required
        />
        <Input
          label="cpf: "
          type="text"
          onChange={ this.handleChange }
          value={ cpf }
          name="cpf"
          required
        />
        <Input
          label="endereco: "
          type="text"
          onChange={ this.handleChange }
          value={ endereco }
          name="endereco"
          required
        />
        <Input
          label="cidade: "
          type="text"
          onChange={ this.handleChange }
          name="cidade"
          value={ cidade }
        />
        <Select
          defaultOption="Selecione"
          onChange={ this.handleChange }
          value={ estado }
          label="Estado: "
          id="estado"
          name="estado"
          options={ states }
        />
        <Button
          type="button"
          label="Enviar"
          onClick={ this.handleSubmit }
        />
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispach) => ({
  setUserName: (nome) => dispach(userName(nome)),
  setUserEmail: (email) => dispach(userEmail(email)),
  setUserCpf: (cpf) => dispach(userCPF(cpf)),
  setUserEndereco: (endereco) => dispach(userEndereco(endereco)),
  setUserCidade: (cidade) => dispach(userCidade(cidade)),
  setUserEstado: (estado) => dispach(userEstado(estado)),
});

PersonalForm.propTypes = {
  setUserName: PropTypes.func.isRequired,
  setUserEmail: PropTypes.func.isRequired,
  setUserCpf: PropTypes.func.isRequired,
  setUserEndereco: PropTypes.func.isRequired,
  setUserEstado: PropTypes.func.isRequired,
  setUserCidade: PropTypes.func.isRequired,
  history: PropTypes.objectOf.isRequired,
};

export default connect(null, mapDispatchToProps)(PersonalForm);
