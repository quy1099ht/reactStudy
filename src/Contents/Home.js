import React , { useState } from 'react';
import PropTypes from 'prop-types';
import "../CSS/ToDo.css"
import axios from 'axios'

Home.propTypes = {

};

function Home(props) {

    const [arr,setArr] = useState([]);
    
    const addTask = async (e) => {
        e.preventDefault()
        const response = await axios.get('https://dog.ceo/api/breeds/list/all')
        console.log(response)
        console.log(response.data.dane)
    }
    return (
        <div class="ToDoList">
            <h2> Simple Todo app </h2>
            <form onSubmit={addTask}>
                <input type="text" name="newtask" placeholder="add new task" />

                <button type="submit"> Add Task </button>
            </form>
            <h2> Added Task </h2>
            <div>
                <li>Task 1</li>
            </div>

            <button > Remove </button>

            <h2> Completed task </h2>
            <li><input type="checkbox" checked />Done </li>
        </div>
    );
}

export default Home;