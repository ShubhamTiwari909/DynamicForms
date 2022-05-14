import React from 'react'

function SchoolFeatures() {
    return (
        <div className="my-5">
            <div className="grid">
                <h1 className="justify-self-center text-center my-4 font-bold text-3xl border-l-2 border-b-2 border-neutral-800">
                    SPM Higher Secondary School
                </h1>
            </div>
            <ol className="grid grid-cols-1 pl-8">
                <li className="my-2">
                    ⏺ UP Board pattern of education
                </li>
                <li className="my-2">
                    ⏺ Dedicated and well trained staff for Academic and sports
                </li>
                <li className="my-2">
                    ⏺ Playground in Campus
                </li>
                <li className="my-2">
                    ⏺ Lush Green Lawn
                </li>
                <li className="my-2">
                    ⏺ Organised debates, competition and cultural activities
                </li>
            </ol>
        </div>
    )
}

export default SchoolFeatures