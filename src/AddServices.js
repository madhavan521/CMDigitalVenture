import React, { useState } from "react";

function AddServices() {
  const [formData, setFormData] = useState({
    name: "",
    minidescription: "",
    description: "",
    imagedata: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      imagedata: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("minidescription", formData.minidescription);
    data.append("description", formData.description);
    data.append("imagedata", formData.imagedata);

    try {
      const res = await fetch("http://localhost:8000/service/", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        alert("Service Added Successfully");
        setFormData({
          name: "",
          minidescription: "",
          description: "",
          imagedata: null,
        });
      } else {
        alert("Error uploading service");
      }
    } catch (error) {
      console.error(error);
      alert("Error uploading service");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Add New Service</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Service Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Service Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mini Description</label>
            <input
              type="text"
              name="minidescription"
              className="form-control"
              placeholder="Enter Mini Description"
              value={formData.minidescription}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              className="form-control"
              placeholder="Enter Full Description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Image</label>
            <input
              type="file"
              name="imagedata"
              accept="image/*"
              className="form-control"
              onChange={handleFileChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddServices;
