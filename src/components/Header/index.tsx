import React from 'react';

import logoImg from '../../assets/logo.svg';

import { SHeader, SContainer } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <SHeader>
      <SContainer>
        <img src={logoImg} alt="Logo DT Money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </SContainer>
    </SHeader>
  );
}
