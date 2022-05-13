const INITTIAL_STATE = {
  curriculo: '',
  cargo: '',
  descricao: '',
};

function userProfessionalReducer(state = INITTIAL_STATE, action) {
  switch (action.type) {
  case 'CURRICULO':
    return { ...state, curriculo: action.payload };
  case 'CARGO':
    return { ...state, cargo: action.payload };
  case 'DESCRICAO':
    return { ...state, descricao: action.payload };
  default:
    return state;
  }
}

export default userProfessionalReducer;
