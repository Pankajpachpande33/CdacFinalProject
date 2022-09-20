import { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { getOrder } from './../action/orderActions';

const OrderList = () => {
    const { entity, loading, dispatch } = useContext(AppContext);

    useEffect(() => {
        loadCategory(); 
    }, []);

    const loadCategory = async () => {
        await getOrder('order', dispatch);
    }

    console.log(entity.order)

    return (    
        <div>
            {loading && <div>Loading...</div>}
            {entity.category && entity.category.length > 0 &&
                entity.category.map(cat => <tr key={cat.orderId}>
                    <td>{cat.orderQuantity}</td>
                   
                    </tr>)
            }
        </div>
    )
}

export default OrderList