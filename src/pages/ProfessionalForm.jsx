import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { setCargo,
  setCurriculo, setDescricao } from '../redux/actions/professionalAction';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculo: '',
      cargo: '',
      descricao: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    const { curriculo, cargo, descricao } = this.state;
    const { history, setUserCurriculo, setUserCargo, setUserDescricao } = this.props;

    setUserCurriculo(curriculo);
    setUserCargo(cargo);
    setUserDescricao(descricao);

    history.push('/formdisplay');
  }

  render() {
    const { curriculo, cargo, descricao } = this.state;
    return (
      <fieldset>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculo }
          name="curriculo"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="cargo"
          type="text"
          value={ cargo }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="descricao"
          maxLength="500"
          onChange={ this.handleChange }
          value={ descricao }
          required
        />
        <Button
          label="enviar"
          onClick={ this.handleSubmit }
        />
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispach) => ({
  setUserCurriculo: (curriculo) => dispach(setCurriculo(curriculo)),
  setUserCargo: (cargo) => dispach(setCargo(cargo)),
  setUserDescricao: (descricao) => dispach(setDescricao(descricao)),
});

ProfessionalForm.propTypes = {
  setUserCurriculo: PropTypes.func.isRequired,
  setUserCargo: PropTypes.func.isRequired,
  setUserDescricao: PropTypes.func.isRequired,
  history: PropTypes.objectOf.isRequired,
};

export default connect(null, mapDispatchToProps)(ProfessionalForm);
