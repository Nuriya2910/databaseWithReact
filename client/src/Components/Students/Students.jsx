import { useEffect, useState } from "react"
import Nav from "../Nav"
import axios from 'axios'
import config from '../../config'
import Table1 from "../Table1"

export default () => {
    let [students, setStudents] = useState([])
    const fetchStudents = async () =>{
        let res= await axios.get(`${config.backApi}/students`)
        setStudents(res.data.data);
    }
    useEffect(()=>{
        fetchStudents()
    }, [])
    return (
        <>
            <Nav />
            <div className="container pt-5">
                <a href="/students/add" className="btn btn-primary mb-3">Add students</a>
                <h1 >All students</h1>
                <Table1 data={students}  />
            </div>
        </>
    )
}