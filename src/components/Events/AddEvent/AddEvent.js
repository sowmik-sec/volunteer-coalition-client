import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddEvent = () => {
  const [title, setTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <div className="bg-slate-100 min-h-screen">
      <form>
        <div className="md:flex md:justify-evenly">
          <div className="form-control w-[45%]">
            <label className="label">
              <span className="label-text">Event Title</span>
            </label>
            <input
              type="text"
              placeholder="Event Title"
              onChange={(event) => setTitle(event.target.value)}
              className="input input-bordered "
            />
          </div>
          <div className="w-[45%]">
            <label className="label">
              <span className="label-text">Event Date</span>
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              className="w-full"
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
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
          </div>
          <div className="form-control file-input-container w-[45%]">
            <label className="label file-input-label">
              <span className="label-text">Banner</span>
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              id="file-input"
              className="file-input"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
