import React, { useState } from 'react';

function UserForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>
      Enter your name: 
      <input type="text" className="mx-2" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
    </form>
  )
}

export default UserForm;