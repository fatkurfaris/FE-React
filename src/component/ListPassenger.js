import ListItem from "./ListItem"

const ListPassenger = (props) => {
    const {data, hapusPengujung} = props
    console.log("ini hapus pengujung", hapusPengujung);
    return (
        <div>
            <table>
                <thead>
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>  
                </thead>
                <tbody>
                    {data.map((passenger)=> <ListItem item={passenger} hapusPengujung={hapusPengujung}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default ListPassenger
