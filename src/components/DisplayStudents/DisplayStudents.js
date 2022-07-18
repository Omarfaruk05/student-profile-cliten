import React from 'react';
import DisplayStudent from '../DisplayStudent/DisplayStudent';
import Loading from '../Loading/Loading';

const DisplayStudents = ({students, isLoading, refetch}) => {
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto m-4">
                <table className="table table-zebra w-full">
                    <thead className='text-secondary'>
                    <tr>
                        <th className='hidden md:block'>Photo</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Roll</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((student, index) => <DisplayStudent key={student._id} student={student} refetch={refetch} isLoading={isLoading}></DisplayStudent>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DisplayStudents;