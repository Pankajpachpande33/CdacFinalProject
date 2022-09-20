import { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { getUser } from './../action/userActions';

const User = () => {
    const { entity, loading, dispatch } = useContext(AppContext);

    useEffect(() => {
        loadCategory(); 
    }, []);

    const loadCategory = async () => {
        await getUser('user', dispatch);
    }

    console.log(entity.user)

    return (    
        <div>
            {loading && <div>Loading...</div>}
            {entity.category && entity.category.length > 0 &&
                entity.category.map(cat => <tr key={cat.userId}>
                    <td>{cat.userFirstName}</td>
                   
                    </tr>)
            }
        </div>
    )
}

export default User