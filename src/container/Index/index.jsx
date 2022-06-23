import React, { useEffect } from 'react'
import { Button } from 'antd'
import { get } from '../../utils'
import png from '../../public/images/qwe.png'

export default function Index () {
    const obj = {m:''}
    useEffect(() => {
        if (obj?.m) {
            get('/index-infos').then(() => {
            })
        }
    }, [])

    return <div>
        <img src={png} alt="58" />
        <Button type='primary'>Index{import.meta.env.MODE}  {import.meta.env.VITE_API_URL}</Button>
    </div>
}