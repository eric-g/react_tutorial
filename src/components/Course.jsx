import React from 'react';

const Header = ({course}) => (
        <h2>{course}</h2>
)

const Total = ({parts}) => {
    const total = parts.reduce((x, part) => x + part.exercises, 0)
    return <strong>Total of {total} exercises</strong>
}

const Part = ({part}) => (
    <li>{part.name} {part.exercises}</li>
)

const Parts = ({parts}) => (
    <ul>
        {
            parts.map((part) => <Part key={part.id} part={part}>{part.name} {part.exercises}</Part>)
        }
    </ul>
)

const Course = ({course}) => (
    <div>
        <Header course={course.name} />
        <Parts parts={course.parts} />
        <Total parts={course.parts} />
    </div>
)

export default Course