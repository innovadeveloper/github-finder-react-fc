import React, { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const {users, loading} = githubContext; // en cada cambio obtendrà solo estos 2 valores

  if(loading){
    return <Spinner/>
  }
  return (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  ); 
}

// class Users extends Component {
//   // state = {
//   //   users: [
//   //   ],
//   // };

//   render() {
//     return (
//       <div style={userStyle}>
//         {this.props.users.map((user) => (
//           <UserItem key={user.id} user={user} />
//         ))}
//       </div>
//     );
//   }
// }

// Users.propTypes = {
//   users : PropTypes.array.isRequired, 
//   loading : PropTypes.bool.isRequired,
// }

const userStyle = {
  display : 'grid',
  gridTemplateColumns : 'repeat(3, 1fr)',
  gridGap : '1rem'
}

export default Users;
