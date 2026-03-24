import React from 'react';

const StudentList = ({ allStudents, filterActive }) => {
  // Тернарний вибір масиву
  const studentsToRender = filterActive 
    ? allStudents.filter(s => s.isActive)
    : allStudents;

  // Empty state
  if (studentsToRender.length === 0) {
    return <p className="empty-state">За вашим запитом нікого не знайдено</p>;
  }

  return (
    <ul className="students-list">
      {studentsToRender.map(student => {
        const scoreVal = student.score;
        const statusText = (scoreVal ?? 0) >= 60 ? "Зараховано" : "Незараховано";
        const statusColor = (scoreVal ?? 0) >= 60 ? '#10b981' : '#f43f5e';
        
        return (
          <li 
            key={student.id} 
            className="student-item"
            style={!student.isActive ? { color: '#9ca3af', opacity: 0.6 } : {}}
          >
            <strong>{student.name}</strong> — {scoreVal ?? "Оцінка відсутня"} 
            <span style={{ 
              marginLeft: 'auto', 
              fontWeight: 'bold', 
              color: statusColor,
              float: 'right'
            }}>
              {statusText}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default StudentList;
