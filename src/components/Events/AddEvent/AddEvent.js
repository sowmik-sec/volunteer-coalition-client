import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    file: null,
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:5000/events";
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("date", formData.date);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("file", formData.file);
    fetch(url, {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => {
        // Handle response from server-side
      })
      .catch((error) => {
        // Handle error
      });
  };
  return (
    <div className="bg-slate-100 min-h-screen">
      <form className="" onSubmit={handleSubmit}>
        <div className="md:flex md:justify-evenly">
          <div className="form-control w-[45%]">
            <label className="label">
              <span className="label-text">Event Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Event Title"
              value={formData.title}
              onChange={handleChange}
              className="input input-bordered "
            />
          </div>
          <div className="w-[45%]">
            <label className="label">
              <span className="label-text">Event Date</span>
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              min={`${new Date().toISOString().split("T")[0]}`}
              className="w-full border border-gray-200 rounded-lg p-2"
            />
          </div>
        </div>
        <div className="md:flex md:justify-evenly">
          <div className="form-control w-[45%]">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Write Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-control file-input-container w-[45%]">
            <label className="label file-input-label">
              <span className="label-text">Banner</span>
            </label>
            <input
              type="file"
              onChange={handleChange}
              name="file"
              id="file-input"
              className="file-input"
            />
          </div>
        </div>
        <div className="text-right">
          <button className="btn btn-primary mr-8 my-5" type="submit">
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;

/*

<DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              className="w-full border border-gray-200 rounded-lg p-2"
            />
*/
