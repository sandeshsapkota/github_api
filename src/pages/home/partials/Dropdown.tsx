import {ReactNode, useRef, useState} from 'react'
import useClickOutside from "@/utils/hooks/useClickOutside.tsx";

const Dropdown = ({trigger, content}: { trigger: ReactNode, content: ReactNode }) => {
    /*
    * STATE
    * */
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    /*
    * HANDLERS
    * */
    const handleClose = () => setOpen(false)
    useClickOutside(dropdownRef, handleClose)

    return (
        <div ref={dropdownRef} className="relative">
            <button onClick={() => setOpen(!open)}>
                {trigger}
            </button>
            {open && content}
        </div>
    )
}


export default Dropdown;
