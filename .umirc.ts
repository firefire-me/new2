import { defineConfig } from 'umi';

export default defineConfig({

  nodeModulesTransform: {
    type: 'none',
  },
  routes: [

    { path: '/error', component: '@/pages/error'     },


  
    { path: '/', component: '@/index',
  
    routes : [   ]
     },
  ],
  fastRefresh: {},
});
