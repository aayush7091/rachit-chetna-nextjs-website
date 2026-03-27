"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const StateNavigation = () => {
    const [states, setStates] = useState([]);

    useEffect(() => {
        fetch('/api/states')
            .then(res => res.json())
            .then(data => setStates(data))
            .catch(err => console.error(err));
    }, []);

    if (!states.length) return null;

    return (
        <div className="bg-white border border-teal-100 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-teal-600 px-3 py-2">
                <h3 className="text-white font-bold text-base">राज्यवार खबरें</h3>
            </div>
            <div className="divide-y divide-teal-50">
                {states.map((s) => (
                    <Link
                        key={s.name}
                        href={s.href}
                        className="w-full flex items-center justify-between px-3 py-2 text-base hover:bg-teal-50 transition-all font-semibold text-slate-700"
                    >
                        {s.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default StateNavigation;