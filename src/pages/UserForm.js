import React, { useState } from 'react';

function UserForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label> {"Enter your name: "} 
        <input 
          type="text" 
          className="mx-2 text-black caret-slate-700" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" className="rounded-md px-2 py-1 transition ease-in-out delay-50 bg-transparent hover:bg-zinc-700/50 hover:cursor-pointer duration-150" />
    </form>
  )
}

export default UserForm;