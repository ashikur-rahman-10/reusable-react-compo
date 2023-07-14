import React, { useEffect, useState } from "react";
import ClassCard from "../Component/ClassCard/ClassCard";
const Classes = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch("https://modonovo-server.vercel.app/classes")
            .then((res) => res.json())
            .then((data) => {
                setClasses(data.slice(0, 9));
            });
    }, []);
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    return (
        <div className="min-h-screen w-full max-w-7xl mx-auto pt-20 p-4">
            <div className="grid md:grid-cols-3 w-fit gap-10 mx-auto">
                {classes.map((course) => (
                    <ClassCard key={course._id} course={course}></ClassCard>
                ))}
            </div>
        </div>
    );
};

export default Classes;
