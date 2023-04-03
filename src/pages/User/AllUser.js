export const AllUser = () => {
  return (
    <>
      <div className="container">
        <div className="row m-3 ms-0">
          <h3 className="text-success">All User</h3>
        </div>
        <div className="row mx-lg-auto m-3">
          <table className="table table-responsive">
            <thead>
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">Username</th>
                <th scope="col">Email Address</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {/* {userList?.map((user) => (
              <tr>
                <td>{user.userId}</td>
                <td>{user.userName}</td>
                <td>{user.emailAddress}</td>
              </tr>
            ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
