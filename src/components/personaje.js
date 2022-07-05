import React, {useContext} from 'react';
import { Context } from '../Store/appContext'
import {  Link } from 'react-router-dom';

const personaje = () => {

    const { store, actions } = useContext(Context);

  return (
    <div>personaje</div>
  )
}

export default personaje