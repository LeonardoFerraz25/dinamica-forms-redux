import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    // Recupere as informações do seu estado criado no Redux
    const {
      nome,
      email,
      cpf,
      endereco,
      cidade,
      estado,
      curriculo,
      cargo,
      descricao,
    } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {nome}
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { endereco }
        </div>
        <div>
          Cidade:
          { cidade }
        </div>
        <div>
          Estado:
          { estado }
        </div>
        <div>
          Currículo:
          { curriculo }
        </div>
        <div>
          Cargo:
          { cargo }
        </div>
        <div>
          Descrição do cargo:
          { descricao }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nome: state.userInfo.nome,
  email: state.userInfo.email,
  cpf: state.userInfo.cpf,
  endereco: state.userInfo.endereco,
  cidade: state.userInfo.cidade,
  estado: state.userInfo.estado,
  curriculo: state.userProfessional.curriculo,
  cargo: state.userProfessional.cargo,
  descricao: state.userProfessional.descricao,
});

FormDataDisplay.propTypes = {
  nome: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  endereco: PropTypes.string.isRequired,
  cidade: PropTypes.string.isRequired,
  estado: PropTypes.string.isRequired,
  curriculo: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(FormDataDisplay);
