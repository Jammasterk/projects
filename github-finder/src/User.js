import React from 'react'
import Spinner from "./Spinner"
import UserItems from "./UserItems"
import PropTypes from 'prop-types';

const User = ({users, loading}) => {
    
    if(loading){
        return <Spinner />
    }else{

        return (
            <div className="style" style={userStyle}>
                {users.map(user=> (
                    <UserItems key={user.id} user={user}/>
                ))}
            </div>
        )
    }

    }

    User.propTypes = {
        users: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired
    }


const userStyle ={
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)'

}

export default User
