import { combineReducers } from 'redux';
import userInfo from './userInfoRducer';
import userProfessional from './userProfessionalReducer';

const rootReducer = combineReducers({ userInfo, userProfessional });

export default rootReducer;
