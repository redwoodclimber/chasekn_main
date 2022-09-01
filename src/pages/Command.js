import { userInfo } from 'os';
import React, { useState } from 'react'; 
import UserInfo from './UserInfo';

function CommandButton() {
    const [show, setShow] = useState(false);
    return (
        <div className="flex justify-center">
            <button onClick={() => setShow((prev) => !prev)} className="bg-slate-900 text-slate-100 hover:bg-slate-800 hover:text-slate-200">CMD</button>
            {show && <CommandForm>This is CommandForm</CommandForm>}
        </div>
    )
}

function CommandForm() {
    const [cmd, setCmd] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        <UserInfo name={cmd} />
        alert(`YOU HAVE ENTERED: ${cmd}`)
    }

    return (
        <form onSubmit={handleSubmit} className="mx-2">
            <label>
                {"$ "}
                <input
                    type="text"
                    value={cmd}
                    onChange={(e) => setCmd(e.target.value)}
                    className="max-h-full rounded-md bg-gray-700/75 border-transparent caret-gray-400 focus:bg-black/30 focus:ring-0"
                />
            </label>
        </form>
    )
}

export default CommandButton;