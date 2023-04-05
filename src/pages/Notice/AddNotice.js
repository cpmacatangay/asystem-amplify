// import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { useNavigate } from "react-router-dom";
// Amplify Imports
import React, { useState } from "react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { createNotice } from "../../graphql/mutations";
// import { listTodos } from './graphql/queries'

import awsExports from "../../aws-exports";
Amplify.configure(awsExports);

const initialState = { title: "", content: "" };

export const AddNotice = () => {
  const navigate = useNavigate();

  // Amplify
  const [formStates, setFormStates] = useState(initialState);
  const [notices, setNotices] = useState([]);

  function setInput(key, value) {
    setFormStates({ ...formStates, [key]: value });
  }

  async function submitNewNotice() {
    try {
      // if (!formStates.title || !formStates.content) return;
      // const notice = { ...formStates };
      // setNotices([...notices, notice]);
      // setFormStates(initialState);
      await API.graphql({
        query: createNotice,
        variables: {
          input: {
            title: formStates.title,
            content: formStates.content
          }
        }
      })
      console.log('New notice created!');
      // console.log('New notice created!', initialState );
      navigate("/");
    } catch (err) {
      console.log("error adding data", err);
    }
  }

  // async function addNotice() {
  //   try {
  // if (!formStates.title || !formStates.content) return;
  // const notice = { ...formStates };
  // setNotices([...notices, notice]);
  // setFormStates(initialState);
  //     await API.graphql(graphqlOperation(createNotice, { input: notice }));
  //   } catch (err) {
  //     console.log("error creating notice:", err);
  //   }
  // }



  // Validation
  const schema = yup.object().shape({
    title: yup
      .string()
      .min(4, "Minimum of 4 characters is required")
      .max(20)
      .required(),
    content: yup
      .string()
      .min(4, "Minimum of 4 characters is required")
      .max(500)
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <div className="container">
        <div className="row m-3 ms-0">
          <h3 className="text-success">Add Notice</h3>
        </div>
        <div className="row mx-lg-auto m-3">
          <div className="card mx-lg-auto">
            <div className="card-body m-4 needs-validation">
              {/* <form
                className=""
                onSubmit={handleSubmit(addNotice)}
                noValidate
              > */}
              {/* Title*/}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={
                    errors.title ? "form-control is-invalid" : "form-control"
                  }
                  onChange={e => setInput("title", e.target.value)}
                  id="floatingInput"
                  placeholder="Title"
                  {...register("title")}
                />
                <label htmlFor="floatingInput">Title</label>
                <div className="text-start text-danger fw-semibold invalid-feedback">
                  {errors.title?.message?.toString()}
                </div>
              </div>

              {/* Content */}
              <div className="form-floating mb-3">
                <textarea
                  className={
                    errors.content ? "form-control is-invalid" : "form-control"
                  }
                  onChange={e => setInput("content", e.target.value)}
                  placeholder="Content"
                  id="floatingTextarea"
                  style={{ height: "200px" }}
                  {...register("content")}
                ></textarea>
                <label htmlFor="floatingTextarea">Content</label>
                <div className="text-start text-danger fw-semibold invalid-feedback">
                  {errors.content?.message?.toString()}
                </div>
              </div>

              {/* Date */}
              {/* <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Start Date
                    </label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      End Date
                    </label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
              </div> */}

              {/* Upload */}
              {/* <div>
                <label for="formFileLg" className="form-label">
                  Upload File
                </label>
                <input
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                />
                <div id="emailHelp" class="form-text mb-3">
                  You can upload the following file types: .docx, .xlsx, .txt,
                  .csv, .pdf
                </div>
              </div> */}

              <motion.button
                // type="submit"
                onClick={addNotice}
                className="btn btn-success"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Submit
              </motion.button>
              {/* <button style={styles.button} onClick={addTodo}>Create Todo</button> */}
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
