import React from "react";

const Home: React.FunctionComponent = () => {
    return <>
        <div className="container mx-auto">
            <button className="btn btn-outline btn-primary">Click Me!</button>
            <button className="btn btn-outline btn-secondary">Click Me!</button>
            <button className="btn btn-outline btn-accent">Click Me!</button>
            <button className="btn btn-outline btn-info">Click Me!</button>
            <button className="btn btn-outline btn-warning">Click Me!</button>
            <button className="btn btn-outline btn-danger">Click Me!</button>
            <button className="btn btn-outline">Click Me!</button>
        </div>
        <div className="container mx-auto">
            <button className="btn btn-primary">Click Me!</button>
            <button className="btn btn-secondary">Click Me!</button>
            <button className="btn btn-accent">Click Me!</button>
            <button className="btn btn-info">Click Me!</button>
            <button className="btn btn-warning">Click Me!</button>
            <button className="btn btn-danger">Click Me!</button>
            <button className="btn">Click Me!</button>
        </div>
    </>
}

export default Home;