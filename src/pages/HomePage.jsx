import axios from 'axios';
import React from 'react';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';

const HomePage = () => {
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
        alert(`SUKSES DELETE ${id}`);
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
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => setLoading(false));
  }

  function handleChange(e) {
    setPost({ ...setPost, [e.target.name]: e.target.value });
  }

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <Layout>
        <div className="mx-10 mt-4 flex justify-center ">
          <input className="border focus:ring-4 p-2" type="text" name="content" id="content" Placeholder="isi disini" onChange={handleChange} />
          <button className="bg-blue-700 rounded-md text-white ml-5 p-2" onClick={() => posData()}>
            Submit
          </button>
        </div>

        <div className=" my-3 space-y-3 ">
          {data.map((item, index) => (
            <div key={index} className=" bg-white text-black rounded-md  items-center  ">
              <div className="mx-10 p-4 bg-orange-200">
                <p>{item.content}</p>
                <div>{item.description}</div>
                <div>{item.due && <p>{item.due.date}</p>}</div>
                <div>
                  <button className="bg-green-700 text-white rounded-md m-2 p-2" onClick={() => handleRemove(item.id)}>
                    Delete
                  </button>
                  <button className="bg-blue-700 text-white rounded-md m-2 p-2" onClick={() => handleRemove(item.id)}>
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    );
  }
};

export default HomePage;
