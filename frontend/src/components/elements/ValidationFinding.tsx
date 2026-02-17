import React from 'react';

// Define a tuple type for the findings [Type (e.g. error), location (e.g. row 5), message, fix/recommendation]
export type ValidationFinding = [string, string, string, string];


// Color mapping and styling based on the finding type
const getStyles = (type: string): React.CSSProperties => {
  switch (type.toLowerCase()) {
    case 'error':
      return {
        backgroundColor: '#f44336',
        color: 'white',
        borderLeft: '5px solid #d32f2f',
      };
    case 'warning':
      return {
        backgroundColor: '#ff9800',
        color: 'white',
        borderLeft: '5px solid #f57c00',
      };
    case 'info':
      return {
        backgroundColor: '#2196f3',
        color: 'white',
        borderLeft: '5px solid #1976d2',
      };
    case 'success':
      return {
        backgroundColor: '#4caf50',
        color: 'white',
        borderLeft: '5px solid #388e3c',
      };
    default:
      return {
        backgroundColor: '#e0e0e0',
        color: 'black',
        borderLeft: '5px solid #9e9e9e',
      };
  }
};

// The component that represents a single finding
interface FindingProps {
  finding: ValidationFinding;
}

export const FindingAlert: React.FC<FindingProps> = ({ finding }) => {
  const [type, row, issue, suggestion] = finding;
  const styles = getStyles(type);

  return (
    <div style={{ ...styles, padding: '16px', marginBottom: '16px', borderRadius: '4px' }}>
      <strong>{type}:</strong> {row} - {issue}. <em>{suggestion}</em>
    </div>
  );
};

export default FindingAlert;