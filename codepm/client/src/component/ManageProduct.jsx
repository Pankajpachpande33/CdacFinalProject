import { useContext, useEffect, useState, useRef } from 'react'
import { deleteEntity, saveEntity, updateEntity } from '../action/commonAction';
import { AppContext } from '../context/AppContext'
import { getCategory } from './../action/categoryActions';
import { getProduct } from './../action/productActions';

const ManageProduct = () => {
    const { entity, loading, dispatch } = useContext(AppContext);
    const [formData, setFormData] = useState({ productName: '', categoryId: '', subCategoryId: '', productSellerId: '',productManufacturingDate: '',imagePath : '' });
    const [isUpdate, setIsUpdate] = useState(false);
    const uploadRef = useRef();
    const IMG_URL = process.env.REACT_APP_API_IMG_URL;

    useEffect(() => {
        // loadCategory();
        loadProducts();
    }, []);

    const loadProducts = async () => {
        await getProduct('product', dispatch);
    }

    // const loadCategory = async () => {
    //     await getCategory('category', dispatch);
    // }

    const saveProduct = async (e) => {
        e.preventDefault();
        console.log(formData)
        let result = null;
        if (isUpdate) {
            result = await updateEntity('product', formData);
        } else {
            result = await saveEntity('product', formData);
        }

        if (result) {
            console.log(result);
            resetForm();
            loadProducts();
        }
        return false;
    }

    const handleChange = (fieldName, fieldValue, fieldType = 'input') => {
        if (fieldType === 'image') {
            setFormData(prev => ({ ...prev, [fieldName]: fieldValue[0], imagename: fieldValue[0].name }));
        } else
            setFormData(prev => ({ ...prev, [fieldName]: fieldValue }));
    }

    const resetForm = () => {
        setFormData({ name: '', description: '', price: 0, categoryid: '' });
        if (isUpdate) setIsUpdate(false);
    }

    const editItem = (id) => {
        setFormData(entity.product.find(f => f._id === id));
        setIsUpdate(true);
    }

    const deleteItem = async (id) => {
        const result = await deleteEntity(`product/${id}`);
        if (result) {
            console.log(result)
            loadProducts();
        }
    }

    const uploadImage = (e) => {
        e.preventDefault();
        uploadRef.current.click();
    }

    return (
        <div>
            {loading && <div>Loading...</div>}
            <form id="categoryform" onSubmit={saveProduct}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 header'>Add/Update Product</div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-md-3'><label htmlFor='productName'>Product Name</label></div>
                        <div className='col-md-9'>
                            <input
                                type="text"
                                id="productName"
                                name="productName"
                                required
                                className='form-control'
                                value={formData.productName}
                                onChange={(e) => handleChange(e.target.id, e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-md-3'><label htmlFor='categoryId'>categoryId</label></div>
                        <div className='col-md-9'>
                            <input
                                type="text"
                                id="categoryId"
                                name="categoryId"
                                className='form-control'
                                required
                                value={formData.categoryId}
                                onChange={(e) => handleChange(e.target.id, e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-md-3'><label htmlFor='subCategoryId'>subCategoryId</label></div>
                        <div className='col-md-9'>
                            <input
                                type="text"
                                id="subCategoryId"
                                name="subCategoryId"
                                required
                                className='form-control'
                                value={formData.subCategoryId}
                                onChange={(e) => handleChange(e.target.id, e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-md-3'><label htmlFor='productSellerId'>productSellerId</label></div>
                        <div className='col-md-9'>
                            <input
                                type="text"
                                id="productSellerId"
                                name="productSellerId"
                                required
                                className='form-control'
                                value={formData.productSellerId}
                                onChange={(e) => handleChange(e.target.id, e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-md-3'><label htmlFor='productManufacturingDate'>productManufacturingDate</label></div>
                        <div className='col-md-9'>
                            <input
                                type="text"
                                id="productManufacturingDate"
                                name="productManufacturingDate"
                                required
                                className='form-control'
                                value={formData.productManufacturingDate}
                                onChange={(e) => handleChange(e.target.id, e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className='row form-group'>
                        <div className='col-md-3'><label htmlFor='requestImg'>Image</label></div>
                        <div className='col-md-9'>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <button className='btn btn-primary mr-2' onClick={uploadImage}>Upload</button>
                                <div>{formData.imagename || formData.imageurl}</div>
                            </div>
                            <input
                                type="file"
                                ref={uploadRef}
                                id="requestImg"
                                name="requestImg"
                                accept='image/jpg, image/jpeg, image/png'
                                // multiple:true
                                style={{ display: 'none' }}
                                className='form-control'
                                onChange={(e) => handleChange(e.target.id, e.target.files, 'image')}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <button type='submit' className='btn btn-primary mr-2' onClick={saveProduct}>{isUpdate ? 'Update' : 'Save'}</button>
                        <button type='reset' className='btn btn-secondary' onClick={resetForm}>{isUpdate ? 'Cancel' : 'Reset'}</button>
                    </div>
                </div>
            </form>
            <table className='table mt-3'>
                <thead>
                    <tr>
                        <td>productName</td>
                        <td>categoryId</td>
                        <td>subCategoryId</td>
                        <td>productSellerId</td>
                        <td>productManufacturingDate</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {entity.product.length > 0 && entity.product.map((item, index) => <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>
                            {item.imageurl &&
                                <img src={`${IMG_URL}/${item.imageurl}`} width="60px" height="60px" style={{ bordeRadius: '50%' }} />
                            }
                        </td>
                        <td>{item.productName}</td>
                        <td>{item.categoryId}</td>
                        <td>{item.subCategoryId}</td>
                        <td>{item.productSellerId}</td>
                        <td>{item.productManufacturingDate}</td>
                        <td>
                            <button className='btn btn-primary mr-1' onClick={() => editItem(item._id)}>Edit</button>
                            <button className='btn btn-danger' onClick={() => deleteItem(item._id)}>Delete</button>
                        </td>
                    </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ManageProduct