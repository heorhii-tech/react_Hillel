
const Table = (data) => {

    return (
        <React.Fragment>

            <table>
                <tbody>
                    <tr  >
                        <th colSpan={2} style={{ background: 'blue', color: 'white' }}>{data.data.brand}</th>
                    </tr>

                    {data.data.models.map(model => {
                        return <React.Fragment key={model.id}>
                            <tr>
                                <td style={{ background: 'red', width: '70px' }} rowSpan={2}> {model.name}</td>
                                {model.collection.map(item => {

                                    return (
                                        item.id === 1 ?
                                            <td style={{ width: '200px' }} key={item.id}>
                                                <ul>
                                                    <li>Version: {item.version}</li>
                                                    <li>Year: {item.year}</li>
                                                    <li>Horsepower: {item.horsepower}</li>
                                                    <li>Engine: {item.engine}</li>
                                                </ul>
                                            </td> : null
                                    )

                                })}
                            </tr>
                            {model.collection.map(item => {
                                return (
                                    item.id === 2 ?
                                        <tr key={item.id}>
                                            <td key={item.id}>
                                                <ul>
                                                    <li>Version: {item.version}</li>
                                                    <li>Year: {item.year}</li>
                                                    <li>Horsepower: {item.horsepower}</li>
                                                    <li>Engine: {item.engine}</li>
                                                </ul>
                                            </td>
                                        </tr> : null
                                )


                            })}
                        </React.Fragment>




                    })}





                </tbody>
            </table>






        </React.Fragment >


    )
}
export default Table