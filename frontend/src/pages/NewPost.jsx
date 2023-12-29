import React, { useContext, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import {AuthContext} from '../context/authContext'

const NewPost = () => {
  const state = useLocation().state

  const {currentUser} = useContext(AuthContext)

  const [value, setValue] = useState(state.details|| "");
  const [title, setTitle] = useState(state.heading|| "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state.cate||"");

  const navigate = useNavigate();
  console.log(state)
  const upload = async () => {

    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("uploads", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      state
        ? await axios.put(`/user/posts/edit/${state.id}`, {
            title:title,
            desc: value,
            cat:cat,
            img: file ? imgUrl : "",

          })
        : 
          await axios.post(`/user/posts/set`, {
            title:title,
            desc: value,
            cat: cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            userid: currentUser.id,
          })
          navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="pt-16 mb-16 relative flex flex-row w-full justify-center items-center ">      
      <div className="relative grid md:grid-cols-4 grid-cols-1 w-5/6 gap-5">
        <div className=" md:col-span-3  sm:mb-20">
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)
            }
            className="w-full mb-10 text-2xl p-2 border border-gray-300 rounded"
          />
          <div className="">
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              style={{ height: '300px' }}
            />
          </div>
        </div>
        <div className=" md:col-span-1">
          <div className=" mb-10  border border-gray-300">
            <h1 className="font-bold text-2xl p-4">Publish</h1>
            <span className="p-4">
              <b>Status: </b> Draft
            </span>
            <br />
            <span className="p-4">
              <b>Visibility: </b> Public
            </span>
            <br />
            <input
              className="pl-4"
              type="file"
              id="file"
              name="file"
              accept=".jpg,.jpeg,.png"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label className="p-4 underline cursor-pointer" htmlFor="file">
              Upload Image
            </label>
            <div className="flex flex-row justify-between p-4">
              <button className="border border-black pr-4 pl-4 text-green-600">Save as a draft</button>
              <button onClick={handleClick}  className="bg-green-600 pr-4 pl-4 text-white" >Publish</button>
            </div>
          </div>
          <div className="border border-gray-300">
            <h1 className="font-bold text-2xl p-4">Category</h1>
            <div className="p-1 text-green-600">
              <input
                type="radio"
                checked={cat === "gear"}
                name="cat"
                value="gear"
                id="gear"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="gear">Gear</label>
            </div>
            <div className="p-1 text-green-600">
              <input
                type="radio"
                checked={cat === "Healt & Fitness"}
                name="cat"
                value="Healt & Fitness"
                id="Healt & Fitness"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="Healt & Fitness">Healt & Fitness</label>
            </div>
            <div className="p-1 text-green-600">
              <input
                type="radio"
                checked={cat === "Food & Drink"}
                name="cat"
                value="Food & Drink"
                id="Food & Drink"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="Food & Drink">Food & Drink</label>
            </div>
            <div className="p-1 text-green-600">
              <input
                type="radio"
                checked={cat === "Style"}
                name="cat"
                value="Style"
                id="Style"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="Style">Style</label>
            </div>
            <div className="p-1 text-green-600">
              <input
                type="radio"
                checked={cat === "Travel"}
                name="cat"
                value="Travel"
                id="Travel"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="Travel">Travel</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
