import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Textarea } from "../components/utils/Input";
import Loader from "../components/utils/Loader";
import useFetch from "../hooks/useFetch";
import MainLayout from "../layouts/MainLayout";
import validateManyFields from "../validations";

const Task = () => {
  const { token } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const { taskId } = useParams();
  const [fetchData, { loading }] = useFetch();

  const mode = taskId ? "update" : "add";

  const [task, setTask] = useState(null);
  const [formData, setFormData] = useState({ description: "" });
  const [formErrors, setFormErrors] = useState({});
  const textareaRef = useRef(null);

  useEffect(() => {
    document.title = mode === "add" ? "Add Task" : "Update Task";
    textareaRef.current?.focus();
  }, [mode]);

  useEffect(() => {
    if (mode === "update") {
      const config = {
        url: `/tasks/${taskId}`,
        method: "get",
        headers: { Authorization: token },
      };

      fetchData(config, { showSuccessToast: false }).then((data) => {
        setTask(data.task);
        setFormData({ description: data.task.description });
      });
    }
  }, [mode, taskId, token, fetchData]);

  const handleChange = (e) => {
    setFormData({ description: e.target.value });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormData({ description: task.description });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors({});

    const errors = validateManyFields("task", formData);
    if (errors.length) {
      setFormErrors(
        errors.reduce((acc, err) => ({ ...acc, [err.field]: err.err }), {})
      );
      return;
    }

    const config = {
      url: mode === "add" ? "/tasks" : `/tasks/${taskId}`,
      method: mode === "add" ? "post" : "put",
      data: formData,
      headers: { Authorization: token },
    };

    fetchData(config).then(() => navigate("/"));
  };

  const fieldError = (field) =>
    formErrors[field] && (
      <p className="mt-1 text-pink-600 text-sm">
        <i className="fa-solid fa-circle-exclamation mr-2"></i>
        {formErrors[field]}
      </p>
    );

  return (
    <MainLayout>
      <form className="m-auto my-16 max-w-[900px] bg-white p-10 rounded-xl shadow-lg">
        {loading ? (
          <Loader />
        ) : (
          <>
            {/* Header */}
            <div className="text-center mb-8">
              <i
                className={`fa-solid ${
                  mode === "add" ? "fa-circle-plus" : "fa-pen-to-square"
                } text-4xl text-primary mb-3`}
              ></i>

              <h2 className="text-2xl font-semibold">
                {mode === "add" ? "Create New Task" : "Edit Your Task"}
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                {mode === "add"
                  ? "Write down what you want to accomplish."
                  : "Update your task details carefully."}
              </p>
            </div>

            {/* Textarea */}
            <div className="mb-2">
              <label className="font-medium">Task Description</label>

              <Textarea
                ref={textareaRef}
                name="description"
                value={formData.description}
                placeholder="e.g. Complete MERN project by tonight..."
                onChange={handleChange}
                maxLength={250}
              />

              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>{formData.description.length}/250 characters</span>
              </div>

              {fieldError("description")}
            </div>

            {/* Preview */}
            {formData.description && (
              <div className="bg-gray-50 border-l-4 border-primary p-4 my-6 rounded">
                <p className="text-sm text-gray-500 mb-1">Live Preview</p>
                <p className="text-gray-800">{formData.description}</p>
              </div>
            )}

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <button
                disabled={loading}
                onClick={handleSubmit}
                className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark disabled:opacity-60"
              >
                {mode === "add" ? "Add Task" : "Update Task"}
              </button>

              <button
                type="button"
                onClick={() => navigate("/")}
                className="bg-gray-200 px-6 py-2 rounded hover:bg-gray-300"
              >
                Cancel
              </button>

              {mode === "update" && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                >
                  Reset
                </button>
              )}
            </div>
          </>
        )}
      </form>
    </MainLayout>
  );
};

export default Task;
