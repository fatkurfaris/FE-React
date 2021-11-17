import "./Home.css"
function ListItem({
id,
Nama,
Umur,
JenisKelamin,
}) {
    return (
        <tr>
            <td>{Nama}</td>
            <td>{Umur}</td>
            <td>{JenisKelamin}</td>
            {/* <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}><button>Hapus</button></td> */}
        </tr>
    )
}

export default ListItem;