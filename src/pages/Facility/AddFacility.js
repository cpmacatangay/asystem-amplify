import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

export const AddFacility = () => {
  const navigate = useNavigate();

  // Validation
  const schema = yup.object().shape({
    facilityId: yup.string().required("Facility ID is required"),
    equipmentNumber: yup
      .string()
      .max(10, "Maximum of 10 characters")
      .required("Equipment Number is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const addFacility = () => {
    navigate("/all-facility");
  };

  return (
    <>
      <div className="container">
        <div className="row m-3 ms-0">
          <h3 className="text-success">Add Facility</h3>
        </div>
        <div className="row mx-lg-auto m-3">
          <div className="card mx-lg-auto">
            <div className="card-body">
              <form
                className="m-4 needs-validation"
                onSubmit={handleSubmit(addFacility)}
                noValidate
              >
                {/* Facility ID */}
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className={
                      errors.facilityId
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    id="floatingFacilityID"
                    placeholder="Facility ID"
                    {...register("facilityId")}
                  />
                  <label htmlFor="floatingUserID">Facility ID</label>
                  <div className="text-start text-danger fw-semibold invalid-feedback">
                    {errors.facilityId?.message?.toString()}
                  </div>
                </div>

                {/* Equipment Number */}
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className={
                      errors.equipmentNumber
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    id="floatingUsername"
                    placeholder="Equipment Number"
                    {...register("equipmentNumber")}
                  />
                  <label htmlFor="floatingUsername">Equipment Number</label>
                  <div className="text-start text-danger fw-semibold invalid-feedback">
                    {errors.equipmentNumber?.message?.toString()}
                  </div>
                </div>

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
