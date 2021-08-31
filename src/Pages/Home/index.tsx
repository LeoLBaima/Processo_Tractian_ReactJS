import { useEffect, useState } from 'react'

import { Header } from '../../Components/Header'
import { Card } from '../../Components/Card'
import api from '../../Services/api'

import './styles.css'

import Highcharts from "highcharts"
import HighchartsReact from 'highcharts-react-official'

export type Assets = {
    id?: number;
    sensors?: string[];
    model?: string;
    status?: string;
    healthscore: number;
    name?: string;
    image?: string;
    specifications?: Specifications;
    metrics?: Metrics;
    unitId?: number;
    companyId?: number;
}

type Companies = {
    id?: number;
    name?: string;
}

type Units = {
    id?: number;
    name?: string;
    companyId?: number;
}

type Users = {
    id?: number;
    email?: string;
    name?: string;
    unitId?: number;
    companyId?: number;
}

type Specifications = {
    maxTemp?: number;
}

type Metrics = {
    totalCollectsUptime?: number;
    totalUptime?: number;
    lastUptimeAt?: string;
}

export function Home() {
    const [assets, setAssets] = useState<Assets[]>([])
    const [users, setUsers] = useState<Users[]>([])
    const [companies, setCompanies] = useState<Companies[]>([])
    const [units, setUnits] = useState<Units[]>([])
    const healthS: number[] = [];
    const status: number[] = [0, 0, 0]; // status[0] = inAlert, status[1] = inDowntime, status[2] = inOperation

    function loadAssetsData() {
        api.get('/assets', { params: { limit: 1 } }).then(res => {
            setAssets(res.data)
        })
    }
    function loadUsersData() {
        api.get('/users', { params: { limit: 1 } }).then(res => {
            setUsers(res.data)
        })
    }
    function loadUnitsData() {
        api.get('/units', { params: { limit: 1 } }).then(res => {
            setUnits(res.data)
        })
    }
    function loadCompaniesData() {
        api.get('/companies', { params: { limit: 1 } }).then(res => {
            setCompanies(res.data)
        })
    }


    function fillHealthArray() {
        for (let i = 0; i < assets.length; i++) {
            healthS.push(assets[i].healthscore)
        }
    }

    function fillStatusArray() {
        for (let i = 0; i < assets.length; i++) {
            if (assets[i].status === "inAlert") {
                status[0] = status[0] + 1;
            }
            else if (assets[i].status === "inDowntime") {
                status[1] = status[1] + 1;
            }
            else {
                status[2] = status[2] + 1;
            }
        }
    }

    useEffect(() => {
        loadAssetsData()
        loadUsersData()
        loadUnitsData()
        loadCompaniesData()
    }, [])

    fillHealthArray();
    fillStatusArray();

    const HealthOptions = {
        chart: {
            type: "line"

        },
        title: {
            text: ''
        },
        series: [
            {
                type: 'line',
                name: 'Saúde',
                data: healthS
            }
        ]
    }

    const StatusOptions = {
        chart: {
            type: "bar"
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['In alert', 'In downtime', 'In operation']
        },
        series: [
            {
                name: "Valores",
                data: status
            }
        ]
    }


    return (
        <div id="start">
            <Header />
            <h1 className="title">Ativos</h1>
            <div className="assets">
                {assets.map(asset => {
                    return (
                        <div key={asset.id}>
                            <Card
                                key={asset.id}
                                image={asset?.image}
                                title={asset?.name}

                                name={asset?.name}
                                id={asset?.id}
                                sensors={asset?.sensors}
                                model={asset?.model}
                                status={asset?.status}
                                healthscore={asset?.healthscore}
                                specifications={asset?.specifications}
                                metrics={asset?.metrics}
                                unitId={asset?.unitId}
                                companyId={asset?.companyId}
                            />
                        </div>
                    )
                })}
            </div>

            <h1 className="title">Empresas</h1>
            <table className="table">
                <tbody>
                    <tr>
                        <th>Empresa</th>
                        <th>Id</th>
                    </tr>
                    {companies.map(companie => {
                        return (
                            <>
                                <tr>
                                    <td>{companie.name}</td>
                                    <td>{companie.id}</td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>

            <h1 className="title">Usuários</h1>
            <table className="table">
                <tbody>
                    <tr>
                        <th>Nome</th>
                        <th>email</th>
                        <th>Company Id</th>
                        <th>Id</th>
                    </tr>
                    {users.map(user => {
                        return (
                            <>
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.companyId}</td>
                                    <td>{user.id}</td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>

            <h1 className="title">Unidades</h1>
            <table className="table">
                <tbody>
                    <tr>
                        <th>Nome</th>
                        <th>Company Id</th>
                        <th>Id</th>
                    </tr>
                    {units.map(unit => {
                        return (
                            <>
                                <tr>
                                    <td>{unit.name}</td>
                                    <td>{unit.companyId}</td>
                                    <td>{unit.id}</td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>

            <div className="charts-container">
                <div>
                    <h1 className="title">Saúde</h1>
                    <div className="chart">
                        <HighchartsReact highcharts={Highcharts} options={HealthOptions} />
                    </div>
                </div>
                <div>
                    <h1 className="title">Status</h1>
                    <div className="chart">
                        <HighchartsReact highcharts={Highcharts} options={StatusOptions} />
                    </div>
                </div>
            </div>
        </div>
    )
}
