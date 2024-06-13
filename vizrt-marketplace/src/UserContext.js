import {createContext} from 'react';
//context to check if user is logged in
const UserContext = createContext({ user: null, setUser: () => {} });

export default UserContext;