import React, { useState } from 'react'
import { postsUrl } from '../constants'

const AddForm = () => {
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const submitPost = (ev) => {
        ev.preventDefault();
        setSubmitting(true);
        
        let data = {
            title: ev.target[0].value,
            body: ev.target[1].value
        }

        data = JSON.stringify(data);

        const request = new XMLHttpRequest();
        request.open("POST", postsUrl, true);
        request.onload = function (e) {
            console.log(e);
            if (request.status === 201) {
                setSubmitting(false);
                setSuccess(true);
                ev.target.reset()
                setTimeout(()=>{
                    setSuccess(false);
                }, 1000);
            }
        }
        request.onerror = function (e) {
            console.error(e);
            setSubmitting(false);
            setError("Error occurred, please check console");
        }
        request.send(data);
    }

    return (
        <>
            <h3>Add Post</h3>
            <form onSubmit={submitPost} style={{display:"flex", flexDirection: "column", padding: 10, gap: 10}}>
                <input required type="text" name='title' placeholder='What is the title for your post?' style={{padding: 5}}/>
                <textarea required name="body" placeholder="Start writing here" cols="30" rows="10"  style={{padding: 5}}></textarea>
                <button disabled={submitting} type='submit'>{submitting ? 'Posting ...' : 'Post'}</button>
            </form>
            {
                success ? <>
                    <p style={{color: "green"}}><em>
                        Success
                    </em></p>
                </>: <></>
            }
            {
                error ? <>
                    <p style={{color: "red"}}><em>
                        {error}
                    </em></p>
                </>: <></>
            }
        </>
    )
}

export default AddForm