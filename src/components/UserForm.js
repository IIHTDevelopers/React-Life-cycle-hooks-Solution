import React, { useState } from 'react';

const UserForm = ({ onSubmit }) => {
    const [userId, setUserId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(userId);
        setUserId('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="Enter user ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <button type="submit">Get User</button>
        </form>
    );
};

export default UserForm;
