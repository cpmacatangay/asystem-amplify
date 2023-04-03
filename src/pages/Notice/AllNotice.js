import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
// Amplify Imports
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { listNotices } from "../../graphql/queries";
import awsExports from "../../aws-exports";
Amplify.configure(awsExports);

export const AllNotice = () => {
  // Amplify
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  async function fetchNotices() {
    try {
      const noticeData = await API.graphql(graphqlOperation(listNotices));
      const notices = noticeData.data.listNotices.items;
      setNotices(notices);
    } catch (err) {
      console.log("error fetching notices");
    }
  }

  const navigate = useNavigate();

  const addNotice = async () => {
    navigate("/add-notice");
  };
  return (
    <>
      <div className="container">
        <div className="row m-3 ms-0">
          <div className="col-lg-10 mx-lg-auto mb-0">
            <h3 className="text-success">All Notice</h3>
          </div>
          <div className="col-lg-2 mx-lg-auto">
            <motion.button
              className="btn btn-success"
              onClick={addNotice}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ width: 150 }}
            >
              <i className="bi bi-plus"></i> Add Notice
            </motion.button>
          </div>
        </div>
        <div className="row mx-auto m-3">
          {notices.map((notice, index) => (
            <div className="card mb-4 p-0" key={notice.id ? notice.id : index}>
              <div className="card-header p-3">
                <h3 className="card-title text-success mb-0">{notice.title}</h3>
              </div>
              <div className="card-body p-3">
                <p className="card-text">{notice.content}</p>
              </div>
            </div>
          ))}
          {/* {noticeList?.map((notice) => (
          <div className="card mb-4 p-0">
            <div className="card-header p-3">
              <h3 className="card-title text-success mb-0">{notice.title}</h3>
            </div>
            <div className="card-body p-3">
              <p className="card-text">{notice.content}</p>
            </div>
          </div>
        ))} */}
        </div>
      </div>
    </>
  );
};
