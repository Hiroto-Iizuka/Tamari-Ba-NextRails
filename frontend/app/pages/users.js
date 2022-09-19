import React from 'react';

export const Users = (props) => {
  return (
    <>
      <h1>ユーザー一覧</h1>
        {/* <div className="user-card-wrapper"> */}
        {props.users.map((user) => 
          // <div id={user.id} className="card user-card">
          //   <div className="user-card-image"></div>
          //   <div className="user-card-body">
          //     <div className="user-card-title">
                <p id={user.id}>{user.name}</p>
          //     </div>
          //   </div>
          // </div> 
          )}   
        {/* </div> */}
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {method: "GET"});
  const json = await response.json();

  return {
    props: {
      users: json
    },
  };
}

export default Users;
