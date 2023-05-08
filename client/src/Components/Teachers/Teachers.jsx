import { useEffect, useState } from "react"
import Nav from "../Nav"
import Table from "../Table"
import axios from 'axios'
import config from '../../config'

export default () => {
    let [teachers, setTeachers] = useState([])
    const fetchTeacher = async () =>{
        let res= await axios.get(`${config.backApi}/teachers`)
        setTeachers(res.data.data);
    }
    useEffect(()=>{
        fetchTeacher()
    }, [])
    return (
        <>
            <Nav />
            <div className="container pt-5">
                <a href="/teachers/add" className="btn btn-primary mb-3">Add teacher</a>
                <h1 >All teachers</h1>
                <Table data={teachers} th ={["Ism", "Fam", 'Email', 'Tel', 'Fan']} />
            </div>
        </>
    )
}