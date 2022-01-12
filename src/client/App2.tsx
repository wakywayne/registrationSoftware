import React from 'react'
import Event from './Event'

interface Props {

}

const Hello: React.FC<Props> = () => {
    return (
        <>
            <h1 className="text-center mt-2">Events</h1>
            <div className="mt-5">
                <Event />
            </div>
        </>
    )
}

export default Hello;