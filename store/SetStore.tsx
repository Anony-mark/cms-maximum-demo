"use client"

import React from 'react'
import { useStore, uselayout } from './useStore'




const SetStore = ({props}:{props:uselayout}) => {

    useStore.setState(props)

    return <></>
}

export default SetStore