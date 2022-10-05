import styled from 'styled-components';
export default function test() {
  return (
    <div style={{ paddingTop: '15rem' }}>
      <button
        onClick={() => dataLayer.push({ submitted_contact_form: 'submitted' })}
      >
        Button 1
      </button>
    </div>
  );
}
