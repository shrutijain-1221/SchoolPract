import React, { useState } from 'react';
import './AdmissionForm.css'; 
const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        fatherName: '',
        motherName: '',
        dob: '',
        age: '',
        contactNo: '',
        email: '',
        class: '',
        disability: '',
        placeOfBirth: '',
        city: '',
        district: '',
        state: '',
        address: '',
        pincode: '',
        aadhaar: '',
        caste: '',
        motherTongue: '',
        religion: '',
        category: ''
    });
    const [errors, setErrors] = useState({});
    const [showToast, setShowToast] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === 'dob') {
            calculateAge(value);
        }
    };
    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        setFormData((prevData) => ({ ...prevData, age: age.toString() }));
    };
    const validate = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.fatherName) newErrors.fatherName = 'Father name is required';
        if (!formData.motherName) newErrors.motherName = 'Mother name is required';
        if (!formData.dob) newErrors.dob = 'Date of birth is required';
        if (!formData.contactNo || formData.contactNo.length !== 10) newErrors.contactNo = 'Contact number must be 10 digits';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.class) newErrors.class = 'Class selection is required';
        if (!formData.disability) newErrors.disability = 'Disability selection is required';
        if (!formData.placeOfBirth) newErrors.placeOfBirth = 'Place of birth is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.district) newErrors.district = 'District is required';
        if (!formData.state) newErrors.state = 'State is required';
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.pincode) newErrors.pincode = 'Pincode is required';
        if (!formData.aadhaar || formData.aadhaar.length !== 12) newErrors.aadhaar = 'Aadhaar card number must be 12 digits';
        if (!formData.caste) newErrors.caste = 'Caste is required';
        if (!formData.motherTongue) newErrors.motherTongue = 'Mother tongue is required';
        if (!formData.religion) newErrors.religion = 'Religion is required';
        if (!formData.category) newErrors.category = 'Category is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted', formData);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
            setFormData({
                firstName: '',
                lastName: '',
                gender: '',
                fatherName: '',
                motherName: '',
                dob: '',
                age: '',
                contactNo: '',
                email: '',
                class: '',
                disability: '',
                placeOfBirth: '',
                city: '',
                district: '',
                state: '',
                address: '',
                pincode: '',
                aadhaar: '',
                caste: '',
                motherTongue: '',
                religion: '',
                category: ''
            });
        }
    };
    return (
        <div>
           <div className='admission-header'>
           <h2>Fill out the Admission Form</h2>
           </div>
            {showToast && <div className="toast">Form submitted successfully!</div>}
            <form className="admission-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div>
                        <label>First Name:</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                        {errors.firstName && <span>{errors.firstName}</span>}
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                        {errors.lastName && <span>{errors.lastName}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Gender:</label>
                        <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
                        <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
                        {errors.gender && <span>{errors.gender}</span>}
                    </div>
                    <div>
                        <label>Any Disability:</label>
                        <select name="disability" value={formData.disability} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        {errors.disability && <span>{errors.disability}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Date of Birth:</label>
                        <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
                        {errors.dob && <span>{errors.dob}</span>}
                    </div>
                    <div>
                        <label>Age:</label>
                        <p>{formData.age}</p> {/* Display age as text */}
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Mother Name:</label>
                        <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} />
                        {errors.motherName && <span>{errors.motherName}</span>}
                    </div>
                    <div>
                        <label>Father Name:</label>
                        <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />
                        {errors.fatherName && <span>{errors.fatherName}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Contact No:</label>
                        <input type="text" name="contactNo" value={formData.contactNo} onChange={handleChange} />
                        {errors.contactNo && <span>{errors.contactNo}</span>}
                    </div>
                    <div>
                        <label>Email Address:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        {errors.email && <span>{errors.email}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Admission for Class:</label>
                        <select name="class" value={formData.class} onChange={handleChange}>
    <option value="">Select Class</option>
    {["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"].map((cls, i) => (
        <option key={i} value={cls}>
            {cls}
        </option>
    ))}
</select>
                        {errors.class && <span>{errors.class}</span>}
                    </div>
                    <div>
                        <label>Place of Birth:</label>
                        <input type="text" name="placeOfBirth" value={formData.placeOfBirth} onChange={handleChange} />
                        {errors.placeOfBirth && <span>{errors.placeOfBirth}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>City:</label>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} />
                        {errors.city && <span>{errors.city}</span>}
                    </div>
                    <div>
                        <label>District:</label>
                        <input type="text" name="district" value={formData.district} onChange={handleChange} />
                        {errors.district && <span>{errors.district}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>State:</label>
                        <input type="text" name="state" value={formData.state} onChange={handleChange} />
                        {errors.state && <span>{errors.state}</span>}
                    </div>
                    <div>
                        <label>Residential Address:</label>
                        <textarea name="address" value={formData.address} onChange={handleChange} />
                        {errors.address && <span>{errors.address}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Pincode:</label>
                        <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
                        {errors.pincode && <span>{errors.pincode}</span>}
                    </div>
                    <div>
                        <label>Aadhaar Card No:</label>
                        <input type="text" name="aadhaar" value={formData.aadhaar} onChange={handleChange} />
                        {errors.aadhaar && <span>{errors.aadhaar}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Caste:</label>
                        <input type="text" name="caste" value={formData.caste} onChange={handleChange} />
                        {errors.caste && <span>{errors.caste}</span>}
                    </div>
                    <div>
                        <label>Mother Tongue:</label>
                        <input type="text" name="motherTongue" value={formData.motherTongue} onChange={handleChange} />
                        {errors.motherTongue && <span>{errors.motherTongue}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Religion:</label>
                        <input type="text" name="religion" value={formData.religion} onChange={handleChange} />
                        {errors.religion && <span>{errors.religion}</span>}
                    </div>
                    <div>
                        <label>Category:</label>
                        <select name="category" value={formData.category} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="General">General</option>
                            <option value="OBC">OBC</option>
                            <option value="SC">SC</option>
                            <option value="ST">ST</option>
                        </select>
                        {errors.category && <span>{errors.category}</span>}
                    </div>
                </div>
                <div className='submit-button'>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};
export default AdmissionForm;