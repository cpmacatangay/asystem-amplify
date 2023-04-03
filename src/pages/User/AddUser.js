import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

export const AddUser = () => {
  const navigate = useNavigate();

  // Validation
  const schema = yup.object().shape({
    userId: yup.string().required("User ID is required"),
    userName: yup.string().required("Username is required"),
    emailAddress: yup
      .string()
      .email("Email Address must be a valid email")
      .required("Email is required"),
    password: yup.string().min(4, "Password is required").max(20).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const addUser = () => {
    navigate("/all-user");
  };

  return (
    <>
      <div className="container">
        <div className="row m-3 ms-0">
          <h3 className="text-success">Add User</h3>
        </div>
        <div className="row mx-lg-auto m-3">
          <div className="card mx-lg-auto">
            <div className="card-body">
              <form
                className="m-4 needs-validation"
                onSubmit={handleSubmit(addUser)}
                noValidate
              >
                {/* User ID */}
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className={
                      errors.userId ? "form-control is-invalid" : "form-control"
                    }
                    id="floatingUserID"
                    placeholder="User ID"
                    {...register("userId")}
                  />
                  <label htmlFor="floatingUserID">User ID</label>
                  <div className="text-start text-danger fw-semibold invalid-feedback">
                    {errors.userId?.message}
                  </div>
                </div>

                {/* Username */}
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className={
                      errors.userName
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    id="floatingUsername"
                    placeholder="Username"
                    {...register("userName")}
                  />
                  <label htmlFor="floatingUsername">Username</label>
                  <div className="text-start text-danger fw-semibold invalid-feedback">
                    {errors.userName?.message}
                  </div>
                </div>

                {/* Email Address */}
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className={
                      errors.emailAddress
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    id="floatingEmail"
                    placeholder="Email address"
                    {...register("emailAddress")}
                  />
                  <label htmlFor="floatingEmail">Email address</label>
                  <div className="text-start text-danger fw-semibold invalid-feedback">
                    {errors.emailAddress?.message}
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className={
                      errors.password
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    id="floatingPassword"
                    placeholder="Password"
                    {...register("password")}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                  <div className="text-start text-danger fw-semibold invalid-feedback">
                    {errors.password?.message}
                  </div>
                </div>

                {/* Authority */}
                {/* <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Authority
                </label>
                <select
                  className="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                  {...register("authority")}
                >
                  <option defaultValue>Select Authority</option>
                  <option value="1">Administrator</option>
                  <option value="2">User</option>
                </select>
                <div className="text-start text-danger fw-semibold invalid-feedback">
                  {errors.authority?.message}
                </div>
              </div> */}

                <motion.input
                  type="submit"
                  value="Submit"
                  className="btn btn-success"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
