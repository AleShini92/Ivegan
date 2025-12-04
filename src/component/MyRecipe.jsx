import { useState } from "react";

import MyList from './MyList';

function Button({ children: myList }) {
    const [open, setOpen] = useState(false);

    const card = () => {setOpen(!open)}

    return (
        <>
            {/* <button onclick={() => setOpen(!open)} */}
            <button onClick={card}>
                {open ? 'Close' : 'My List'}
            </button>
            <div>
                {open && myList}
            </div>
        </>
    )
}

export default function MyRecipe() {
    return (
        <Button>
            <MyList />
        </Button>
    )
}