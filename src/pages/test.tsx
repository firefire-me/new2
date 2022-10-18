/*
 * @Author: firefire-me 1550282237@qq.com
 * @Date: 2022-10-18 22:32:49
 * @LastEditors: firefire-me 1550282237@qq.com
 * @LastEditTime: 2022-10-18 22:56:28
 * @FilePath: \hafront\src\pages\test.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';

import { Button } from '@mui/material';
import { Redirect, Switch } from 'umi';
import Wallet from '@/pages/Layout/Wallet/index';

export default function Test() {
  const [isWalletOpen, setIsWalletOpen] = React.useState(false);

  // 弹出钱包连接界面
  const showWallet = () => {
    setIsWalletOpen(true);
  };

  // 关闭弹出层
  const handleCancel = () => {
    setIsWalletOpen(false);
  };

  return (
    <div>
      <Button onClick={showWallet}> 连接钱包 </Button>

      <Wallet isModalOpen={isWalletOpen} handleCancel={handleCancel}></Wallet>
    </div>
  );
}
