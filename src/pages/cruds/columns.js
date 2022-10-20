export const columns = {
  posts: [
    { field: "id", headerName: "Id", width: 130 },
    { field: "userId", headerName: "User Id", width: 100 },
    { field: "title", headerName: "Title", width: 300 },
  ],
  users: [
    { field: "id", headerName: "Id" },
    { field: "name", headerName: "Name", width: 200 },
    { field: "username", headerName: "User Name", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "phone", headerName: "Phone", width: 200 },
  ],
  comments: [
    { field: "id", headerName: "Id" },
    { field: "postId", headerName: "Post Id" },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
  ],
  albums: [
    { field: "id", headerName: "Id" },
    { field: "userId", headerName: "User Id" },
    { field: "title", headerName: "Title", width: 200 },
  ],
  photos: [
    { field: "id", headerName: "Id" },
    { field: "albumId", headerName: "Album Id" },
    { field: "title", headerName: "Title", width: 200 },
    { field: "url", headerName: "Url", width: 300 },
  ],
  todos: [
    { field: "id", headerName: "Id" },
    { field: "userId", headerName: "User Id" },
    { field: "title", headerName: "Title", width: 200 },
    { field: "completed", headerName: "Completed", width: 200 },
  ],
};
