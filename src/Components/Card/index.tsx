import { useState } from 'react';

import './styles.css'

import { Assets } from '../../Pages/Home'
import { Modal } from '../Modal';

type CardProps = {
    title?: string;
}

export function Card(props: CardProps & Assets) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div>
            <div className="card" onClick={() => setIsModalVisible(true)}>
                <a href="#start" className="link-card">
                    <img src={props.image} alt={props?.name}></img>
                </a>

            </div>
            <p className="card-title">{props.title}</p>
            <div>
                {isModalVisible ?
                    <div key={props.id}>

                        <Modal
                            key={props.id}

                            onClose={() => setIsModalVisible(false)}
                            name={props?.name}
                            id={props?.id}
                            sensors={props?.sensors}
                            model={props?.model}
                            status={props?.status}
                            healthscore={props?.healthscore}
                            specifications={props?.specifications}
                            metrics={props?.metrics}
                            unitId={props?.unitId}
                            companyId={props?.companyId}
                        />

                    </div>
                    : null}
            </div>
        </div>
    )
}