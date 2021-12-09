import React, { useEffect } from 'react';

import { Container } from './styles';
import { api } from '../../services/api';

export function TransactionTable() {
  useEffect(() => {
    api.get('transactions').then((response) => response.data);
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Aplicação Web</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>01/12/2021</td>
          </tr>

          <tr>
            <td>Aluguel do apartamento</td>
            <td className="withdrawn">- R$1.500</td>
            <td>Casa</td>
            <td>05/12/2021</td>
          </tr>

          <tr>
            <td>Hamburguer</td>
            <td className="withdrawn">- R$63.00</td>
            <td>Alimentação</td>
            <td>08/12/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
