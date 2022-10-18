/*
 * @Author: firefire-me 1550282237@qq.com
 * @Date: 2022-10-18 21:38:33
 * @LastEditors: firefire-me 1550282237@qq.com
 * @LastEditTime: 2022-10-18 22:42:39
 * @FilePath: \new2\.umirc.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // { path: '/error', component: '@/pages/error'     },
    { path: '/test', component: '@/pages/test' },

    {
      path: '/',
      component: '@/index',

      routes: [],
    },
  ],
  fastRefresh: {},
});
