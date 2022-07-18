import React from 'react';
import { useQuery } from 'react-query';
import AddStudents from '../AddStudents/AddStudents';
import DisplayStudents from '../DisplayStudents/DisplayStudents';

const Body = () => {
    const {data: students, isLoading, refetch } = useQuery ('student', () => fetch('http://localhost:5000/student').then(res => res.json()));

    return (
        <div className=' bg-gradient-to-r from-accent to-primary h-[100vh]'>
            <AddStudents refetch={refetch}></AddStudents>
            <DisplayStudents  students={students} isLoading={isLoading} refetch={refetch}></DisplayStudents>
        </div>
    );
};

export default Body;