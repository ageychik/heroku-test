import home from '@/pages/index';
import introduction from '@/pages/introduction';
import reference from '@/pages/reference';
import demo from '@/pages/demo';

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/introduction',
        name: 'introduction',
        component: introduction,
        // children: [
        //     { path: 'bar', component: Bar }
        // ]
    },
    {
        path: '/reference',
        name: 'reference',
        component: reference
    },
    {
        path: '/demo',
        name: 'demo',
        component: demo
    }
];

export default routes;