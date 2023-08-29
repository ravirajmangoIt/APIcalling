

import React, { useState } from "react";
import './style.css'

const EditPostModal = ({ post, onSave, onClose }) => {
    console.log("dsds")
    const [editedTitle, setEditedTitle] = useState(post.title);
    const [editedBody, setEditedBody] = useState(post.body);


    const handleSave = () => {
        onSave(post.id, editedTitle, editedBody);
        onClose();
    };

    return (
        <>
            <div className="formContainer">
            <button onClick={onClose} className="cancelButton">Cancel</button>
                <h2>Edit Post</h2>
                <div>
                    <label>Title:</label>
                    <div></div>
                    <input
                
    
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                    />
                </div>
                <div></div>
                <div>
                    <label>Body:</label><div></div>
                    <textarea rows={5}
                        value={editedBody}
                        onChange={(e) => setEditedBody(e.target.value)}
                    />
                </div>
                < div>
                    <button onClick={handleSave} className="editButton">Save</button>
                  
                </div>
                <div></div>
            </div>
        </>
    );
};

export default EditPostModal;
