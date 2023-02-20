import React, { Component } from 'react';
import "./Popup.css"
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            updatedTitle: this.props.data.title,
            updatedLink: this.props.data.link,
            updatedImage: this.props.data.image,
            updatedDescription: this.props.data.description,
        };
    }
    componentDidMount() {
        this.setState({ updatedTitle: this.state.data.title });
        this.setState({ updatedLink: this.state.data.link});
        this.setState({ updatedImage: this.state.data.image });
        this.setState({ updatedDescription: this.state.data.description });


    }
    closePopup = () => {
        this.props.closePopup();
    };
    handleSubmit = (event) => {
        event.preventDefault();

        const updatedTitle = this.state.updatedTitle;
        const updatedLink = this.state.updatedLink;
        const updatedImage = this.state.updatedImage;
        const updatedDescription = this.state.updatedDescription;

        let image = this.state.data.image;
        if (updatedImage) {
            image = updatedImage;
        } else {
            image = this.props.data.image
        }

        const updatedData = {
            title: updatedTitle,
            link: updatedLink,
            image: image,
            description: updatedDescription
        };

        const projectId = this.state.data._id;

        fetch(`http://localhost:5000/api/project/${projectId}`, {
            method: 'PUT',
            body: JSON.stringify(updatedData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                // Close the popup after the project has been updated
                this.closePopup();
            })
            .catch(error => console.error(error));
    };
    handleTitleChange = (event) => {
        this.setState({ updatedTitle: event.target.value });
    };
    handleLinkChange = (event) => {
        this.setState({ updatedLink: event.target.value });
    };
    handleImageChange = (event) => {
        this.setState({ updatedImage: event.target.files[0] });
    };
    handleDescriptionChange = (event) => {
        this.setState({ updatedDescription: event.target.value });
    };



    render() {
        return (
            <div  >
                <div className="popup-overlay">
                    <div className="popup-content">
                        <form onSubmit={this.handleSubmit} >
                            <div className="Edditproject">
                                <div className='close' onClick={this.closePopup}>< FontAwesomeIcon icon={faClose} /></div>
                                <h2>edit projects</h2>
                                <div>
                                    <label htmlFor="title">title</label>
                                    <input type="text" id="edit-title" value={this.state.updatedTitle} onChange={this.handleTitleChange} />
                                </div>
                                <div>
                                    <label htmlFor="link"> link</label>
                                    <input type="text" id="edit-link" value={this.state.updatedLink} onChange={this.handleLinkChange} />
                                </div>

                                <div>
                                    <label htmlFor="image">image</label>
                                    <img src={`http://localhost:5000/${this.state.updatedImage}`} alt='projects' />
                                    <input type="file" id="edit-image" onChange={this.handleImageChange} />

                                    <div>
                                        <label htmlFor="description">description</label>
                                        <textarea id="edit-description" rows="6" value={this.state.updatedDescription} onChange={this.handleDescriptionChange}></textarea>
                                    </div>
                                </div>

                                <button type="submit">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >

        );
    }
}

export default Popup;