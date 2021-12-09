import React from 'react';
import { Summary } from '../Summary/index';
import { TransactionTable } from '../TransactionsTable/index';

import { Container } from '../Dashboard/styles';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
}
