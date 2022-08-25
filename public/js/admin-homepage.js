const tableContainer = document.getElementById("Tbody");
const url = `/api/v1/applications`;

const getApplications = async () => {
try {
    const { data: response } = await axios.get(url);
    const applications = response.data;
    console.log(applications);

    const arr_applications = applications.map((applicant) => {
      const { profession, location } = applicant.appliedFor;
      return `<tr>
              <td>${profession} at ${location}</td>
              <td>
                <ul>
                  <li>Name: ${applicant.full_name}</li>
                  <li>E-mail: ${applicant.email}</li>
                  <li>Phone: ${applicant.phone_number}</li>
                  <li>Profession: ${applicant.profession}</li>
                  <li>Experience: ${applicant.experience}</li>
                  <li>How ready: ${applicant.how_ready}</li>
                </ul>
              </td>
              <td>${applicant.time}</td>
            </tr>`;
    });
    tableContainer.innerHTML = arr_applications.reverse();
} catch (error) {
  tableContainer.innerHTML = 'Oops, something went wrong.'
}
};
getApplications();
