import axios from 'axios';
import React from 'react';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import swal from 'sweetalert';

const HomePage = () => {
  const [status, setStatus] = useState('Not Completed');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [remove, setRemove] = useState([]);
  const [addPost, setPost] = useState({});

  useEffect(() => {
    fetchData();
    posData();
  }, []);

  function fetchData() {
    axios
      .get(`https://api.todoist.com/rest/v1/tasks`, { headers: { Authorization: 'Bearer e2e489c6adec62b685e4d6f8b5058c4550847de2' } })
      .then((response) => {
        console.log(response);
        // handle success

        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => setLoading(false));
  }

  const handleRemove = (id) => {
    axios
      .delete(`https://api.todoist.com/rest/v1/tasks/${id}`, { headers: { Authorization: 'Bearer e2e489c6adec62b685e4d6f8b5058c4550847de2' } })
      .then((response) => {
        console.log(response);
        // handle success

        setRemove(response.data);
        swal({
          title: 'Good job!',
          text: 'SUKSES DELETE DATA',
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  function posData() {
    axios({
      method: 'post',
      url: 'https://api.todoist.com/rest/v1/tasks',
      data: addPost,
      headers: { Authorization: 'Bearer e2e489c6adec62b685e4d6f8b5058c4550847de2' },
    })
      .then((response) => {
        console.log(response);
        // handle success

        setPost(response.data);
        swal({
          title: 'Good job!',
          text: 'SUKSES POST',
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => setLoading(false));
  }

  function action() {
    setStatus('Completed');
  }
  function handleChange(e) {
    setPost({ ...setPost, [e.target.name]: e.target.value });
  }

  if (loading) {
    return (
      <div className="flex bg-white w-full h-screen">
        <h1 className="text-3xl m-auto text-black font-bold ">LOADING...</h1>
      </div>
    );
  } else {
    return (
      <Layout>
        <div className="grid sm:grid-flow-row text-center md:text-left lg:text-center ">
          <div className="text-2xl flex justify-center mt-2 font-bold">To Do List</div>
          <div className=" mt-4 flex justify-center ">
            <input className="border border-b-gray-900 focus:ring-4 p-2" type="text" name="content" id="content" Placeholder="isi disini" onChange={handleChange} />
            <button className="bg-blue-400 hover:bg-blue-700 rounded-md text-white ml-5 p-2" onClick={() => posData()}>
              Submit
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:w-full font-bold mt-5 border-bottom border-black mb-3">
            <p>Todo List</p>
            <p>Status</p>
            <p>Actions</p>
          </div>
          <div>
            {data.map((item, index) => {
              return (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 md:w-full lg:grid-cols-3 ">
                  <p>{item.content}</p>
                  <p>{status}</p>
                  <div className="text-white w-full ">
                    <button className="bg-green-500 py-1 mx-2 px-3 rounded-md" onClick={() => action()}>
                      Complete
                    </button>
                    <button className="bg-blue-500 py-1 mx-2 px-3 rounded-md">Edit</button>
                    <button className="bg-red-500 py-1 lg:px-3 rounded-md" onClick={() => handleRemove(item.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
};

export default HomePage;
