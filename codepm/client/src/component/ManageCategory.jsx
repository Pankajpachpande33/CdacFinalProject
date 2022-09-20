import { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { getCategory } from './../action/categoryActions';

const ManageCategory = () => {
    const { entity, loading, dispatch } = useContext(AppContext);

    useEffect(() => {
        loadCategory(); 
    }, []);

    const loadCategory = async () => {
        await getCategory('category', dispatch);
    }

    console.log(entity.category)

    return (    
        <div>
            {loading && <div>Loading...</div>}
            {entity.category && entity.category.length > 0 &&
                entity.category.map(cat => <tr key={cat.categoryId}>
                    <td>{cat.categoryName}</td>
                    <td>{cat.status}</td>
                    </tr>)
            }
        </div>
    )
}

export default ManageCategory