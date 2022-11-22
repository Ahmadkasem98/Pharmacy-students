import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Input, Radio, Select, Table, Result } from "antd";
import { subjects, teachers, times, years } from "../Data";
import { StudentContext } from "../Context/StudentContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";
import { useSearchParams } from "react-router-dom";
import { useForm } from "antd/es/form/Form";

const App = () => {
  const [selectedFirstName, setSelectedFirstName] = useState();
  const [selectedLastName, setSelectedLastName] = useState();
  const [selectedYear, setSelectedYear] = useState();
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedUser, setselectedUser] = useState();
  const [selectedGender, setSelectedGender] = useState();
  const [form] = useForm();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { students, setStudents } = useContext(StudentContext);

  const onFinish = (values) => {
    if (searchParams.get("id"))
      // if we are in edit page with a selected row
      setStudents(
        students?.map((s) =>
          s.id === selectedUser?.id
            ? {
                ...selectedUser,
                fullName: `${selectedFirstName} ${selectedLastName}`,
                firstName: selectedFirstName,
                lastName: selectedLastName,
                gender: selectedGender,
                year: selectedYear,
                subjects: selectedSubjects,
              }
            : s
        )
      );
    // we are in create new user page
    else
      setStudents([
        ...students,
        {
          id: students.length + 1,
          fullName: `${selectedFirstName} ${selectedLastName}`,
          firstName: selectedFirstName,
          lastName: selectedLastName,
          gender: selectedGender,
          year: selectedYear,
          subjects: selectedSubjects,
        },
      ]);
    navigate("/students");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const columns = [
    {
      key: 1,
      dataIndex: "name",
      title: "Subject Name",
      width: "300px",
    },
    {
      key: 3,
      width: "250px",
      dataIndex: "teacher",
      title: "Teacher",
      render: (
        _,
        record // select teacher depend on subject
      ) => (
        <Select
          placeholder="Please select your Teachers"
          style={{
            width: "100%",
          }}
          value={record?.teacher?.id}
          onSelect={(v) => {
            setSelectedSubjects(
              selectedSubjects.map((s) =>
                s.id === record.id
                  ? {
                      ...s,
                      teacher: {
                        id: v,
                        name: teachers.filter((t) => t.id === v)?.[0]?.name,
                      },
                      time: undefined,
                    }
                  : s
              )
            );
          }}
        >
          {teachers
            .filter((teacher) => teacher.subjectsIds.includes(record.id))
            .map((teacher) => (
              <Select.Option key={teacher.id} value={teacher.id}>
                {teacher.name}
              </Select.Option>
            ))}
        </Select>
      ),
    },
    {
      key: 2,
      dataIndex: "dayTime",
      title: "Day Time",
      width: "250px",
      render: (
        _,
        record // select time depend on teacher and subject
      ) => (
        <Select
          placeholder="Please select your Time"
          style={{
            width: "100%",
          }}
          value={record?.time?.id}
          onSelect={(v) => {
            setSelectedSubjects(
              selectedSubjects.map((s) =>
                s.id === record.id
                  ? {
                      ...s,
                      time: {
                        id: v,
                        name: times.filter((t) => t.id === v)?.[0]?.name,
                      },
                    }
                  : s
              )
            );
          }}
        >
          {times
            .filter(
              (t) =>
                t.timeOptions.findIndex(
                  (o) =>
                    o.subjectId === record.id &&
                    o.teacherId === record.teacher?.id
                ) !== -1
            )
            .map((t) => (
              <Select.Option key={t.id} value={t.id}>
                {t.name}
              </Select.Option>
            ))}
        </Select>
      ),
    },
  ];

  useEffect(() => {
    const selectedId = searchParams.get("id");

    if (selectedId) {
      const u = students.filter((s) => s.id === Number(selectedId))?.[0];
      setselectedUser(u);
      setSelectedYear(u?.year);
      setSelectedSubjects(u?.subjects);
      setSelectedFirstName(u?.firstName);
      setSelectedLastName(u?.lastName);
      setSelectedGender(u?.gender);
    }
  }, []);

  useEffect(() => {
    form.resetFields();
  }, [selectedYear, form]);

  if (
    searchParams.get("id") &&
    students.findIndex((s) => s.id === Number(searchParams.get("id"))) === -1
  ) {
    return (
      <Result
        status="404"
        title="User is not exist"
        subTitle={
          <Button type="primary" onClick={() => navigate("/students")}>
            Back to users
          </Button>
        }
      />
    );
  }

  return (
    <div style={{ backgroundColor: "#eee", paddingBottom: "1000px" }}>
      <Navbar />
      <Form
        form={form}
        style={{ width: "70%", marginTop: 100 }}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          firstName: selectedFirstName,
          lastName: selectedLastName,
          year: selectedYear?.id,
          subjects: selectedSubjects.map((s) => s.id),
          gender: selectedGender,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="FirstName"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your FirstName!",
            },
          ]}
        >
          <Input
            value={selectedFirstName}
            onBlur={(event) => {
              setSelectedFirstName(event.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="LastName"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your LastName!",
            },
          ]}
        >
          <Input
            value={selectedLastName}
            onBlur={(event) => {
              setSelectedLastName(event.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Year"
          name="year"
          rules={[
            {
              required: true,
              message: "Please select your Year!",
            },
          ]}
        >
          <Select
            value={selectedYear?.id}
            onSelect={(v) => {
              setSelectedYear(years.filter((y) => v === y.id)[0]);
              setSelectedSubjects([]);
            }} // to return the first value which I selected
          >
            <Select.Option value={""}></Select.Option>
            {years.map((year) => (
              <>
                <Select.Option key={year.id} value={year.id}>
                  {year.name} {/* view year name in options  */}
                </Select.Option>
              </>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="subjects"
          label="Subjects"
          rules={[
            {
              required: true,
              message: "Please select your Subjects!",
              type: "array",
            },
          ]}
        >
          <Select
            value={selectedSubjects.map((s) => s.id)}
            mode="multiple"
            placeholder="Please select your Subjects"
            onSelect={(v) => {
              setSelectedSubjects([
                ...selectedSubjects,
                ...subjects.filter((s) => v === s.id),
              ]);
            }}
            onDeselect={(v) => {
              setSelectedSubjects([
                ...selectedSubjects.filter((s) => s.id !== v),
              ]);
            }}
          >
            {subjects
              .filter((subject) => subject.yearId === selectedYear?.id)
              .map((subject) => (
                <Select.Option key={subject.id} value={subject.id}>
                  {subject.name}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: "please select your gender",
            },
          ]}
        >
          <Radio.Group
            value={selectedGender}
            onChange={(event) => {
              setSelectedGender(event.target.value);
            }}
          >
            <Radio value="Male">Male</Radio>
            <Radio value="Female">Female</Radio>
          </Radio.Group>
        </Form.Item>

        {selectedSubjects.length ? ( // display the table that show teachers and dayTime details
          <Table
            style={{ width: "80%", margin: "30px 0 30px 230px" }}
            columns={columns}
            dataSource={selectedSubjects}
            rowKey="id"
          />
        ) : (
          <></>
        )}

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{ margin: "auto", display: "block" }}
          >
            {searchParams.get("id") ? "Save" : "Submit"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default App;
