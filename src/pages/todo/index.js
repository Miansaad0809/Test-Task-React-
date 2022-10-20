import { FormControl, Grid } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import Input from "../../component/Input";
import { Api } from "../../utils/Api";
import Table from "../../component/Table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = () => {
  const columns = [
    { field: "id", headerName: "Id" },
    { field: "userId", headerName: "User Id" },
    { field: "title", headerName: "Title", width: 300 },
    { field: "completed", headerName: "Completed", width: 200 },
    {
      field: <p>action</p>,
      headerName: "Action",
      renderCell: (row) => (
        <div style={{ display: "flex" }}>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => {
              setType("edit");
              setId(row.row.id);
              setValue(row.row.title);
            }}
          >
            <EditIcon />
          </p>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => {
              deleteTodo(row.row.id);
            }}
          >
            <DeleteIcon />
          </p>
        </div>
      ),
      width: 200,
    },
  ];
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [type, setType] = useState("add");
  const [id, setId] = useState(0);
  const getAllTodo = async () => {
    try {
      const response = await Api("get", "todos");
      setList(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const addTodo = async (e) => {
    e.preventDefault();
    if (value) {
      const obj = {
        id: list[list.length - 1].id + 1,
        userId: list[list.length - 1].userId + 1,
        title: value,
        completed: false,
      };
      setList([...list, obj]);
      setValue("");
    } else {
      console.log("noVaue");
    }
  };
  const deleteTodo = async (id) => {
    try {
      let filter = list.filter((e) => e.id !== id);
      setList(filter);
      const response = await Api("delete", `todos/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  const editTodo = async (e) => {
    e.preventDefault();
    if (value) {
      const find = list.find((e) => e.id == id);
      find.title = value;
      find.completed = true;
      setList([...list]);
      setValue("");
      setType("add");
    } else {
      console.log("noValue");
    }
  };

  useEffect(() => {
    (async function () {
      getAllTodo();
    })();
  }, []);
  return (
    <Fragment>
      <h1 style={{ textAlign: "center" }}>Todo</h1>
      <center>
        <form
          onSubmit={(e) => {
            if (type === "add") {
              addTodo(e);
            } else {
              editTodo(e);
            }
          }}
        >
          <Input
            label={"Press enter to add a new item"}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </form>
      </center>
      <Table title="Todos" columns={columns} rows={list} />
    </Fragment>
  );
};

export default Todo;
