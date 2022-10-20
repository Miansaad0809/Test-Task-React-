import React, { useState, useEffect } from "react";
import { Api } from "../../utils/Api";
import Table from "../../component/Table";
import { columns } from "../cruds/columns";
const Comments = () => {
  // Comment Page
  const [comments, setComments] = useState([]);
  const [allComments, setAllComments] = useState([]);
  useEffect(() => {
    getComments();
  }, []);
  const getComments = async () => {
    try {
      const response = await Api("get", "comments");
      setComments(response.data);
      setAllComments(response.data);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <Table
      title="Comments"
      search={true}
      allRows={allComments}
      setRows={setComments}
      columns={columns.comments}
      rows={comments}
    />
  );
};

export default Comments;
