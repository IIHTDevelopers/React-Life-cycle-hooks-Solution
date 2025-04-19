import React from 'react';

const UserCard = ({ user, error }) => {
    // Check if user is null
    if (!user) {
        return <p>No user data available.</p>;  // Show a fallback message if user is null
    }

    return (
        <div className="user-card">
            {error ? (
                <p>{error}</p>
            ) : (
                <>
                    <h3>{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Address: {user.address.street}, {user.address.city}</p>
                </>
            )}
        </div>
    );
};

export default UserCard;
