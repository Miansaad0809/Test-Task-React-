import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import Switch from "../../component/Switch";
import { Api } from "../../utils/Api";
import Table from "../../component/Table";
import { columns } from "./columns";
const Cruds = () => {
  // Crud Page
  const [data, setData] = useState({
    posts: [],
    comments: [],
    albums: [],
    photos: [],
    todos: [],
    users: [],
  });
  const [toggle, setToggle] = useState({
    posts: false,
    comments: false,
    albums: false,
    photos: false,
    todos: false,
    users: false,
  });
  useEffect(() => {
    (async function () {
      getPosts();
      getComments();
      getAlbums();
      getPhotos();
      getTodos();
      getUsers();
    })();
  }, []);
  const getPosts = async () => {
    try {
      const response = await Api("get", "posts");
      data.posts = response.data;
      setData({ ...data });
    } catch (error) {
      console.log(error);
    }
  };
  const getComments = async () => {
    try {
      const response = await Api("get", "comments");

      data.comments = response.data;
      setData({ ...data });
    } catch (error) {}
  };
  const getAlbums = async () => {
    try {
      const response = await Api("get", "albums");
      data.albums = response.data;
      setData({ ...data });
    } catch (error) {
      console.log(error);
    }
  };
  const getPhotos = async () => {
    try {
      const response = await Api("get", "photos");
      data.photos = response.data;
      setData({ ...data });
    } catch (error) {
      console.log(error);
    }
  };
  const getTodos = async () => {
    try {
      const response = await Api("get", "todos");
      data.todos = response.data;
      setData({ ...data });
    } catch (error) {
      console.log(error);
    }
  };
  const getUsers = async () => {
    try {
      const response = await Api("get", "users");
      data.users = response.data;
      setData({ ...data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid item container sx={{ minHeight: "100vh" }}>
      <Grid item sm={4}>
        <Typography variant="h6">Select </Typography>
        {Object.entries(toggle).map((item) => (
          <Switch
            onChange={(e) => {
              toggle[item[0]] = !toggle[item[0]];
              setToggle({ ...toggle });
            }}
            label={item[0]}
          />
        ))}
      </Grid>
      <Grid item sm={8}>
        {toggle.posts && (
          <Table title="Posts" columns={columns.posts} rows={data.posts} />
        )}
        {toggle.comments && (
          <Table
            title="Comments"
            columns={columns.comments}
            rows={data.comments}
          />
        )}
        {toggle.albums && (
          <Table title="Albumns" columns={columns.albums} rows={data.albums} />
        )}
        {toggle.photos && (
          <Table title="Photos" columns={columns.photos} rows={data.photos} />
        )}
        {toggle.todos && (
          <Table title="Todos  " columns={columns.todos} rows={data.todos} />
        )}
        {toggle.users && (
          <Table title="Users" columns={columns.users} rows={data.users} />
        )}
      </Grid>
    </Grid>
  );
};

export default Cruds;
