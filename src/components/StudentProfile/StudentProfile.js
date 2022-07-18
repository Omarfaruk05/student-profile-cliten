import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from "react-router-dom";
import Loading from '../Loading/Loading';

const StudentProfile = () => {
    const {id} = useParams()
    const {data: profile, isLoading, refetch } = useQuery ('studentProfile', () => fetch(`https://tranquil-shore-01652.herokuapp.com/profile/${id}`).then(res => res.json()));

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className=' bg-gradient-to-r from-accent to-primary min-h-[100vh]'>
            <Link to="/"><h1 className='text-3xl text-center text-white font-bold pt-4 mb-4 cursor-pointer'>My Profile</h1></Link>

            <div className=''>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 lg:gap-40  justify-between  items-center p-4 md:p-12 lg:p-24'>
                    <div className='bg-base-100 p-8 rounded-lg text-center'>
                        <div className='text-center w-full flex justify-center'>
                        <figure><img className='rounded-lg' src={profile?.photo} alt="Movie"/></figure>
                        </div>
                        <div>
                          <h2 className='text-2xl font-semibold'>{profile?.name}</h2> 
                        </div>
                    </div>
                    <div className=' w-full h-full bg-base-100 p-8 rounded-lg'>
                        <div className='border'>
                            <h4 className='text-2xl font-semibold p-2'>Class: {profile?.classname}</h4><hr />
                            <h4 className='text-2xl font-semibold p-2'>Roll: {profile?.roll}</h4><hr />
                            <h4 className='text-2xl font-semibold p-2'>Section: {profile?.section}</h4><hr/>
                            <h4 className='text-2xl font-semibold p-2'>Gander: {profile?.gander}</h4><hr />
                            <h4 className='text-2xl font-semibold p-2'>Blood Group: {profile?.blood}</h4><hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;