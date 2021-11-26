import Button from '@restart/ui/esm/Button';
import React from 'react';

const Doctors = () => {
    return (
        <div className="row gap-5 mx-1 my-5 justify-content-center text-center">
            <h1 className="text-center mt-5 fw-bolder">MediCare Professional Doctors</h1>
            <h4 className="fw-bold text-decoration-underline">Contact with them For Live support</h4>
            <div className="col-lg-3 p-4"> 
                <img width="100%" src="https://www.publicdomainpictures.net/pictures/210000/velka/doctor-1490804651WwZ.jpg" alt="" />
                <h5 className='text-primary fw-bold mt-3'>Cancer specialist</h5>
                <h2>Rosie Ford</h2>
                <Button  className='btn btn-outline-info'><a className="text-decoration-none" href="tel:+0123456789">Contact</a></Button>
            </div>
            <div className="col-lg-3 p-4"> 
                <img width="100%" src="https://c.stocksy.com/a/grq600/z9/1633184.jpg" alt="" />
                <h5 className='text-primary fw-bold mt-3'>Cancer specialist</h5>
                <h2>Ibrahim Alsenaid</h2>
                <Button  className='btn btn-outline-info'><a className="text-decoration-none" href="tel:+0123456789">Contact</a></Button>
            </div>
            <div className="col-lg-3 p-4"> 
                <img width="100%" src="https://static.vecteezy.com/system/resources/previews/000/832/677/large_2x/portrait-of-medical-doctor-woman-in-office-photo.jpg" alt="" />
                <h5 className='text-primary fw-bold mt-3'>Orthopedic Surgeons</h5>
                <h2>Nicole Berk</h2>
                <Button  className='btn btn-outline-info'><a className="text-decoration-none" href="tel:+0123456789">Contact</a></Button>
            </div>
        </div>
    );
};

export default Doctors;