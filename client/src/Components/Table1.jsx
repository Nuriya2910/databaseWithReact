export default (data) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Ism</th>
                    <th>Fam</th>
                    <th>Email</th>
                    <th>Tel</th>
                    <th>Onasining teli</th>
                </tr>
            </thead>
            <tbody>
                {data.data.map((item,i )=>{
                    return(
                        <tr key={i}>
                            <th scope='row'>{i+1}</th>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.parentsPhone}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}