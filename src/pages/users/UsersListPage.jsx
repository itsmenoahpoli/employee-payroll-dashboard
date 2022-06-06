import React from "react";
import { Container, Card, Badge, Button, Modal, Form } from "react-bootstrap";
import { FiPlus, FiTrash2 } from "react-icons/fi";
import DataTable from "react-data-table-component";
import moment from "moment";

import { DashboardLayout } from "components/layouts";
import { UserService } from "lib/services";

const pageSEO = {
  title: "Page Title",
};

export const UsersListPage = () => {
  const _userService = new UserService();
  const [users, setUsers] = React.useState([]);
  const [user, setUser] = React.useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    password: "",
    user_role_id: null,
  });
  const [randomPassword, setRandomPassword] = React.useState("");
  const [addModal, setAddModal] = React.useState(false);
  const [viewModal, setViewModal] = React.useState(false);

  const tblColumns = [
    {
      name: "Role",
      selector: (row) => row.user_role.name,
      format: (row) => {
        switch (row.user_role.name) {
          case "admin":
            return <Badge bg="primary">ADMIN</Badge>;

          case "accountant":
            return <Badge bg="warning">ACCOUNTANT</Badge>;

          case "student":
            return <Badge bg="success">STUDENT</Badge>;

          default:
            return;
        }
      },
    },
    {
      name: "Name",
      selector: (row) => row.id,
      format: (row) => `${row.first_name} ${row.last_name}`,
    },
    {
      name: "E-mail",
      selector: (row) => row.email,
    },
    {
      name: "Date Created (Registered eg. students)",
      selector: (row) => row.created_at,
      format: (row) => moment(row.created_at).format("MMMM DD, YYYY h:m A"),
    },
    {
      name: "Actions",
      right: true,
      selector: (row) => row.email,
      cell: (row) => (
        <Button
          variant="danger"
          size="sm"
          className="text-white"
          onClick={() => deleteUser(row.id)}
        >
          <FiTrash2 />
        </Button>
      ),
    },
  ];

  const getUsers = async () => {
    await _userService
      .getAll("")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUser = async (id) => {
    await _userService
      .deleteById(id)
      .then((response) => {
        getUsers();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCreateUser = async () => {
    await _userService
      .create(user)
      .then((response) => {
        getUsers();
        setUser({
          first_name: "",
          middle_name: "",
          last_name: "",
          email: "",
          password: "",
          user_role_id: null,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const generateRandomPassword = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    setRandomPassword(result);
  };

  const toggleCreateUserModal = (bool) => {
    setAddModal(bool);

    if (bool) {
      generateRandomPassword();
      return;
    }

    setRandomPassword("");
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <DashboardLayout pageSEO={pageSEO}>
      <Container fluid>
        <h4 className="mb-3">Users Management</h4>

        <Container fluid>
          <Button
            variant="primary"
            size="sm"
            onClick={() => toggleCreateUserModal(true)}
          >
            <FiPlus /> CREATE USER
          </Button>
        </Container>

        <Card className="border-0 shadow-sm mt-3">
          <Card.Body>
            <DataTable
              columns={tblColumns}
              data={users}
              persistTableHead
              highlightOnHover
              striped
              pagination
            />
          </Card.Body>
        </Card>
      </Container>

      <Modal show={addModal} onHide={() => toggleCreateUserModal(false)}>
        <Modal.Header>Create New User</Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleCreateUser}>
            <Form.Group className="form-group">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                defaultValue={randomPassword}
                readOnly
              />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </DashboardLayout>
  );
};
