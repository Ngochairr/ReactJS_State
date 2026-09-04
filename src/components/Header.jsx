import React from "react";


export default function Header() {
  // tạo object css
  const h2Style = {
    color: 'blue',
    fontSize: '30px',
    textAlign: 'center'
  };

  return (
    <div >
      <h2 className="text-center bg-dark bg-opacity-75 text-white p-4">
        TRY GLASSES APP ONLINE
      </h2>
    </div>
  );
}
