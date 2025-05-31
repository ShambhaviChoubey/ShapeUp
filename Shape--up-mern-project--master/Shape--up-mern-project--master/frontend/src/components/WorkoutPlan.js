import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Table } from "react-bootstrap";

const WorkoutPlan = () => {
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const [exercises, setExercises] = useState([]);

  const muscleGroups = [
    'Back', 'Cardio', 'Chest', 'Lower Arms', 
    'Lower Legs', 'Neck', 'Shoulders', 'Upper Arms', 
    'Upper Legs', 'Waist'
  ];

  const exerciseDatabase = {
    'Back': [
      { name: 'Deadlifts', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } },
      { name: 'Lat Pulldowns', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } },
      { name: 'Bent-Over Rows', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } }
    ],
    'Cardio': [
      { name: 'Running', sets: { ectomorph: '20-30 mins', mesomorph: '30-40 mins', endomorph: '40-50 mins' } },
      { name: 'Cycling', sets: { ectomorph: '25-35 mins', mesomorph: '35-45 mins', endomorph: '45-55 mins' } },
      { name: 'Jump Rope', sets: { ectomorph: '15-20 mins', mesomorph: '20-30 mins', endomorph: '30-40 mins' } }
    ],
    'Chest': [
      { name: 'Barbell Bench Press', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } },
      { name: 'Dumbbell Flyes', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } },
      { name: 'Push-Ups', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } }
    ],
    'Lower Arms': [
      { name: 'Wrist Curls', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } },
      { name: 'Reverse Curls', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } },
      { name: 'Farmers Walk', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } }
    ],
    'Lower Legs': [
      { name: 'Barbell Squats', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } },
      { name: 'Lunges', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } },
      { name: 'Calf Raises', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } }
    ],
    'Neck': [
      { name: 'Neck Bridges', sets: { ectomorph: '2-3', mesomorph: '3-4', endomorph: '4-5' } },
      { name: 'Shrugs', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } },
      { name: 'Neck Flexion', sets: { ectomorph: '2-3', mesomorph: '3-4', endomorph: '4-5' } }
    ],
    'Shoulders': [
      { name: 'Overhead Press', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } },
      { name: 'Lateral Raises', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } },
      { name: 'Front Raises', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } }
    ],
    'Upper Arms': [
      { name: 'Bicep Curls', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } },
      { name: 'Tricep Dips', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } },
      { name: 'Hammer Curls', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } }
    ],
    'Upper Legs': [
      { name: 'Leg Press', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } },
      { name: 'Hamstring Curls', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } },
      { name: 'Leg Extensions', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } }
    ],
    'Waist': [
      { name: 'Plank', sets: { ectomorph: '3-4 sets (30-45s)', mesomorph: '4-5 sets (45-60s)', endomorph: '5-6 sets (60-90s)' } },
      { name: 'Russian Twists', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } },
      { name: 'Side Bends', sets: { ectomorph: '3-4', mesomorph: '4-5', endomorph: '5-6' } }
    ]
  };

  const handleMuscleSelect = (muscle) => {
    setSelectedMuscle(muscle);
    setExercises(exerciseDatabase[muscle] || []);
  };

  return (
    <div className="workout-page">
      <div className="workout-container">
        <h1>Search For A Perfect Exercise</h1>
        
        <div className="muscle-selector">
          <select 
            value={selectedMuscle} 
            onChange={(e) => handleMuscleSelect(e.target.value)}
          >
            <option value="">Select A Muscle Group</option>
            {muscleGroups.map((group) => (
              <option key={group} value={group}>{group}</option>
            ))}
          </select>
        </div>

        {exercises.length > 0 && (
          <div className="exercise-list">
            <h2>Exercises for {selectedMuscle}</h2>
            {exercises.map((exercise, index) => (
              <div key={index} className="exercise-card">
                <h3>{exercise.name}</h3>
                <div className="sets-recommendation">
                  <h4>Optimal Sets:</h4>
                  <ul>
                    <li>Ectomorph: {exercise.sets.ectomorph}</li>
                    <li>Mesomorph: {exercise.sets.mesomorph}</li>
                    <li>Endomorph: {exercise.sets.endomorph}</li>
                  </ul>
                </div>
                <div className="exercise-tips">
                  <p>Pro Tip: Start with lighter weights to perfect your form before increasing intensity</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
    </div>
  );
};

export default WorkoutPlan;
