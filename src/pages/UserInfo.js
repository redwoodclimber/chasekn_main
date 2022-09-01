import { useState } from 'react';

const UserInfo = (props) => {
    const [user, setUser] = useState({
        name: props.name, // user inputted name
        perm: "guest" // admin, user
    });

    if (user.name == "Chase") {
        user.perm = "admin";
        return (
            <div>
                <h1 className="text-4xl font-bold text-amber-400 underline">{user.name}</h1>
            </div>
        )
    }

    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    )
}

export default UserInfo;