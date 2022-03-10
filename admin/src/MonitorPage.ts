// This file is part of HFS - Copyright 2020-2021, Massimo Melina <a@rejetto.com> - License https://www.gnu.org/licenses/gpl-3.0.txt

import _ from "lodash"
import { isValidElement, createElement as h, useMemo, Fragment } from "react"
import { apiCall, useApiComp, useApiList } from "./api"
import { Delete, Lock, Block } from '@mui/icons-material'
import { Box, Chip, Typography } from '@mui/material'
import { DataGrid } from "@mui/x-data-grid"
import { Alert } from '@mui/material'
import { prefix, formatBytes, IconBtn, iconTooltip, manipulateConfig } from "./misc"

export default function MonitorPage() {
    return h(Fragment, {},
        h(MoreInfo),
        h(SectionTitle, {}, "Active connections"),
        h(Connections),
    )
}

const isoDateRe = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/

function SectionTitle(props: object) {
    return h(Typography, { variant: 'h4', px: 2, ...props })
}

function MoreInfo() {
    const [res] = useApiComp('get_status')
    return h(Fragment, {},
        isValidElement(res) ? res :
            h(Box, { display: 'flex', flexWrap: 'wrap', gap: '1em', mb: 1 },
                pair('started'),
                pair('version'),
                pair('build'),
                pair('http', 'HTTP', v => v.listening ? 'port '+v.port : ('off' + prefix(': configured port is used by ',v.busy))),
                pair('https', 'HTTPS', v => v.listening ? 'port '+v.port : ('off' + prefix(': configured port is used by ',v.busy))),
            )
    )

    function pair(k: string, label: string='', render?:(v:any) => string) {
        let v = _.get(res, k)
        if (v === undefined)
            return null
        if (typeof v === 'string' && isoDateRe.test(v))
            v = new Date(v).toLocaleString()
        if (render)
            v = render(v)
        if (!label)
            label = _.capitalize(k.replaceAll('_', ' '))
        return h(Chip, {
            variant: 'filled',
            label: h(Fragment, {}, h('b',{},label), ': ', v),
        })
    }
}

function Connections() {
    const { list, error } = useApiList('get_connections')
    const rows = useMemo(()=> list?.map((x:any,id:number) => ({ id, ...x })), [list])
    if (error)
        return h(Alert, { severity: 'error' }, error)
    return h(DataGrid, {
        pageSize: 25,
        rows,
        columns: [
            {
                field: 'ip',
                headerName: 'Address',
                flex: 1,
                valueGetter: ({ row, value }) => (row.v === 6 ? `[${value}]` : value) + ' :' + row.port
            },
            {
                field: 'v',
                headerName: 'Protocol',
                align: 'center',
                hide: true,
                renderCell: ({ value, row }) => h(Fragment, {},
                    'IPv' + value,
                    row.secure && iconTooltip(Lock, "HTTPS", { opacity: .5 })
                )
            },
            {
                field: 'outSpeed',
                headerName: 'Speed',
                valueGetter: ({ value }) => formatBytes(value * 1000, 'B/s', 1000)
            },
            {
                field: 'sent',
                headerName: 'Total',
                valueGetter: ({ value }) => formatBytes(value)
            },
            {
                field: 'started',
                headerName: 'Started',
                valueGetter: ({ value }) => new Date(value).toLocaleTimeString()
            },
            {
                field: 'path',
                headerName: 'Path',
                flex: 1,
                renderCell: ({ value }) => {
                    if (!value) return
                    const i = value?.lastIndexOf('/')
                    return h(Fragment, {}, value.slice(i + 1),
                        i > 0 && h(Box, { ml: 2, color: 'text.secondary' }, value.slice(0, i)))
                }
            },
            {
                field: 'Actions ',
                width: 80,
                align: 'center',
                renderCell({ row }) {
                    return h('div', {},
                        h(IconBtn, {
                            icon: Delete,
                            title: 'Disconnect',
                            onClick: () => apiCall('disconnect', _.pick(row, ['ip', 'port'])),
                        }),
                        h(IconBtn, {
                            icon: Block,
                            title: 'Block IP',
                            onClick: () => blockIp(row.ip),
                        }),
                    )
                }
            }
        ]
    })
}

function blockIp(ip: string) {
    return manipulateConfig('block', data => [...data, { ip }])
}
