// import React from "react";
// import { ButtonGroup, ToggleButton, } from "react-bootstrap";
// import { useState } from "react";

// export default function Change() {
//     const [checked, setChecked] = useState(false);
//     const [radioValue, setRadioValue] = useState('1');
  
//     const radios = [
//       { name: 'Active', value: '1' },
//       { name: 'Radio', value: '2' },
//       { name: 'Radio', value: '3' },
//     ];
  
//     return (
//       <>
//         <ButtonGroup>
//           {radios.map((radio, idx) => (
//             <ToggleButton
//               key={idx}
//               id={`radio-${idx}`}
//               type="radio"
//               variant={idx % 2 ? 'outline-success' : 'outline-danger'}
//               name="radio"
//               value={radio.value}
//               checked={radioValue === radio.value}
//               onChange={(e) => setRadioValue(e.currentTarget.value)}
//             >
//               {radio.name}
//             </ToggleButton>
//           ))}
//         </ButtonGroup>
//       </>
//     );
//   }
 