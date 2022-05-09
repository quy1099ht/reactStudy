import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../CSS/ToDo.css";
import axios from "axios";

Home.propTypes = {};

function Home(props) {
    const [arr, setArr] = useState([]);
    const [taskName, setTaskName] = useState("");

    useEffect(() => {
        getAPI();
    }, [arr]);

    // useEffect(() => {
    //     setArr(arr)

    // }, [arr])
    const cloneUnFinishedArr = (arr) => {
        const array = []
        arr.forEach(element => {
            if (!element.isCompleted) {
                array.push(element)
            }
        });
        
        console.log("🚀 ~ file: Home.js ~ line 22 ~ cloneUnFinishedArr ~ array", array)
        return array;
    }
    const getLatestTask = (arr) => {
        return arr[arr.length - 1];
    }
    const changeTaskName = (e) => {
        setTaskName(e.target.value);
    };

    const addTask = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:8080/addTask", {
            taskname: taskName,
        });
        setTaskName("");
        getAPI();
    };

    const completeTask = (e) => {
        console.log(e.target.innerHTML);
        const res = axios.post("http://localhost:8080/completeTask", {
            taskname: e.target.innerHTML,
        });
        setArr(arr);
    }

    const getAPI = async () => {
        const res = await axios.get("http://localhost:8080");
        var array = [];
        setArr(res.data);
    };
    const removeTask = () => {
        const task = getLatestTask(cloneUnFinishedArr(arr))

        const body={
            taskId : task._id
        }
        console.log("🚀 ~ file: Home.js ~ line 63 ~ removeTask ~ task._id", task._id)
        axios.delete("http://localhost:8080/deleteTask",{ data: body});
        
    };

    return (
        <div class="ToDoList">
            <h2> Simple Todo app </h2>
            <form onSubmit={addTask}>
                <input
                    value={taskName}
                    type="text"
                    onChange={changeTaskName}
                    name="newtask"
                    placeholder="add new task"
                />

                <button type="submit"> Add Task </button>
            </form>
            <h2> Added Task </h2>
            <div>
                <p>Click to change unfinished task to finished status</p>
                {arr.map((item, key) => {
                    if (!item.isCompleted) {
                        return <li onClick={completeTask}>{item.name}</li>;
                    }
                })}
            </div>
            <br />
            <button onClick={removeTask}>Remove Latest Task</button>

            <h2> Completed task </h2>
            {arr.map((item) => {
                if (item.isCompleted) {
                    return (
                        <li>
                            <input disabled type="checkbox" checked />
                            {item.name}{" "}
                        </li>
                    );
                }
            })}
        </div>
    );
}

export default Home;
