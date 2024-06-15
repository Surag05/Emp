document.addEventListener('DOMContentLoaded', () => {
    const leaveRequestForm = document.getElementById('leaveRequestForm');
    const leaveRequestList = document.getElementById('leaveRequestList');
    const expenseClaimForm = document.getElementById('expenseClaimForm');
    const expenseClaimList = document.getElementById('expenseClaimList');
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackList = document.getElementById('feedbackList');
  
    leaveRequestForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('leaveEmployeeName').value;
      const startDate = document.getElementById('leaveStartDate').value;
      const endDate = document.getElementById('leaveEndDate').value;
      const listItem = document.createElement('li');
      listItem.textContent = `${name}: Leave from ${startDate} to ${endDate}`;
      leaveRequestList.appendChild(listItem);
      leaveRequestForm.reset();
    });
  
    expenseClaimForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('expenseEmployeeName').value;
      const amount = document.getElementById('expenseAmount').value;
      const description = document.getElementById('expenseDescription').value;
      const listItem = document.createElement('li');
      listItem.textContent = `${name}: $${amount} - ${description}`;
      expenseClaimList.appendChild(listItem);
      expenseClaimForm.reset();
    });
  
    feedbackForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('feedbackEmployeeName').value;
      const feedback = document.getElementById('feedbackText').value;
      const listItem = document.createElement('li');
      listItem.textContent = `${name}: ${feedback}`;
      feedbackList.appendChild(listItem);
      feedbackForm.reset();
    });
  });
  