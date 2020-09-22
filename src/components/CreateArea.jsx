import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
    
    const [isExpanded, setExpanded] = useState(false);

    const [inputNote, setInputNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
    
        setInputNote(prevNote => {
          return {
            ...prevNote,
            [name]: value
          };
        });
    }

    function submitNote(event) {
        props.onAdd(inputNote);
        setInputNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function expand() {
        setExpanded(true);
    }
  
    return (
        <div>
        <form className="create-note">
            {isExpanded && (
                <input 
                    onChange={handleChange}
                    name="title"
                    value={inputNote.title} 
                    placeholder="Title"
                />
            )}
            <textarea 
                onClick={expand}
                onChange={handleChange}
                name="content"
                value={inputNote.content} 
                placeholder="Take a note..." 
                rows={isExpanded ? 3 : 1}
            />
            <Zoom in={isExpanded}>
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>
        </div>
  );
}

export default CreateArea;