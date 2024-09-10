// Exam.js
import React from 'react';
import { useForm } from 'react-hook-form';

const Exam = () => {
  const { register, handleSubmit } = useForm();

  const handleExam = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleExam)}>
        <input type="text" {...register('question1')} />
        <input type="text" {...register('question2')} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Exam;