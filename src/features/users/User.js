import { useSelector } from 'react-redux';

function User() {
    const customer = useSelector((store) => store.user)

    console.log(customer)

    return 
}

export default User;