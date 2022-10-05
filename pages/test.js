import styled from 'styled-components';
export default function Test() {
  return (
    <div style={{ paddingTop: '15rem' }}>
      <button
        onClick={() => dataLayer.push({ event: 'submitted_contact_form' })}
      >
        Button 5
      </button>
      <button
        onClick={() => dataLayer.push({ event: 'submitted_contact_form' })}
      >
        Button 5
      </button>
    </div>
  );
}
