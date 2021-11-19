import { useState } from "react";
import "./Home.css";

function PassengerEdit({
id,
Nama,
Umur,
JenisKelamin,
editPengunjung,
}) {
    // console.log(props);
  const [state, setState] = useState({
    id:"",
    Nama: "",
    Umur: "",
    JenisKelamin: "",
    editing: true,
  });

  const onChange = (e) => { 
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (state.Nama.trim() && state.Umur && state.JenisKelamin) {
      const Umur = state.Umur;
      if (Umur >= 75 || Umur <= 12) {
        alert("Umur tidak sesuai");
      } else {
        const newData = {
            id: id,
            Nama: Nama,
            Umur: Umur,
            JenisKelamin: JenisKelamin,
        }
        editPengunjung(newData);

        setState({
          ...state,
          Nama: "",
          Umur: "",
          JenisKelamin: "",
        });
      }
    } else {
      alert("Data masih ada yang kosong");
    }
  };

  const handleBukaInput = () => {
    setState({
      ...state,
      editing: false,
    });
  };

  const handleTutupInput = () => {
    setState({
      ...state,
      editing: true,
    });
  };

  let viewMode = {};
  let editMode = {};

  if (state.editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <div style={{marginTop: '7px'}}>
      <div onSubmit={handleSubmit} style={viewMode}>
        <p>Masukkan Nama Anda</p>
        <input
          type="text"
          className="input-text"
          placeholder={Nama}
          value={state.Nama}
          name="Nama"
          onChange={onChange}
        />
        <p>Masukkan Umur Anda</p>
        <input
          type="number"
          className="input-text"
          placeholder={Umur}
          value={state.Umur}
          name="Umur"
          onChange={onChange}
        />
        <p>Masukkan Jenis Kelamin Anda</p>
        <select onChange={onChange} name="JenisKelamin">
          <option value="LakiLaki" selected>
            Laki-Laki
          </option>
          <option value="Wanita">Wanita</option>
        </select>
        <p></p>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
          Selesai
        </button>
      </div>
      <button className="inputan" onClick={handleBukaInput} style={editMode}>
        Edit Pelanggan
      </button>
    </div>
  );
}

export default PassengerEdit;