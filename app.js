function calculateExperience(startDate) {
    const start = new Date(startDate);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months };
}

function chatbotExperience() {
    const startDate = '2023-08-01';
    const experience = calculateExperience(startDate);

    const experienceText = `${experience.years} year(s) and ${experience.months} month(s).`;
    document.getElementById('totalExperience').textContent = experienceText;
}

chatbotExperience();