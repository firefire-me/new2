/*
 * @Author: firefire-me 1550282237@qq.com
 * @Date: 2022-10-13 16:17:35
 * @LastEditors: firefire-me 1550282237@qq.com
 * @LastEditTime: 2022-10-13 20:01:40
 * @FilePath: \antd1\src\pages\conn\walletop.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useConnect } from 'wagmi'

export default function Profile() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()

  

    const newArr = connectors.filter(function(item){
      console.log(item)
      return item.name !== "Injected";	
    })

  return (
    <div>
      {newArr.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
          className="wallet"
        >
          {"连接" + connector.name}
          {/* {!connector.ready && ' (unsupported)'}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            ' (connecting)'} */}

        </button>
      ))}

      {/* {error && <div>{error.message}</div>} */}
    </div>
  )
}