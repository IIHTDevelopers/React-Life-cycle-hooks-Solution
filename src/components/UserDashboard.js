import React, { useState } from 'react';
import { mockUsers } from '../services/mockUserData';  // Importing mock user data
import UserCard from './UserCard';
import UserForm from './UserForm';

const UserDashboard = () => {
    const [userId, setUserId] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    // Function to find user from mock data based on userId
    const handleSubmit = (userId) => {
        setUserId(userId);
        setError('');
        setUser(null);

        // Search for the user in the mock data by userId
        const foundUser = mockUsers.find((user) => user.id === parseInt(userId));

        if (foundUser) {
            setUser(foundUser);
        } else {
            setError('User not found');
        }
    };

    return (
        <div className="dashboard">
            <h1>User Dashboard</h1>
            <UserForm onSubmit={handleSubmit} />
            <UserCard user={user} error={error} />
        </div>
    );
};

export default UserDashboard;
