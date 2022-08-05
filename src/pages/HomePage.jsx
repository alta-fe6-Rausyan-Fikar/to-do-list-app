import axios from 'axios';
import React from 'react';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import { FaRegEdit } from 'react-icons/fa';
import { RiChatDeleteLine } from 'react-icons/ri';

const HomePage = () => {
  // const [status, setStatus] = useState('Not Completed');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [remove, setRemove] = useState([]);
  const [addPost, setPost] = useState({});
  const [edit, setEdit] = useState({});
  const [method, SetMethod] = useState('post');

  useEffect(() => {
    fetchData();
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
      .finally(() => {
        setLoading(false);
        fetchData();
      });
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
      .finally(() => {
        setLoading(false);
        fetchData();
      });
  }

  function update(dataEdit) {
    axios({
      method: 'post',
      url: `https://api.todoist.com/rest/v1/tasks/${dataEdit.id}`,
      data: dataEdit,
      headers: { Authorization: 'Bearer e2e489c6adec62b685e4d6f8b5058c4550847de2' },
    })
      .then((response) => {
        console.log(response);
        // handle success

        setEdit({});
        swal({
          title: 'Good job!',
          text: 'SUKSES EDIT',
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        fetchData();
        SetMethod('post');
      });
  }

  // function action() {
  //   setStatus('Completed');
  // }

  function handleChange(e) {
    if (method === 'post') {
      setPost({ ...setPost, [e.target.name]: e.target.value });
    } else {
      setEdit({ ...edit, [e.target.name]: e.target.value });
    }
  }

  const handleUpdate = (item) => {
    setEdit(item);
    SetMethod('edit');
  };

  const handleSubmit = () => {
    if (method === 'post') {
      posData();
    } else {
      update(edit);
    }
  };

  if (loading) {
    return (
      <div className="flex bg-white w-full h-screen">
        <h1 className="text-3xl m-auto text-black font-bold ">LOADING...</h1>
      </div>
    );
  } else {
    return (
      <Layout>
        <div className="grid sm:grid-flow-row text-center md:text-left lg:text-center w-full bg-slate-100 ">
          <div className="text-2xl flex justify-center mt-5 font-bold font-sans">Add New Todo List</div>
          <div className=" mt-5 flex flex-row  justify-center w-full  ">
            <div className="flex flex-col justify-center w-1/2  ">
              <input className="border border-b-4 bg-white   focus:ring-4 p-3" type="text" name="content" value={edit.content ? edit.content : edit.adpost} Placeholder="what do you want to do?" onChange={handleChange} />
              <button className="bg-[#2592cd] hover:bg-cyan-600 flex justify-center items-center mt-3  rounded-md w-20 text-white m-auto p-2" onClick={() => handleSubmit()}>
                Submit
              </button>
            </div>
          </div>

          <div className="text-2xl flex justify-center mt-16 font-bold font-sans">My Todo List</div>
          <div className="flex justify-center mt-10 ">
            <div className="flex justify-between border-b-4 border-[#2592cd] m-auto w-full sm:w-1/2 text-xl font-semibold font-sans">
              <p>Todo List</p>
              <p>Actions</p>
            </div>
          </div>

          <div>
            {data.map((item, index) => {
              return (
                <div className="flex justify-center mt-3 ">
                  <div key={index} className="flex justify-between m-auto sm:w-1/2 w-full text-lg font-semibold ">
                    <div>{item.content}</div>
                    <div className="flex">
                      <FaRegEdit className="text-amber-600 w-10 h-6 cursor-pointer" onClick={() => handleUpdate(item)} />
                      <RiChatDeleteLine className=" cursor-pointer w-10 h-7 text-red-700" onClick={() => handleRemove(item.id)} />
                    </div>
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
