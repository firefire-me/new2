import * as React from 'react';
import { useAccount, useConnect } from 'wagmi';

import { useIsMounted } from '@/hooks';
import App from '@/pages/components/Conn/config';

export const Connect = () => {
  const isMounted = useIsMounted();
  const { connector, isReconnecting } = useAccount();
  const { connect, connectors, isLoading, error, pendingConnector } =
    useConnect();

  return (
    <div>
      <div>
        <App></App>
      </div>

      <div>{error && error.message}</div>
    </div>
  );
};
