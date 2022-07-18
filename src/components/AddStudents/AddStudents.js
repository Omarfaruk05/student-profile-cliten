import React from 'react';
import { toast } from 'react-toastify';

const AddStudents = ({refetch}) => {
   
    const handleAddItem = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const roll = e.target.roll.value;
        const section= e.target.section.value;
        const blood = e.target.blood.value;
        const gander = e.target.gander.value;
        const classname = e.target.classname.value;
        const photo = e.target.photo.value;

        const student = {photo, name, roll, section, blood, gander, classname};
        console.log(student)
        
        fetch("https://tranquil-shore-01652.herokuapp.com/student",
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(student)
        })
        .then(res => res.json())
        .then(inserted => {
            console.log(inserted)
            if(inserted.insertedId){
                toast.success('Student Added');
                refetch();
            }
            else{
                toast.error('Failed to Add Student')
            }
        });
        e.target.reset();
    } 

    return (
        <div className='flex items-center justify-center py-8'>
            <label htmlFor="add-modal" className="btn btn-wide bg-secondary text-white">Add New Data</label>

            <input type="checkbox" id="add-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                   <div className='text-center'>
                    <h1 className='text-xl font-semibold mb-2 text-primary'>Please Add Info</h1>
                        <form onSubmit={handleAddItem}>
                            <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered w-full max-w-xs mb-2" required />
                            <input type="text" name='name' placeholder="Name" className="input input-bordered w-full max-w-xs mb-2" required />
                            <input type="number" name='classname'  placeholder="Class" className="input input-bordered w-full max-w-xs mb-2" required />
                            <input type="text" name='section' placeholder="Section" className="input input-bordered w-full max-w-xs mb-2" required />
                            <input type="number" name='roll'  placeholder="Roll" className="input input-bordered w-full max-w-xs mb-2" required />
                            <input type="text" name='gander' placeholder="Gander" className="input input-bordered w-full max-w-xs mb-2" required />
                            <input type="text" name='blood' placeholder="Blood" className="input input-bordered w-full max-w-xs mb-2" required /><br />
                            <button  type='submit'className='btn btn-danger mr-2 bg-success text-white px-6' >
                                <label htmlFor="add-modal">Save</label>
                            </button>
                        <label htmlFor="add-modal" className="btn bg-warning text-white">Cancle</label>
                        </form>
                   </div>
                   <div className="modal-action">   
                   </div>
                </div>
            </div>
            
        </div>
    );
};

export default AddStudents;