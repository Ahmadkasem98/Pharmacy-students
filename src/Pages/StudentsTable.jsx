import { Button, Table } from "antd";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";

import { StudentContext } from "../Context/StudentContext";

export default function StudentsTable() {
  const { students } = useContext(StudentContext);
  const navigate = useNavigate();

  // Define table columns to display all users

  const columns = [
    // get data from students array after submit the form

    { key: 1, dataIndex: "fullName", title: "Full Name", width: 150 },
    {
      key: 2,
      dataIndex: "year",
      title: "Year",
      width: 150,
      render: (year) => year?.name || "", // to print year value like string
    },
    {
      key: 3,
      dataIndex: "subjects",
      title: "Subjects",
      render: (subjects) => {
        let subjectsLabel = "";
        subjects.map(
          (s, index) => (subjectsLabel += index === 0 ? s.name : `, ${s.name}`)
        );
        return subjectsLabel; // to print subjects array value like string
      },
    },
  ];

  return (
    <>
      <Navbar />
      <div
        style={{
          height: "100vh",
          width: "100%",
          padding: "10%",
          backgroundColor: "#eee",
        }}
      >
        <Button
          onClick={() => navigate("/Student")}
          style={{ marginBottom: 20, transition: "0.2s" }}
        >
          Create user
        </Button>

        <Table
          style={{ width: "70%" }}
          columns={columns}
          dataSource={students}
          pagination={true}
          rowKey="id"
          rowClassName="studentRow"
          onRow={(record, rowIndex) => {
            return {
              onClick: () => {
                navigate(`/student?id=${record.id}`); // query par to Edit record value when click on any row
              },
            };
          }}
        />
      </div>
    </>
  );
}
