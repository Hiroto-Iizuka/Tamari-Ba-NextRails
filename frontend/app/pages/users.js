import React from 'react';

export const Users = (props) => {
  return (
    <>
      <h1>ユーザー一覧</h1>
      {props.users.map((user) => 
        <div class="user-card-wrapper">
          <div class="card user-card">
            <div class="user-card-image"></div>
            <div class="user-card-body">
              <div class="user-card-title">
                <p>{user.name}</p>
              </div>
            </div>
          </div>     
        </div>
      )}
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
