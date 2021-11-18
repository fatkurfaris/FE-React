import "./Home.css"
import PassengerEdit from "./PassengerEdit";

function ListItem({
id,
Nama,
Umur,
JenisKelamin,
hapusPengunjung,
editPengunjung,
}) {
    return (
        <tr>
            <td>{Nama}</td>
            <td>{Umur}</td>
            <td>{JenisKelamin}</td>
            <td className="removeBorder" onClick={hapusPengunjung}><button>Hapus</button></td>
            <PassengerEdit id={id} Nama={Nama} Umur={Umur} JenisKelamin={JenisKelamin} editPengunjung={editPengunjung} />
        </tr>
    )
}

export default ListItem;

// import "./Home.css"
// import PassengerEdit from "./PassengerEdit";

// const ListItem = (props) =>{
// const { id, Nama, Umur, JenisKelamin } = props.data;
// const hapusPengunjung = props.hapusPengunjung;
// const editPengunjung = props.editPengunjung;

//     return (
//         <tr>
//             <td>{Nama}</td>
//             <td>{Umur}</td>
//             <td>{JenisKelamin}</td>
//             <td className="removeBorder" onClick={hapusPengunjung}><button>Hapus</button></td>
//             <PassengerEdit id={id} data={props.data} editPengunjung={editPengunjung} />
//         </tr>
//     )
// }

// export default ListItem;