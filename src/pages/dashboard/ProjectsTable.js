import React, { Component } from "react";
import "./dashContent.css";
import {
    faEdit, 
    faTrash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProjectsTable extends Component {
    state = {
        data: [],
        editData:{}
    };
    componentDidMount() {
        fetch('http://localhost:5000/api/project')
            .then(response => response.json())
            .then(response => this.setState({ data: response.response }))
    }
    fetchData = async () => {
        const response = await fetch('http://localhost:5000/api/project');
        const result = await response.json();
        this.setState({ data: result.response });
    };

    handleDelete = async (id) => {
        await fetch(`http://localhost:5000/api/project/${id}`, {
            method: 'DELETE'
        });
        this.fetchData();
    };
    //   handleUpdate = async (id, updatedProject) => {
    //     await fetch(`http://localhost:5000/api/project/${id}`, {
    //       method: 'PUT',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify(updatedProject)
    //     });
    //     this.fetchData();
    //     this.setState({ editProject: null });
    //   };
    handleClick = (card) => {
        // Call the callback function passed as a prop and pass data to the parent component
        this.props.showPopup(true, card);
    };
    render() {
        return (
            <div>
                <h2 className="my-project">MY PROJECTS</h2>

                <table >
                    <thead>
                        <tr>
                            <th>IMAGE</th>
                            <th>TITLE</th>
                            <th>DESCRIPTION</th>
                            <th>SETTINGS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data && this.state.data.map((card) => (
                            <tr key={card._id}>
                                <td><img src={'http://localhost:5000/' + card.image} alt="project" /></td>
                                <td>{card.title}</td>
                                <td className="tdDescription">{card.description} </td>
                                <td><div className="tableBtn">
                                    <span onClick={()=>{this.handleClick(card)}}><FontAwesomeIcon icon={faEdit} /></span>
                                    <span onClick={() => this.handleDelete(card._id)}>< FontAwesomeIcon icon={faTrash} /></span></div></td>
                            </tr>

                        ))}
                    </tbody>

                </table>
            </div>
        );
    }
}
export default ProjectsTable