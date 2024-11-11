import React, { useState } from 'react';

const Appointments = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, name: "John Doe", reason: "Check-up", date: "2024-11-15", status: "Scheduled" },
    { id: 2, name: "Jane Smith", reason: "Consultation", date: "2024-11-17", status: "Scheduled" },
    { id: 3, name: "Bob Johnson", reason: "Follow-up", date: "2024-11-20", status: "Scheduled" },
  ]);

  const [completedCount, setCompletedCount] = useState(0);

  const markAsCompleted = (id) => {
    const updatedAppointments = appointments.map((appointment) => {
      if (appointment.id === id && appointment.status === "Scheduled") {
        setCompletedCount(completedCount + 1);
        return { ...appointment, status: "Completed" };
      }
      return appointment;
    });
    setAppointments(updatedAppointments);
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      textAlign: 'center',
    },
    header: {
      fontSize: '24px',
      margin: '20px 0',
    },
    card: {
      border: '1px solid #ddd',
      borderRadius: '5px',
      padding: '10px',
      margin: '10px 0',
      textAlign: 'left',
    },
    completed: {
      textDecoration: 'line-through',
      color: 'gray',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      padding: '5px 10px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Patient Appointments</h1>
      {appointments.map((appointment) => (
        <div key={appointment.id} style={styles.card}>
          <p><strong>Patient Name:</strong> <span style={appointment.status === "Completed" ? styles.completed : {}}>{appointment.name}</span></p>
          <p><strong>Reason:</strong> {appointment.reason}</p>
          <p><strong>Date:</strong> {appointment.date}</p>
          <p><strong>Status:</strong> {appointment.status}</p>
          {appointment.status === "Scheduled" && (
            <button style={styles.button} onClick={() => markAsCompleted(appointment.id)}>
              Mark as Completed
            </button>
          )}
        </div>
      ))}
      <h2>Total Completed Appointments: {completedCount}</h2>
    </div>
  );
};

export default Appointments;
