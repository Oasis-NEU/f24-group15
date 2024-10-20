import { useState } from 'react';

const initialList = [
  { id: 0, title: 'CS1200', done: false },
  { id: 1, title: 'CS1210', done: false },
  { id: 2, title: 'CS2500', done: false },
  { id: 3, title: 'CS2510', done: false},
];

export default function CourseList() {
  const [list, setList] = useState(
    initialList
  );

  function handleToggle(courseId, nextSeen) {
    setList(list.map(course => {
      if (course.id === courseId) {
        return { ...course, seen: nextSeen };
      } else {
        return course;
      }
    }));
  }

  return (
    <div className='title'>
      <h1>NEU DegreeWorks</h1>
      <h2>CS requirements:</h2>
      <ItemList
        courses={list}
        onToggle={handleToggle} />
    </div>
  );
}

function ItemList({ courses, onToggle }) {
  return (
    <ul className="classes">
      {courses.map(course => (
        <li key={course.id}>
          <label>
            <input
              type="checkbox"
              checked={course.seen}
              onChange={e => {
                onToggle(
                  course.id,
                  e.target.checked
                );
              }}
            />
            {course.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
