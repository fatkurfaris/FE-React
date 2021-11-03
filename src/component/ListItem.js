const ListItem = ({item, hapusPengujung}) => {
    return (   
        <tr>
            <td>{item.nama}</td>
            <td>{item.umur}</td>
            <td>{item.jenisKelamin}</td>
            <td>
                <button onClick={()=>hapusPengujung(item.id)}>Hapus</button>
                </td>
        </tr> 
    )
}

export default ListItem