import { Assets } from '../../Pages/Home'

import './styles.css'

type Functions = {
    onClose: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function Modal(props: Functions & Assets) {
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
                        <li >Status: {props?.status}</li>
                        <li >Healthscore: {props?.healthscore}</li>
                        <li >Max Temperature: {props.specifications?.maxTemp}</li>
                        <li >Total Collects Uptime: {props.metrics?.totalCollectsUptime}</li>
                        <li >Total Uptime: {props.metrics?.totalUptime}</li>
                        <li >Last Uptime At: {props.metrics?.lastUptimeAt}</li>
                        <li >Unit id: {props?.unitId}</li>
                        <li >Company id: {props?.companyId}</li>
                    </ul>

                </div>
            </div>
        </div>
    )

}
