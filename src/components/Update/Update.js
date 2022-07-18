import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const Update = () => {
    const {id} = useParams();
    const [profile, setProfile] = useState({});
    const { handleSubmit, register, reset} = useForm();

    useEffect(()=> {
        fetch(`http://localhost:5000/profile/${id}`)
        .then(res => res.json())
        .then(data => setProfile(data));
    },[profile, id]);


    const {_id} = profile;
    if(profile === undefined){
        return <Loading></Loading>
    }
 
    const onSubmit =(data) => {
        console.log(data)
        fetch(`http://localhost:5000/profile/${_id}`,
        {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(inserted => {
            console.log(inserted)
            if(inserted.insertedId){
                toast.success('Student Added');
                reset();
            }
            else{
                toast.error('Failed to Add Student')
            }
        });
    }
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-xl font-semibold mb-2 text-primary'>Please Update Info</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                        <input type="text" name="photo" {...register("photo",{value:''})} placeholder="Photo Url" className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="name" {...register("name",{value: profile?.name})} placeholder="Name" className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="classname" {...register("classname",{value:profile?.classname})} placeholder="Class" className="input input-bordered w-full max-w-xs" />

                        <input type="number" name="roll" {...register("roll", {value:profile?.roll})} placeholder="Roll" className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="section" {...register("section", {value:profile?.section})} placeholder="Section" className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="gander" {...register("gander", {required: true, value:profile?.gander})} placeholder="Gander" className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="blood" {...register("blood", {required: true, value:profile?.blood})} placeholder="Blood" className="input input-bordered w-full max-w-xs" /><br />
                        <div className='flex'>
                            <button  type='submit'className='btn btn-danger mr-2 bg-success text-white px-6' >
                            Save
                            </button>
                        </div>
                    </form>
                </div>
        </div>
    );
};

export default Update;