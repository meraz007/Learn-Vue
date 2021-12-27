import Inventory from '../components/views/Inventory'
import productsDeatils from '../components/views/productsDeatils'

export const routes=[
    {
        path:'',
        component:Inventory
    },
    {
        path: '/item/:id',
        component:productsDeatils
    }
] 