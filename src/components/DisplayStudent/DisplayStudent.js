import React from 'react';
import { PencilIcon, EyeIcon, TrashIcon } from '@heroicons/react/outline';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';

const DisplayStudent = ({student, refetch, isLoading}) => {
    const navigate = useNavigate();
    const {_id, name, roll, section, blood, gander, classname} =  student;

    if(isLoading){
        return <Loading></Loading>
    }

    const handleDelete = () => {
        fetch(`http://localhost:5000/student/${_id}`,
        {
            method: 'DELETE',
           
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                toast.success('Successfully Deleted'); 
                refetch();
            }
            else{
                toast.error('Failed to Delete')
            }
        })
    };

    const navigateToProfile =(id)=> {
        navigate(`/${id}`)
    }

    const navigateToUpdate =(id)=>{
        navigate(`/update/${id}`)
        refetch();
    }
    return (
        <tr className='text-primary font-semibold'>
            <td>{name}</td>
            <td>{classname}</td>
            <td>{roll}</td>
            <td className='flex py-6'>
                <TrashIcon onClick={()=> handleDelete()} className='h-5 w-5 md:mr-2 text-red-500 cursor-pointer'></TrashIcon>
                <PencilIcon  onClick={()=> navigateToUpdate(_id)}  className='h-5 w-5 md:mr-2 cursor-pointer'></PencilIcon>
                <EyeIcon onClick={()=> navigateToProfile(_id)} className='h-5 w-5 cursor-pointer'></EyeIcon>
            </td>
        </tr>
    );
};

export default DisplayStudent;