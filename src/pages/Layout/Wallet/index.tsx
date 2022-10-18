/*
 * @Author: firefire-me 1550282237@qq.com
 * @Date: 2022-10-18 22:41:37
 * @LastEditors: firefire-me 1550282237@qq.com
 * @LastEditTime: 2022-10-18 22:51:58
 * @FilePath: \new2\src\pages\Layout\Wallet\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Modal, Button } from 'antd';
import { useIsMounted } from '@/hooks';
import App from '@/pages/components/Conn/config';
// import './wallet.less'

type Props = {
  isModalOpen: boolean | undefined;
  handleCancel: () => void;
};

const Wallet = (props: Props) => {
  const isMounted = useIsMounted();
  if (!isMounted) return null;

  return (
    <div className="wallect">
      <Modal
        title="Connect a wallet"
        open={props.isModalOpen}
        onCancel={props.handleCancel}
        footer={[]}
      >
        <div>
          <App></App>
        </div>
        <div></div>
      </Modal>
    </div>
  );
};

export default Wallet;
