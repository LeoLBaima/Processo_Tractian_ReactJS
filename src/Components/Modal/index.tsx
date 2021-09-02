import { useState, useEffect } from 'react'
import { Assets } from '../../Pages/Home'

import './styles.css'

type Functions = {
    onClose: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function Modal(props: Functions & Assets) {
    const [temp, setTemp] = useState(0)

    useEffect(() => {
        const data = localStorage.getItem(`temp${props?.id}`)
        if (data) {
            setTemp(JSON.parse(data))
        }

    }, [props.id])

    useEffect(() => {
        localStorage.setItem(`temp${props?.id}`, JSON.stringify(temp))
    })


    return (
        <div className="modal">
            <div className="container">
                <button className="close-btn" onClick={props.onClose} />
                <div className="modal-content">

                    <ul key={props.id}>
                        <li >Asset: {props?.name}</li>
                        <li >Id: {props?.id}</li>
                        <li >Sensor: {props?.sensors}</li>
                        <li >Model: {props?.model}</li>
                        <li >Temp: {props?.status}</li>
                        <li >Healthscore: {props?.healthscore}</li>
                        <li >Max Temperature: {temp > 0 ? (temp.toString()) : (props.specifications?.maxTemp)}</li>
                        <li >Total Collects Uptime: {props.metrics?.totalCollectsUptime}</li>
                        <li >Total Uptime: {props.metrics?.totalUptime}</li>
                        <li >Last Uptime At: {props.metrics?.lastUptimeAt}</li>
                        <li >Unit id: {props?.unitId}</li>
                        <li >Company id: {props?.companyId}</li>
                    </ul>

                    <input
                        className="input-modal"
                        type="number"
                        placeholder="Insira a temperatura máxima"
                        onChange={(e) => {
                            const tempInput = parseInt(e.target.value)
                            setTemp(tempInput)
                        }}
                    />



                </div>
            </div>
        </div>
    )

}
