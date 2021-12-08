import React from 'react';

import logoImg from '../../assets/logo.svg';

import { SHeader, SContainer } from './styles';

export function Header() {
  return (
    <SHeader>
      <SContainer>
        <img src={logoImg} alt="Logo DT Money" />
        <button type="button">Nova Transação</button>
      </SContainer>
    </SHeader>
  );
}
