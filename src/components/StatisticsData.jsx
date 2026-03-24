import React from 'react';

const StatisticsData = ({ students }) => {
  const activeStudents = students.filter(student => student.isActive);
  const averageScore = activeStudents.length > 0 
    ? activeStudents.reduce((acc, student) => acc + student.score, 0) / activeStudents.length
    : 0;

  return (
    <div className="average-score-block" style={{ textAlign: 'center', padding: '30px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
      <h3 style={{ color: '#334155', marginBottom: '16px' }}>Загальна статистика:</h3>
      <p style={{ fontSize: '18px', color: '#64748b' }}>
        Середній бал активних студентів: <br />
        <span className="accent-text" style={{ fontSize: '36px', display: 'inline-block', marginTop: '10px' }}>{averageScore.toFixed(1)}</span>
      </p>
    </div>
  );
};

export default StatisticsData;
