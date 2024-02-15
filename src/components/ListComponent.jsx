

// the url should ideally be in the .env file, 

import { useEffect, useState } from "react";
import LoadingComponent from "./LoadingComponent";
import User from "./User";
import ErrorComponent from "./ErrorComponent";
import { postsUrl } from "../constants";

const ListComponent = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = () => {
            setLoading(true);
            const xhr = new XMLHttpRequest();
            xhr.open("GET", postsUrl, true);
            xhr.onload = function () {
                console.log(xhr);
                if (xhr.status >= 200 && xhr.status < 300) {
                    let r = JSON.parse(xhr.response);
                    console.log("Response:", r);
                    setData(r);
                    setLoading(false);
                }
            }
            xhr.onerror = function () {
                console.log("error", xhr);
                setLoading(false);
                setError("error")
            }
            xhr.send();
        }
        fetchUsers();
    }, []);


    return (
        <>
            <h3>Users List ({data?.length || 0})</h3>
            <div style={{ display: "flex", flexDirection: "column", flex: 1, width: "100%", height: "100%", overflow: "auto" }}>
                {
                    loading ? <LoadingComponent /> : error ? <ErrorComponent e={error} /> : <>
                        {
                            data.map(d => {
                                return <User data={d} key={d.id} />
                            })
                        }
                    </>
                }
            </div>
        </>
    )
}

export default ListComponent;