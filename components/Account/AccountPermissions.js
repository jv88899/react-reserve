import React from "react";
import axios from "axios";
import cookie from "js-cookie";
import baseUrl from "../../utils/baseUrl";
import {
  Checkbox,
  Header,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "semantic-ui-react";

function AccountPermissions() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const url = `${baseUrl}/api/users`;
    const token = cookie.get("token");
    const payload = { headers: { Authorization: token } };
    const response = await axios.get(url, payload);
    setUsers(response.data);
  }

  return (
    <div style={{ margin: "2em 0" }}>
      <Header as="h2">
        <Icon name="settings" />
        User Permissions
      </Header>
      <Table compact celled definition>
        <TableHeader>
          <TableRow>
            <TableHeaderCell />
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Joined</TableHeaderCell>
            <TableHeaderCell>Updated</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => (
            <UserPermission key={user._id} user={user} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function UserPermission({ user }) {
  const [admin, setAdmin] = React.useState(user.role === "admin");
  const isFirstRun = React.useRef(true); // use this ref to prevent useEffect
  // from running multiple times on mount

  React.useEffect(() => {
    // This prevents useEffect from running multiple times on mount
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    updatePermission();
  }, [admin]);

  function handleChangePermission() {
    setAdmin((prevState) => !prevState);
  }

  async function updatePermission() {
    const url = `${baseUrl}/api/account`;
    const payload = { _id: user._id, role: admin ? "admin" : "user" };
    await axios.put(url, payload);
  }

  return (
    <TableRow>
      <TableCell collapsing>
        <Checkbox checked={admin} toggle onChange={handleChangePermission} />
      </TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.createdAt}</TableCell>
      <TableCell>{user.updatedAt}</TableCell>
      <TableCell>{admin ? "admin" : "user"}</TableCell>
    </TableRow>
  );
}

export default AccountPermissions;
