import React, { useState } from 'react';
import Input from '../atoms/Input/Input';
import Button from '../atoms/Button/Button';
import styles from './AddStudentForm.module.css';

const AddStudentForm = ({ onAddStudent }) => {
  const [formData, setFormData] = useState({ name: '', score: '' });
  const [errors, setErrors] = useState({});

  const validate = (name, score) => {
    const newErrors = {};
    const trimmedName = name.trim();
    if (!trimmedName) {
      newErrors.name = 'Ім\'я не може бути порожнім';
    } else if (trimmedName.length < 2) {
      newErrors.name = 'Ім\'я має містити щонайменше 2 символи';
    }

    if (score === '') {
      newErrors.score = 'Бал обов\'язковий';
    } else {
      const numScore = Number(score);
      if (isNaN(numScore) || numScore < 0 || numScore > 100) {
        newErrors.score = 'Бал має бути від 0 до 100';
      }
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    setErrors(validate(newFormData.name, newFormData.score));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentErrors = validate(formData.name, formData.score);
    if (Object.keys(currentErrors).length === 0) {
      onAddStudent({
        id: Date.now(),
        name: formData.name.trim(),
        score: Number(formData.score),
        isActive: true // Нові студенти за замовчуванням активні
      });
      setFormData({ name: '', score: '' });
      setErrors({});
    } else {
      setErrors(currentErrors);
    }
  };

  const isFormValid = formData.name.trim().length >= 2 && 
                      formData.score !== '' && 
                      Number(formData.score) >= 0 && 
                      Number(formData.score) <= 100 &&
                      Object.keys(errors).length === 0;

  return (
    <div className={styles.formPanel}>
      <h3 className={styles.title}>Додати нового студента</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.fieldGroup}>
          <Input 
            name="name"
            label="Ім'я студента"
            placeholder="Введіть ім'я"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </div>
        
        <div className={styles.fieldGroup}>
          <Input 
            type="number"
            name="score"
            label="Бал (0-100)"
            placeholder="Введіть бал"
            value={formData.score}
            onChange={handleChange}
          />
          {errors.score && <span className={styles.errorText}>{errors.score}</span>}
        </div>

        <div className={styles.submitWrapper}>
          <Button variant="primary" disabled={!isFormValid}>
            Додати
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddStudentForm;
