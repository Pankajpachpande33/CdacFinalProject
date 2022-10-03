import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const DisplayCategory = () => {
    const initialState={
        categoryId:'',
        categoryName:'',
        status:''
    }
    const [category,setCategory]=useState(initialState);

    useEffect(() => {
        
        loadCategory();
        
    }, []);

    const loadCategory = async() => {
        await getCategory();
    }
    const getCategory = async () => {
        
        try {
            // setTimeout(async () => {
            //     const response = await axiosapi.getAPI(url);
            //     dispatch({ type: LOAD_CATEGORY_SUCCESS, payload: response.data });
            // }, 2000)
            const response = await axios.get('${process.env.REACT_APP_API_URL}category')

            
            
            console.log(response.data);
            setCategory(response.data);
            console.log(category);

    
        } catch (error) {
           console.log(error);
        }
    }

    return (
        <div>
            
        </div>
    )
}

export default DisplayCategory
