import React, { useState } from 'react'
import { postsUrl } from '../constants';

const User = ({ data }) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const deleteThisPost = () => {
        setLoading(true);
        const xhr = new XMLHttpRequest();
        xhr.open("DELETE", postsUrl+"/"+data.id);
        xhr.onload = function() {
            setLoading(false);
            // window.location.reload();
        }
        xhr.onerror = function(e) {
            console.error(e);
            setError("Errored");
            setLoading(false);
        }
        xhr.send();
    }

    return (
        <div style={{ display: "flex", flex: 1, padding: 10, border: "1px solid lightgray", margin: 5, borderRadius: 10 }}>
            <p style={{margin: 0, fontWeight: "bold", textDecoration: "underline"}}>id: {data.id}</p>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <h5 style={{ margin: 0, marginBottom: 5 }}>{data.title}</h5>
                <p style={{ margin: 0, marginBottom: 5 }}>{data.body}</p>
            </div>
            <button style={{color: "red", margin:2}} disabled={loading} onClick={deleteThisPost}>
                {
                    loading ? `Deleting` : <>Delete {error ? `(${error})` : ''}</>
                }
            </button>
        </div>
    )
}

export default User