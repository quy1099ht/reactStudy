import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "../CSS/ToDo.css"
import axios from 'axios'

Home.propTypes = {

};

function Home(props) {
    const [arr, setArr] = useState([]);
    const [taskName, setTaskName] = useState("");

    useEffect(() => {
        // .then((response) => {
        //     console.log(response.data);
        // })
        getAPI()
    }, [])

    const changeTaskName = (e) => {
        setTaskName(e.target.value);
    }

    const addTask = async (e) => {
        e.preventDefault()
        const res = await axios.post('http://localhost:8080/addTask', {
            taskname: taskName
        })

    }


    const getAPI = async () => {
        const res = await axios.get('http://localhost:8080')
        console.log("🚀 ~ file: Home.js ~ line 36 ~ getAPI ~ res", res.data)
        setArr(res.data)
        console.log(arr);
        
    }

    return (
        <div class="ToDoList">
            <h2> Simple Todo app </h2>
            <form onSubmit={addTask}>
                <input type="text" onChange={changeTaskName} name="newtask" placeholder="add new task" />

                <button type="submit"> Add Task </button>
            </form>
            <h2> Added Task </h2>
            <div>

            </div>
            {[1,2,3,4].map((item, key) => {
                return (
                    <li key={key}>{item}</li>
                )
            })}


            <button > Remove </button>

            <h2> Completed task </h2>
            <li><input type="checkbox" checked />Done </li>
        </div>
    );
}

export default Home;