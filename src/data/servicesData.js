export const servicesData = [
    {
        id: 1,
        title: "Submit Your Business Proposal",
        slug: "submit-your-business-proposal",
        description: "Submit your business proposal to the Democratic Republic of the Yoruba.",
        content: [
            {
                type: "heading",
                text: "Business Proposal Submission"
            },
            {
                type: "paragraph",
                text: "We invite entrepreneurs, innovators, and business leaders to submit their proposals for review. The Democratic Republic of the Yoruba is committed to fostering a thriving economic environment. Whether you have a startup idea, an expansion plan, or a large-scale industrial project, we want to partner with you to build a prosperous nation."
            },
            {
                type: "paragraph",
                text: "Please provide a detailed overview of your proposal using the form below. Ensure that your contact information is accurate so that our team can reach out to you for further discussions."
            },
            {
                type: "list",
                items: [
                    "Strategic Business Plans",
                    "Investment Opportunities",
                    "Public-Private Partnerships",
                    "Innovation & Technology Projects",
                    "Sustainable Development Initiatives"
                ]
            }
        ],
        formFields: [
            { type: "header", label: "Business Proposal Form" },
            { type: "paragraph", text: "Please fill the form below to register your business Proposal with D.R.Y government" },
            { name: "firstName", label: "First Name", type: "text", required: true },
            { name: "middleName", label: "Middle Name", type: "text", required: false },
            { name: "lastName", label: "Last Name", type: "text", required: true },
            { name: "title", label: "Title", type: "select", options: ["Mr", "Mrs", "Ms", "Dr", "Chief", "Prof", "Rev", "Other"], required: true },
            { name: "email", label: "Email Address", type: "email", required: true },
            { name: "phone", label: "Phone No.", type: "tel", required: true },
            { name: "dob", label: "Date of Birth", type: "date", required: true },
            { name: "nextOfKinName", label: "Next of Kin Name", type: "text", required: true },
            { name: "nextOfKinPhone", label: "Next of Kin Phone No", type: "tel", required: true },
            
            { type: "header", label: "Home Address" },
            { name: "address1", label: "Address Line 1", type: "text", required: true },
            { name: "address2", label: "Address Line 2", type: "text", required: false },
            { name: "city", label: "City", type: "text", required: true },
            { name: "zipCode", label: "Zip Code", type: "text", required: false },
            { name: "country", label: "Country", type: "select", options: [
                "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", 
                "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", 
                "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", 
                "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
                "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", 
                "Fiji", "Finland", "France", 
                "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", 
                "Haiti", "Holy See", "Honduras", "Hungary", 
                "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", 
                "Ivory Coast", "Jamaica", "Japan", "Jordan", 
                "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", 
                "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
                "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", 
                "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", 
                "Oman", 
                "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", 
                "Qatar", 
                "Romania", "Russia", "Rwanda", 
                "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", 
                "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", 
                "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", 
                "Vanuatu", "Venezuela", "Vietnam", 
                "Yemen", 
                "Zambia", "Zimbabwe", "Other"
            ], required: true },
            
            { name: "proposalCategory", label: "My proposal is a fresh business idea", type: "checkbox", required: true },
            
            { name: "jobServiceTitle", label: "Job / Service Title", type: "text", required: true },
            { name: "companyName", label: "Company / Business Name", type: "text", required: true },
            
            { name: "businessRunning", label: "Is your business still running?", type: "radio", options: ["Yes", "No"], required: true },
            
            { name: "jobServiceDescription", label: "Job / Service Description", type: "textarea", required: true },
            { name: "proposalTitle", label: "Proposal Title", type: "text", required: true },
            { name: "abstract", label: "Abstract", type: "textarea", required: true },
            { name: "videoUrl", label: "Video URL", type: "url", required: false },
            
            { type: "header", label: "Uploads" },
            { name: "passportPhoto", label: "Upload Passport Photograph", type: "file", accept: "image/*", required: true },
            { name: "cvResume", label: "Upload PDF of Your CV / Resume", type: "file", accept: ".pdf,.doc,.docx", required: true },
            
            { name: "additionalInfo", label: "Additional Information", type: "textarea", required: false },
            
            { name: "agreement", label: "I have read and agree to the rules and policies on the website of the Yoruba Democratic Republic.", type: "checkbox", required: true }
        ]
    },
    {
        id: 2,
        title: "Finance & Commercial Services",
        slug: "finance-commercial-services",
        description: "Financial and commercial services for the Yoruba Nation.",
        content: [
            {
                type: "heading",
                text: "Finance & Commercial Services"
            },
            {
                type: "heading",
                text: "Important Note"
            },
            {
                type: "paragraph",
                text: "This is part of the development plan for the Indigenous Yoruba People (I.Y.P) of Democratic Republic of the Yoruba (D.R.Y), known as the Blueprint."
            },
            {
                type: "paragraph",
                text: "As our mother, Modupeola Onitiri-Abiola (Chief Mrs) said, there shall no longer be unemployment or poverty or lack among the Yoruba, therefore, your registration is important for us to put an end to poverty and lack in Democratic Republic of the Yoruba (D.R.Y)"
            },
            {
                type: "paragraph",
                text: "Yoruba land is filled with milk and honey with lots of intelligent people that the blood sucking Nigeria kept away from the citizens. You were all covered with veils, the riches in Yoruba land alone is enough for the whole Africa."
            },
            {
                type: "paragraph",
                text: "To ensure that there is development and progress in our nation and our economy, the government is imploring everyone to co-operate with us by registering with your correct information."
            },
            {
                type: "list",
                items: [
                    "Lack of experience does not matter at all!",
                    "Inability to speak English language does not matter at all!"
                ]
            },
            {
                type: "paragraph",
                text: "Our goal is to be the most developed nation in the world. We cannot achieve this without your knowledge, wisdom, and understanding; so, please submit your names. Let’s work together to create a better tomorrow for our children and the generations that come after us!"
            },
            {
                type: "paragraph",
                text: "The fields marked (*) are important for us to answer. Make sure everything you send is truthful so you don't miss out on the opportunity."
            },
            {
                type: "heading",
                text: "I live abroad but I'm a Yoruba; can i still apply?"
            },
            {
                type: "paragraph",
                text: "Yes, You can apply. Democratic Republic of the Yoruba (D.R.Y) is for the Indigenous Yoruba People (I.Y.P) irrespective of where you are, you entitled to all the benefits."
            }
        ],
        formFields: [
            { type: "header", label: "Personal Information" },
            { type: "paragraph", text: "Feel free to submit your data. Your information are stored & processed securely." },
            { name: "firstName", label: "First Name", type: "text", required: true },
            { name: "middleName", label: "Middle Name", type: "text", required: false },
            { name: "lastName", label: "Last Name", type: "text", required: true },
            { name: "title", label: "Title", type: "select", options: ["Mr", "Mrs", "Ms", "Dr", "Chief", "Prof", "Rev", "Other"], required: true },
            { name: "email", label: "Email Address", type: "email", required: true },
            { name: "phone", label: "Phone No.", type: "tel", required: true },
            { name: "dob", label: "Date of Birth", type: "date", required: true },
            { name: "nextOfKinName", label: "Next of Kin Name", type: "text", required: true },
            { name: "nextOfKinPhone", label: "Next of Kin Phone No", type: "tel", required: true },
            
            { type: "header", label: "Home Address" },
            { name: "address1", label: "Address Line 1", type: "text", required: true },
            { name: "address2", label: "Address Line 2", type: "text", required: false },
            { name: "city", label: "City", type: "text", required: true },
            { name: "zipCode", label: "Zip Code", type: "text", required: false },
            { name: "country", label: "Country", type: "select", options: [
                "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", 
                "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", 
                "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", 
                "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
                "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", 
                "Fiji", "Finland", "France", 
                "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", 
                "Haiti", "Holy See", "Honduras", "Hungary", 
                "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", 
                "Ivory Coast", "Jamaica", "Japan", "Jordan", 
                "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", 
                "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
                "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", 
                "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", 
                "Oman", 
                "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", 
                "Qatar", 
                "Romania", "Russia", "Rwanda", 
                "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", 
                "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", 
                "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", 
                "Vanuatu", "Venezuela", "Vietnam", 
                "Yemen", 
                "Zambia", "Zimbabwe", "Other"
            ], required: true },
            
            { type: "header", label: "Professional Information" },
            { name: "professionCategory", label: "Select a category that best fit your profession", type: "select", options: ["Trader", "Transportation", "Marketing", "Accounting", "Banking & Finance", "Auditing", "Insurance", "Others (Please specify below)"], required: true },
            { name: "jobStatus", label: "Do you have a job?", type: "radio", options: ["Yes, I work at a local business.", "I have my own business, and I am my own boss.", "No, I am not working."], required: true },
            
            { type: "header", label: "Skills and Competence" },
            { name: "skillsCompetence", label: "Skills and Competence", type: "textarea", required: true },
            
            { type: "header", label: "Education and Experience" },
            { name: "educationExperience", label: "Education and Experience", type: "textarea", required: true },
            
            { name: "portfolio", label: "Anything to showcase competence and skill (e.g., a portfolio)?", type: "url", required: false, placeholder: "http://www.example.com/" },
            
            { type: "header", label: "Uploads" },
            { name: "passportPhoto", label: "Upload Passport Photograph", type: "file", accept: "image/*", required: true },
            { name: "cvResume", label: "Upload PDF of Your CV / Resume", type: "file", accept: ".pdf,.doc,.docx", required: true },
            
            { name: "readilyAvailable", label: "Would you be readily available once we make a contact?", type: "checkbox", required: false },
            { name: "agreement", label: "I have read and agree to the rules and policies on the website of the Yoruba Democratic Republic.", type: "checkbox", required: true }
        ]
    },
    {
        id: 3,
        title: "Health and Wellness Program – Health Matters!",
        slug: "health-and-wellness-plan-health-matters",
        description: "Promoting health and wellness across the nation.",
        content: [
            {
                type: "heading",
                text: "Health and Wellness Program – Health Matters!"
            },
            {
                type: "heading",
                text: "Important Note"
            },
            {
                type: "paragraph",
                text: "Health is wealth, therefore, the Divine Blueprint of Democratic Republic of the Yoruba (D.R.Y) contains plans for comprehensive and medical systems which will be the first of its kind in the world."
            },
            {
                type: "paragraph",
                text: "A healthy people makes a wealthy nation, and as our mother, Modupeola Onitiri-Abiola (Chief Mrs) has said that no one shall live in lack or poverty anymore in D.R.Y, the issue of healthcare programme shall be taken serious so that we can have a healthy and a prosperous nation."
            },
            {
                type: "paragraph",
                text: "According to our mother Modupeola Onitiri-Abiola (Chief Mrs), the D.R.Y Blueprint contains plans for free medical care for all Indigenous Yoruba People (I.Y.P) of Democratic Republic of the Yoruba (D.R.Y)"
            },
            {
                type: "paragraph",
                text: "Yoruba land is blessed with great wealth in natural resources, intelligent people and other sources of income which are more than enough to provide good health services for all."
            },
            {
                type: "paragraph",
                text: "To ensure that there is development and progress in our nation and our economy, the government is imploring everyone to co-operate with us by registering with your correct information."
            },
            {
                type: "list",
                items: [
                    "Lack of experience does not matter at all!",
                    "Inability to speak English language does not matter at all!"
                ]
            },
            {
                type: "paragraph",
                text: "Our goal is to be the most developed nation in the world. We cannot achieve this without your knowledge, wisdom, and understanding; so, please submit your names. Let’s work together to create a better tomorrow for our children and the generations that come after us!"
            },
            {
                type: "paragraph",
                text: "Fill out this form as outlined; Fields marked (*) are required for us! You must be a Yoruba national! Anyone who leaves their name – who is not a Yoruba national – will be removed."
            },
            {
                type: "heading",
                text: "I live abroad but I'm a Yoruba; can i still apply?"
            },
            {
                type: "paragraph",
                text: "Yes, You can apply. Democratic Republic of the Yoruba (D.R.Y) is for the Indigenous Yoruba People (I.Y.P) irrespective of where you are, you entitled to all the benefits."
            }
        ],
        formFields: [
            { type: "header", label: "Personal Information" },
            { type: "paragraph", text: "Feel free to submit your data. Your information are stored & processed securely." },
            { name: "firstName", label: "First Name", type: "text", required: true },
            { name: "middleName", label: "Middle Name", type: "text", required: false },
            { name: "lastName", label: "Last Name", type: "text", required: true },
            { name: "title", label: "Title", type: "select", options: ["Mr", "Mrs", "Ms", "Dr", "Chief", "Prof", "Rev", "Other"], required: true },
            { name: "email", label: "Email Address", type: "email", required: true },
            { name: "phone", label: "Phone No.", type: "tel", required: true },
            { name: "dob", label: "Date of Birth", type: "date", required: true },
            { name: "nextOfKinName", label: "Next of Kin Name", type: "text", required: true },
            { name: "nextOfKinPhone", label: "Next of Kin Phone No", type: "tel", required: true },
            
            { type: "header", label: "Home Address" },
            { name: "address1", label: "Address Line 1", type: "text", required: true },
            { name: "address2", label: "Address Line 2", type: "text", required: false },
            { name: "city", label: "City", type: "text", required: true },
            { name: "zipCode", label: "Zip Code", type: "text", required: false },
            { name: "country", label: "Country", type: "select", options: [
                "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", 
                "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", 
                "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", 
                "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
                "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", 
                "Fiji", "Finland", "France", 
                "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", 
                "Haiti", "Holy See", "Honduras", "Hungary", 
                "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", 
                "Ivory Coast", "Jamaica", "Japan", "Jordan", 
                "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", 
                "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
                "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", 
                "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", 
                "Oman", 
                "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", 
                "Qatar", 
                "Romania", "Russia", "Rwanda", 
                "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", 
                "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", 
                "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", 
                "Vanuatu", "Venezuela", "Vietnam", 
                "Yemen", 
                "Zambia", "Zimbabwe", "Other"
            ], required: true },
            
            { type: "header", label: "Explanation of Work, Wisdom and Knowledge" },
            { name: "jobSuitability", label: "Choose a job that suits you", type: "select", options: ["Environmental Health", "Nutritionist", "Surgeon", "Pharmacist", "Dentist", "Psychologist", "Physio-therapist / Wellness / Fitness", "Other (Please Specify)"], required: true },
            { name: "hospitalName", label: "Name of the hospital you are working at", type: "text", required: false },
            { name: "workArea", label: "Area", type: "text", required: false },
            { name: "workRegion", label: "Region", type: "text", required: false },
            { name: "workCity", label: "City", type: "text", required: false },
            { name: "workZipCode", label: "Zip Code", type: "text", required: false },
            { name: "workCountry", label: "Country", type: "select", options: [
                "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", 
                "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", 
                "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", 
                "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
                "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", 
                "Fiji", "Finland", "France", 
                "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", 
                "Haiti", "Holy See", "Honduras", "Hungary", 
                "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", 
                "Ivory Coast", "Jamaica", "Japan", "Jordan", 
                "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", 
                "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
                "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", 
                "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", 
                "Oman", 
                "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", 
                "Qatar", 
                "Romania", "Russia", "Rwanda", 
                "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", 
                "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", 
                "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", 
                "Vanuatu", "Venezuela", "Vietnam", 
                "Yemen", 
                "Zambia", "Zimbabwe", "Other"
            ], required: false },
            { name: "experienceYears", label: "How many years of experience do you have in this field?", type: "text", required: true },
            { name: "portfolio", label: "Anything to showcase competence and skill (e.g., a portfolio)?", type: "url", required: false, placeholder: "http://www.example.com/" },
            
            { name: "isTeacher", label: "Are you a teacher?", type: "radio", options: ["Yes", "Not really"], required: true },
            
            { type: "header", label: "Uploads" },
            { name: "passportPhoto", label: "Upload Passport Photograph", type: "file", accept: "image/*", required: true },
            { name: "cvResume", label: "Upload PDF of Your CV / Resume", type: "file", accept: ".pdf,.doc,.docx", required: true },
            
            { name: "readyToStart", label: "Are you ready to start work as soon as we contact you?", type: "checkbox", required: false },
            { name: "agreement", label: "I have read and agree to the rules and policies on the website of the Yoruba Democratic Republic.", type: "checkbox", required: true }
        ]
    },
    {
        id: 4,
        title: "Education",
        slug: "education",
        description: "Empowering the future through quality education.",
        content: [
            {
                type: "heading",
                text: "Education"
            },
            {
                type: "heading",
                text: "Department of Education"
            },
            {
                type: "paragraph",
                text: "This is part of the development plan for the Indigenous Yoruba People (I.Y.P) of Democratic Republic of the Yoruba (D.R.Y), known as the Blueprint."
            },
            {
                type: "paragraph",
                text: "As our mother, Modupeola Onitiri-Abiola (Chief Mrs) said, there shall no longer be unemployment or poverty or lack among the Yoruba, therefore, your registration is important for us to put an end to poverty and lack in Democratic Republic of the Yoruba (D.R.Y)"
            },
            {
                type: "paragraph",
                text: "Yoruba land is filled with milk and honey with lots of intelligent people that the blood sucking Nigeria kept away from the citizens. You were all covered with veils, the riches in Yoruba land alone is enough for the whole Africa."
            },
            {
                type: "paragraph",
                text: "To ensure that there is development and progress in our nation and our economy, the government is imploring everyone to co-operate with us by registering with your correct information."
            },
            {
                type: "paragraph",
                text: "The fields marked (*) are important for us to answer. Make sure everything you send is truthful so you don't miss out on the opportunity."
            },
            {
                type: "heading",
                text: "I live abroad but I'm a Yoruba; can i still apply?"
            },
            {
                type: "paragraph",
                text: "Yes, You can apply. Democratic Republic of the Yoruba (D.R.Y) is for the Indigenous Yoruba People (I.Y.P) irrespective of where you are, you entitled to all the benefits."
            }
        ],
        formFields: [
            { type: "header", label: "Personal Information" },
            { type: "paragraph", text: "Feel free to submit your data. Your information are stored & processed securely." },
            { name: "firstName", label: "First Name", type: "text", required: true },
            { name: "middleName", label: "Middle Name", type: "text", required: false },
            { name: "lastName", label: "Last Name", type: "text", required: true },
            { name: "title", label: "Title", type: "select", options: ["Mr", "Mrs", "Ms", "Dr", "Chief", "Prof", "Rev", "Other"], required: true },
            { name: "email", label: "Email Address", type: "email", required: true },
            { name: "phone", label: "Phone No.", type: "tel", required: true },
            { name: "dob", label: "Date of Birth", type: "date", required: true },
            { name: "nextOfKinName", label: "Next of Kin Name", type: "text", required: true },
            { name: "nextOfKinPhone", label: "Next of Kin Phone No", type: "tel", required: true },
            
            { type: "header", label: "Home Address" },
            { name: "address1", label: "Address Line 1", type: "text", required: true },
            { name: "address2", label: "Address Line 2", type: "text", required: false },
            { name: "city", label: "City", type: "text", required: true },
            { name: "zipCode", label: "Zip Code", type: "text", required: false },
            { name: "country", label: "Country", type: "select", options: [
                "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", 
                "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", 
                "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", 
                "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
                "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", 
                "Fiji", "Finland", "France", 
                "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", 
                "Haiti", "Holy See", "Honduras", "Hungary", 
                "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", 
                "Ivory Coast", "Jamaica", "Japan", "Jordan", 
                "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", 
                "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
                "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", 
                "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", 
                "Oman", 
                "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", 
                "Qatar", 
                "Romania", "Russia", "Rwanda", 
                "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", 
                "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", 
                "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", 
                "Vanuatu", "Venezuela", "Vietnam", 
                "Yemen", 
                "Zambia", "Zimbabwe", "Other"
            ], required: true },
            
            { type: "header", label: "Professional Information" },
            { name: "professionCategory", label: "Select a category that best fit your profession", type: "select", options: ["Educationist", "Linguistics", "Translator/Interpreter"], required: true },
            { name: "combineResearch", label: "Do you combine teaching with academic research?", type: "radio", options: ["Yes", "No"], required: true },
            { name: "teachingRole", label: "Which applies to you?", type: "select", options: ["I teach in a primary school", "I teach in a secondary school", "I lecture in a university / Polytechnic / College of Education", "Others (specify) below"], required: true },
            { name: "teachingExperience", label: "How many years have you been in the teaching field?", type: "text", required: true },
            { name: "physicallyChallengedExp", label: "Do you have experience taking on physically challenged students struggling with hearing or sight?", type: "radio", options: ["Yes", "No"], required: true },
            
            { type: "header", label: "Skills and Competence" },
            { name: "skillsCompetence", label: "Skills and Competence", type: "textarea", required: true },
            
            { type: "header", label: "Education and Experience" },
            { name: "educationExperience", label: "Education and Experience", type: "textarea", required: true },
            
            { name: "portfolio", label: "Anything to showcase competence and skill (e.g., a portfolio)?", type: "url", required: false, placeholder: "http://www.example.com/" },
            
            { type: "header", label: "Uploads" },
            { name: "passportPhoto", label: "Upload Passport Photograph", type: "file", accept: "image/*", required: true },
            { name: "cvResume", label: "Upload PDF of Your CV / Resume", type: "file", accept: ".pdf,.doc,.docx", required: true },
            
            { name: "readilyAvailable", label: "Would you be readily available once we make a contact?", type: "checkbox", required: false },
            { name: "agreement", label: "I have read and agree to the rules and policies on the website of the Yoruba Democratic Republic.", type: "checkbox", required: true }
        ]
    },
    {
        id: 5,
        title: "Engineering",
        slug: "engineering",
        description: "Building the infrastructure of tomorrow.",
        content: [
            {
                type: "heading",
                text: "Engineering"
            },
            {
                type: "paragraph",
                text: "This is part of the development plan for the Indigenous Yoruba People (I.Y.P) of Democratic Republic of the Yoruba (D.R.Y), known as the Blueprint."
            },
            {
                type: "paragraph",
                text: "As our mother, Modupeola Onitiri-Abiola (Chief Mrs) said, there shall no longer be unemployment or poverty or lack among the Yoruba, therefore, your registration is important for us to put an end to poverty and lack in Democratic Republic of the Yoruba (D.R.Y)"
            },
            {
                type: "paragraph",
                text: "Yoruba land is filled with milk and honey with lots of intelligent people that the blood sucking Nigeria kept away from the citizens. You were all covered with veils, the riches in Yoruba land alone is enough for the whole Africa."
            },
            {
                type: "paragraph",
                text: "To ensure that there is development and progress in our nation and our economy, the government is imploring everyone to co-operate with us by registering with information on the job you desire, to make it easy for us to provide jobs for all."
            },
            {
                type: "list",
                items: [
                    "Lack of experience does not matter at all!",
                    "Inability to speak English language does not matter at all!"
                ]
            },
            {
                type: "paragraph",
                text: "Our objective is to be the most developed country in the world. We cannot succeed without your knowledge, wisdom and understanding, therefore, please register. Let us co-operate to provide a good future to our children and the generations coming after us."
            },
            {
                type: "heading",
                text: "Important Information"
            },
            {
                type: "paragraph",
                text: "Fill this form as specified: The spaces marked (*) are important. Make sure that all the information you give is true so that you will not lose the opportunity"
            },
            {
                type: "heading",
                text: "Democratic Republic of the Yoruba (D.R.Y) National Anthem"
            },
            {
                type: "heading",
                text: "I live abroad but I'm a Yoruba; can i still apply?"
            },
            {
                type: "paragraph",
                text: "Yes, You can apply. Democratic Republic of the Yoruba (D.R.Y) is for the Indigenous Yoruba People (I.Y.P) irrespective of where you are, you entitled to all the benefits."
            }
        ],
        formFields: [
            { type: "header", label: "Personal Information" },
            { type: "paragraph", text: "Feel free to submit your data. Your information are stored & processed securely." },
            { name: "firstName", label: "First Name", type: "text", required: true },
            { name: "middleName", label: "Middle Name", type: "text", required: false },
            { name: "lastName", label: "Last Name", type: "text", required: true },
            { name: "title", label: "Title", type: "select", options: ["Mr", "Mrs", "Ms", "Dr", "Chief", "Prof", "Rev", "Other"], required: true },
            { name: "email", label: "Email Address", type: "email", required: true },
            { name: "phone", label: "Phone No.", type: "tel", required: true },
            { name: "dob", label: "Date of Birth", type: "date", required: true },
            { name: "nextOfKinName", label: "Next of Kin Name", type: "text", required: true },
            { name: "nextOfKinPhone", label: "Next of Kin Phone No", type: "tel", required: true },
            
            { type: "header", label: "Home Address" },
            { name: "address1", label: "Address Line 1", type: "text", required: true },
            { name: "address2", label: "Address Line 2", type: "text", required: false },
            { name: "city", label: "City", type: "text", required: true },
            { name: "zipCode", label: "Zip Code", type: "text", required: false },
            { name: "country", label: "Country", type: "select", options: [
                "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", 
                "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", 
                "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", 
                "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
                "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", 
                "Fiji", "Finland", "France", 
                "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", 
                "Haiti", "Holy See", "Honduras", "Hungary", 
                "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", 
                "Ivory Coast", "Jamaica", "Japan", "Jordan", 
                "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", 
                "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
                "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", 
                "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", 
                "Oman", 
                "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", 
                "Qatar", 
                "Romania", "Russia", "Rwanda", 
                "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", 
                "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", 
                "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", 
                "Vanuatu", "Venezuela", "Vietnam", 
                "Yemen", 
                "Zambia", "Zimbabwe", "Other"
            ], required: true },
            
            { type: "header", label: "Professional Information" },
            { name: "professionCategory", label: "Select a category that best fit your profession", type: "select", options: [
                "Civil Engineers", "Mechanical Engineers", "Aluminium Engineers", "Electrical Engineers", 
                "Computer Engineers", "Building Engineers", "Automobiles", "Agricultural Engineering", 
                "Biomedical Engineering", "Renewable Energy", "Material Science & Engineering"
            ], required: true },
            
            { name: "companyEmail", label: "Company’s email address", type: "email", required: true },
            { name: "workAddress1", label: "Address Line 1", type: "text", required: true },
            { name: "workAddress2", label: "Address Line 2", type: "text", required: false },
            { name: "workCity", label: "City", type: "text", required: true },
            { name: "workZipCode", label: "Zip Code", type: "text", required: false },
            { name: "employeeCount", label: "Number of employees", type: "select", options: ["< 10", "10 – 100", "100 – 500", "500 – 1000", "> 1000"], required: true },
            
            { name: "applyForContract", label: "Would you like to apply for contract related to your field?", type: "radio", options: ["Yes", "No"], required: true },
            
            { type: "header", label: "Skills and Competence" },
            { name: "skillsCompetence", label: "Skills and Competence", type: "textarea", required: true },
            
            { type: "header", label: "Education and Experience" },
            { name: "educationExperience", label: "Education and Experience", type: "textarea", required: true },
            
            { name: "portfolio", label: "Anything to showcase competence and skill (e.g., a portfolio)?", type: "url", required: false, placeholder: "http://www.example.com/" },
            
            { type: "header", label: "Uploads" },
            { name: "passportPhoto", label: "Upload Passport Photograph", type: "file", accept: "image/*", required: true },
            { name: "cvResume", label: "Upload PDF of Your CV / Resume", type: "file", accept: ".pdf,.doc,.docx", required: true },
            
            { name: "readyToStart", label: "Are you ready to start work as soon as we contact you?", type: "checkbox", required: false },
            { name: "agreement", label: "I have read and agree to the rules and policies on the website of the Yoruba Democratic Republic.", type: "checkbox", required: true }
        ]
    },
    {
        id: 6,
        title: "Artisans",
        slug: "artisans",
        description: "Supporting skilled craftsmanship and vocational trades.",
        content: [
            {
                type: "heading",
                text: "Artisans"
            },
            {
                type: "paragraph",
                text: "This is part of the development plan for the Indigenous Yoruba People (I.Y.P) of Democratic Republic of the Yoruba (D.R.Y), known as the Blueprint."
            },
            {
                type: "paragraph",
                text: "As our mother, Modupeola Onitiri-Abiola (Chief Mrs) said, there shall no longer be unemployment or poverty or lack among the Yoruba, therefore, your registration is important for us to put an end to poverty and lack in Democratic Republic of the Yoruba (D.R.Y)"
            },
            {
                type: "paragraph",
                text: "Yoruba land is filled with milk and honey with lots of intelligent people that the blood sucking Nigeria kept away from the citizens. You were all covered with veils, the riches in Yoruba land alone is enough for the whole Africa."
            },
            {
                type: "paragraph",
                text: "To ensure that there is development and progress in our nation and our economy, the government is imploring everyone to co-operate with us by registering with your correct information."
            },
            {
                type: "list",
                items: [
                    "Lack of experience does not matter at all!",
                    "Inability to speak English language does not matter at all!"
                ]
            },
            {
                type: "paragraph",
                text: "Our objective is to be the most developed country in the world. We cannot succeed without your knowledge, wisdom and understanding, therefore, please register. Let us co-operate to provide a good future to our children and the generations coming after us."
            },
            {
                type: "heading",
                text: "Important Information"
            },
            {
                type: "paragraph",
                text: "Fill this form as specified: The spaces marked (*) are important. Make sure that all the information you give is true so that you will not lose the opportunity"
            },
            {
                type: "paragraph",
                text: "You must be a Yoruba national! Anyone who leaves their name – who is not a Yoruba national – will be removed."
            },
            {
                type: "heading",
                text: "I live abroad but I'm a Yoruba; can i still apply?"
            },
            {
                type: "paragraph",
                text: "Yes, You can apply. Democratic Republic of the Yoruba is for the Indigenous People of Yoruba irrespective of where you are, you entitled to all the benefits."
            }
        ],
        formFields: [
            { type: "header", label: "Personal Information" },
            { type: "paragraph", text: "Feel free to submit your data. Your information are stored & processed securely." },
            { name: "firstName", label: "First Name", type: "text", required: true },
            { name: "middleName", label: "Middle Name", type: "text", required: false },
            { name: "lastName", label: "Last Name", type: "text", required: true },
            { name: "title", label: "Title", type: "select", options: ["Mr", "Mrs", "Ms", "Dr", "Chief", "Prof", "Rev", "Other"], required: true },
            { name: "email", label: "Email Address", type: "email", required: true },
            { name: "phone", label: "Phone No.", type: "tel", required: true },
            { name: "dob", label: "Date of Birth", type: "date", required: true },
            { name: "nextOfKinName", label: "Next of Kin Name", type: "text", required: true },
            { name: "nextOfKinPhone", label: "Next of Kin Phone No", type: "tel", required: true },
            
            { type: "header", label: "Home Address" },
            { name: "address1", label: "Address Line 1", type: "text", required: true },
            { name: "address2", label: "Address Line 2", type: "text", required: false },
            { name: "city", label: "City", type: "text", required: true },
            { name: "zipCode", label: "Zip Code", type: "text", required: false },
            { name: "country", label: "Country", type: "select", options: [
                "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", 
                "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", 
                "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", 
                "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
                "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", 
                "Fiji", "Finland", "France", 
                "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", 
                "Haiti", "Holy See", "Honduras", "Hungary", 
                "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", 
                "Ivory Coast", "Jamaica", "Japan", "Jordan", 
                "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", 
                "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
                "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", 
                "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", 
                "Oman", 
                "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", 
                "Qatar", 
                "Romania", "Russia", "Rwanda", 
                "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", 
                "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", 
                "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", 
                "Vanuatu", "Venezuela", "Vietnam", 
                "Yemen", 
                "Zambia", "Zimbabwe", "Other"
            ], required: true },
            
            { type: "header", label: "Explanation of Work, Wisdom and Knowledge" },
            { name: "jobSuitability", label: "Choose a job that suits you", type: "select", options: [
                "Painting", "Welding", "Aluminum Work (Installation of glass windows and doors)", 
                "Barbing", "Electrician", "POP Work", "Bricklayer or Tiler", "Iron Bender", 
                "Vulcanizer", "Technician", "Security personnel", "Driver", "Other (Please Specify)"
            ], required: true },
            { name: "isWorkplaceDifferent", label: "Is your workplace different from where you live?", type: "checkbox", required: false },
            { name: "workNeighborhood", label: "Neighborhood", type: "text", required: false },
            { name: "workRegion", label: "Region", type: "text", required: false },
            { name: "workCity", label: "City", type: "text", required: false },
            { name: "workZipCode", label: "Zip Code", type: "text", required: false },
            { name: "workCountry", label: "Country", type: "select", options: [
                "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", 
                "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", 
                "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", 
                "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
                "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", 
                "Fiji", "Finland", "France", 
                "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", 
                "Haiti", "Holy See", "Honduras", "Hungary", 
                "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", 
                "Ivory Coast", "Jamaica", "Japan", "Jordan", 
                "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", 
                "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
                "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", 
                "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", 
                "Oman", 
                "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", 
                "Qatar", 
                "Romania", "Russia", "Rwanda", 
                "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", 
                "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", 
                "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", 
                "Vanuatu", "Venezuela", "Vietnam", 
                "Yemen", 
                "Zambia", "Zimbabwe", "Other"
            ], required: false },
            { name: "experienceYears", label: "How many years of experience do you have in this field?", type: "text", required: true },
            { name: "portfolio", label: "Anything to showcase competence and skill (e.g., a portfolio)?", type: "url", required: false, placeholder: "http://www.example.com/" },
            { name: "isTeacher", label: "Are you a teacher?", type: "radio", options: ["Yes", "Not really"], required: true },
            
            { type: "header", label: "Uploads" },
            { name: "passportPhoto", label: "Upload Passport Photograph", type: "file", accept: "image/*", required: true },
            { name: "cvResume", label: "Upload PDF of Your CV / Resume", type: "file", accept: ".pdf,.doc,.docx", required: true },
            
            { name: "readyToStart", label: "Are you ready to start work as soon as we contact you?", type: "checkbox", required: false },
            { name: "agreement", label: "I have read and agree to the rules and policies on the website of the Yoruba Democratic Republic.", type: "checkbox", required: true }
        ]
    },
    {
        id: 7,
        title: "Creative Media and ICT",
        slug: "creative-media-and-ict",
        description: "Innovating in digital media and information technology.",
        content: [
            {
                type: "heading",
                text: "Creative Media and ICT"
            },
            {
                type: "paragraph",
                text: "This is part of the development plan for the Indigenous Yoruba People (I.Y.P) of Democratic Republic of the Yoruba (D.R.Y), known as the Blueprint."
            },
            {
                type: "paragraph",
                text: "As our mother, Modupeola Onitiri-Abiola (Chief Mrs) said, there shall no longer be unemployment or poverty or lack among the Yoruba, therefore, your registration is important for us to put an end to poverty and lack in Democratic Republic of the Yoruba (D.R.Y)"
            },
            {
                type: "paragraph",
                text: "Yoruba land is filled with milk and honey with lots of intelligent people that the blood sucking Nigeria kept away from the citizens. You were all covered with veils, the riches in Yoruba land alone is enough for the whole Africa."
            },
            {
                type: "paragraph",
                text: "To ensure that there is development and progress in our nation and our economy, the government is imploring everyone to co-operate with us by registering with your correct information."
            },
            {
                type: "list",
                items: [
                    "Lack of experience does not matter at all!",
                    "Inability to speak English language does not matter at all!"
                ]
            },
            {
                type: "paragraph",
                text: "Our goal is to be the most developed nation in the world. We cannot achieve this without your knowledge, wisdom, and understanding; so, please submit your names. Let’s work together to create a better tomorrow for our children and the generations that come after us!"
            },
            {
                type: "paragraph",
                text: "The fields marked (*) are important for us to answer. Make sure everything you send is truthful so you don't miss out on the opportunity."
            },
            {
                type: "heading",
                text: "I live abroad but I'm a Yoruba; can i still apply?"
            },
            {
                type: "paragraph",
                text: "Yes, You can apply. Democratic Republic of the Yoruba (D.R.Y) is for the Indigenous Yoruba People (I.Y.P) irrespective of where you are, you entitled to all the benefits."
            }
        ],
        formFields: [
            { type: "header", label: "Personal Information" },
            { type: "paragraph", text: "Feel free to submit your data. Your information are stored & processed securely." },
            { name: "firstName", label: "First Name", type: "text", required: true },
            { name: "middleName", label: "Middle Name", type: "text", required: false },
            { name: "lastName", label: "Last Name", type: "text", required: true },
            { name: "title", label: "Title", type: "select", options: ["Mr", "Mrs", "Ms", "Dr", "Chief", "Prof", "Rev", "Other"], required: true },
            { name: "email", label: "Email Address", type: "email", required: true },
            { name: "phone", label: "Phone No.", type: "tel", required: true },
            { name: "dob", label: "Date of Birth", type: "date", required: true },
            { name: "nextOfKinName", label: "Next of Kin Name", type: "text", required: true },
            { name: "nextOfKinPhone", label: "Next of Kin Phone No", type: "tel", required: true },
            
            { type: "header", label: "Home Address" },
            { name: "address1", label: "Address Line 1", type: "text", required: true },
            { name: "address2", label: "Address Line 2", type: "text", required: false },
            { name: "city", label: "City", type: "text", required: true },
            { name: "zipCode", label: "Zip Code", type: "text", required: false },
            { name: "country", label: "Country", type: "select", options: [
                "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", 
                "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", 
                "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", 
                "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
                "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", 
                "Fiji", "Finland", "France", 
                "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", 
                "Haiti", "Holy See", "Honduras", "Hungary", 
                "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", 
                "Ivory Coast", "Jamaica", "Japan", "Jordan", 
                "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", 
                "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
                "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", 
                "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", 
                "Oman", 
                "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", 
                "Qatar", 
                "Romania", "Russia", "Rwanda", 
                "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", 
                "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", 
                "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", 
                "Vanuatu", "Venezuela", "Vietnam", 
                "Yemen", 
                "Zambia", "Zimbabwe", "Other"
            ], required: true },
            
            { type: "header", label: "Professional Information" },
            { name: "professionCategory", label: "Select a category that best fit your profession", type: "select", options: ["Creative Works", "Media & Communication", "ICT"], required: true },
            { name: "professionSubCategory", label: "Select a sub-category that match your specialization", type: "select", options: ["Hair Styling", "Make-up Artist", "Art / Painting", "Event Planning", "Home Interior Decor", "Others (specify below)"], required: true },
            
            { name: "employmentStatus", label: "Which one applies to you?", type: "select", options: ["Founder / CEO", "Employee (Staff)", "Contract Staff", "Graduate (Trainee)", "Not employed"], required: true },
            
            { name: "companyEmail", label: "Company’s email address", type: "email", required: true },
            { name: "workAddress1", label: "Address Line 1", type: "text", required: true },
            { name: "workAddress2", label: "Address Line 2", type: "text", required: false },
            { name: "workCity", label: "City", type: "text", required: true },
            { name: "workZipCode", label: "Zip Code", type: "text", required: false },
            { name: "employeeCount", label: "Number of employees", type: "select", options: ["< 10", "10 – 100", "100 – 500", "500 – 1000", "> 1000"], required: true },
            
            { type: "header", label: "Skills and Competence" },
            { name: "skillsCompetence", label: "Skills and Competence", type: "textarea", required: true },
            
            { type: "header", label: "Education and Experience" },
            { name: "educationExperience", label: "Education and Experience", type: "textarea", required: true },
            
            { name: "portfolio", label: "Anything to showcase competence and skill (e.g., a portfolio)?", type: "url", required: false, placeholder: "http://www.example.com/" },
            
            { type: "header", label: "Uploads" },
            { name: "passportPhoto", label: "Upload Passport Photograph", type: "file", accept: "image/*", required: true },
            { name: "cvResume", label: "Upload PDF of Your CV / Resume", type: "file", accept: ".pdf,.doc,.docx", required: true },
            
            { name: "readilyAvailable", label: "Would you be readily available once we make a contact?", type: "checkbox", required: false },
            { name: "agreement", label: "I have read and agree to the rules and policies on the website of the Yoruba Democratic Republic.", type: "checkbox", required: true }
        ]
    },
    {
        id: 8,
        title: "General Data Collection Form",
        slug: "general-data-collection-form",
        description: "Standard data collection form for Indigenous Yoruba People (I.Y.P).",
        content: [
            { type: "heading", text: "General Data Collection Form" },
            {
                type: "heading",
                text: "Important notice and explanation about this form:"
            },
            {
                type: "list",
                items: [
                    "Fill this Form as requested. The spaces with asterisk (*) are compulsory!",
                    "Make sure your email is active. However, if you do not have an email, ensure that your mobile number is correct.",
                    "Make sure that all information provided is correct and true, so that you don’t lose the benefits.",
                    "Upload your photo to your mobile device or computer before proceeding with this form; ensure that it is not more than 1MB. Example of photo… Use “.jpg” or “.png” formats.",
                    "For more detailed information, please see: https://youtu.be/byy2pFGz2-s"
                ]
            },
            {
                type: "paragraph",
                text: "Contact us for inquiries about this General Data Collection Form via the official communication channels on the D.R.Y website."
            }
        ],
        formFields: [
            { type: "header", label: "Personal Information" },
            { type: "paragraph", text: "Fill in your correct details. Your information is stored and processed securely." },
            { name: "title", label: "Title", type: "select", options: ["Mr", "Miss", "Mrs", "Dr", "Prof."], required: true },
            { name: "firstName", label: "First Name", type: "text", required: true },
            { name: "middleName", label: "Middle Name", type: "text", required: false },
            { name: "lastName", label: "Last Name", type: "text", required: true },
            { name: "email", label: "Email Address (If you don't have an email, make sure your mobile number is correctly stated)", type: "email", required: false },
            { name: "phone", label: "Your Phone Number", type: "tel", required: true },
            { name: "motherMaidenName", label: "Your mother's full name before getting married", type: "text", required: true },
            { name: "placeOfBirth", label: "Place of birth", type: "text", required: true },
            { name: "placeOfOrigin", label: "Your Place of Origin", type: "text", required: true },
            { name: "familyCompoundName", label: "Family compound name", type: "text", required: false },
            { name: "cityName", label: "City name", type: "text", required: true },
            { name: "state", label: "State", type: "text", required: true },
            { name: "nextOfKin", label: "Next of Kin", type: "text", required: true },
            { name: "nextOfKinPhone", label: "Phone number of Next of Kin", type: "tel", required: true },

            { type: "header", label: "Residential Address" },
            { name: "residentialAddress", label: "Your Residential Address (House, neighborhood, and city where you currently live)", type: "textarea", required: true },
            { name: "houseStreet", label: "House number and Street", type: "text", required: false },
            { name: "area", label: "Area", type: "text", required: false },
            { name: "city", label: "City", type: "text", required: true },
            { name: "zipCode", label: "Zip Code", type: "text", required: false },
            { name: "country", label: "Country", type: "select", options: [
                "Benin",
                "Democratic Republic of the Yoruba (D.R.Y.)",
                "Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belau","Belgium","Belize","Bermuda","Bhutan","Bolivia","Bonaire, Saint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Cook Islands","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czech Republic","Democratic Republic of the Congo (Kinshasa)","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Ivory Coast","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao S.A.R., China","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Niue","Norfolk Island","North Korea","Northern Mariana Islands","Norway","Oman","Pakistan","Palestinian Territory","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of the Congo (Brazzaville)","Reunion","Romania","Russia","Rwanda","Saint Barthélemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Martin (Dutch part)","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia/Sandwich Islands","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom (UK)","United States (US)","United States (US) Minor Outlying Islands","United States (US) Virgin Islands","Uruguay","Uzbekistan","Vanuatu","Vatican","Venezuela","Vietnam","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"
            ], required: true },

            { type: "header", label: "Family and Status" },
            { name: "gender", label: "Male or Female?", type: "radio", options: ["Male", "Female"], required: true },
            { name: "maritalStatus", label: "Tell us Your Status", type: "radio", options: ["Single", "Married", "Separated", "Divorced", "Widow / Widower"], required: true },
            { name: "childrenNames", label: "Names of all your Children", type: "textarea", required: false },

            { type: "header", label: "Occupation and Education" },
            { name: "occupationEducationInfo", label: "Information about Occupation, Experience and Education", type: "textarea", required: true },
            { name: "occupationCategory", label: "Choose one of these", type: "select", options: [
                "Engineering",
                "Health / Medical / Environment",
                "Earth Sciences",
                "Artisans / Technicians",
                "Creative Media / ICT / Marketing",
                "Finance / Banking / Commerce",
                "Sports",
                "Education",
                "Agriculture",
                "Arts",
                "Business Administration",
                "Legal / Law Enforcement",
                "Category not listed"
            ], required: true },
            { name: "occupationCategoryOther", label: "If category not listed, enter below", type: "text", required: false },
            { name: "schoolLevel", label: "Level of School Education", type: "select", options: [
                "Ph.D",
                "Masters",
                "B.Sc / B.Eng (or Similar)",
                "HND / OND",
                "SSCE / School Leaving Cert",
                "Others"
            ], required: true },
            { name: "skillsKnowledge", label: "Write down the skills and knowledge you have", type: "textarea", required: true },
            { name: "occupationExperience", label: "Various experiences you have in your chosen field of Occupation", type: "textarea", required: true },
            { name: "portfolio", label: "Your business/occupation website OR illustration/exhibition of jobs/work you have done before", type: "url", required: false, placeholder: "http://www.example.com/" },

            { type: "header", label: "Uploads" },
            { name: "passportPhoto", label: "Your photo (Make sure it is no larger than 1MB)", type: "file", accept: "image/*", required: true },
            { name: "cvResume", label: "Your CV / Resume (PDF)", type: "file", accept: ".pdf,.doc,.docx", required: true },

            { name: "readyToResume", label: "Are you ready to resume work as soon as the government of D.R.Y reaches out to you?", type: "checkbox", required: false },
            { name: "agreement", label: "I have read and I agree with the online terms and conditions of the Democratic Republic of the Yoruba", type: "checkbox", required: true }
        ]
    },
    {
        id: 9,
        title: "I.Y.P OF D.R.Y Student Withdrawal Form",
        slug: "iyp-dry-student-withdrawal-form",
        description: "Form for students of I.Y.P of D.R.Y who wish to withdraw.",
        content: [
            { type: "heading", text: "I.Y.P OF D.R.Y Student Withdrawal Form" },
            {
                type: "paragraph",
                text: "Students who wish to withdraw from any programme under the Indigenous Yoruba People (I.Y.P) of the Democratic Republic of the Yoruba should complete this form correctly."
            },
            {
                type: "heading",
                text: "Important Information for Parents / Guardians"
            },
            {
                type: "list",
                items: [
                    "The fields marked with (*) are important for us to answer.",
                    "Enter the names of your children (students) separately. One form, one student.",
                    "After you have submitted this form, you will see this message for confirmation: \"Thank you for taking time to fill this form. Your form has been submitted successfully.\"",
                    "Reload or refresh this page if the “Submit Form” button is not responding."
                ]
            }
        ],
        formFields: [
            { type: "header", label: "Name and Identification of the Student" },
            { name: "firstName", label: "First Name", type: "text", required: true },
            { name: "middleName", label: "Middle Name", type: "text", required: false },
            { name: "surname", label: "Surname", type: "text", required: true },
            { name: "studentResidence", label: "Student's Residence", type: "text", required: true },
            { name: "studentDob", label: "Student's Date of Birth", type: "date", required: true },
            { name: "studentBirthCity", label: "City of Birth of the Student", type: "text", required: true },
            { name: "gender", label: "Gender", type: "radio", options: ["Male", "Female"], required: true },
            { name: "inHigherInstitution", label: "Is the student currently in higher education (Are You In Higher Institution)?", type: "radio", options: ["Yes", "No"], required: true },

            { type: "header", label: "Parents / Guardian Information" },
            { name: "fatherGuardianName", label: "Father or Guardian's Name", type: "text", required: true },
            { name: "fatherGuardianResidence", label: "Father's or Guardian's Residence", type: "text", required: true },
            { name: "fatherGuardianEmail", label: "Email Father Or Guardian", type: "email", required: false },
            { name: "studentEmail", label: "Email Address", type: "email", required: false },
            { name: "fatherGuardianPhone", label: "Father's or Guardian's Phone Number", type: "tel", required: true },
            { name: "fatherGuardianProfession", label: "Father's or Guardian's Profession", type: "text", required: false },
            { name: "fatherGuardianWorkAddress", label: "Address Where Father or Guardian Works", type: "text", required: false },
            { name: "motherName", label: "Mother's Name", type: "text", required: true },
            { name: "motherResidence", label: "Mother's residence", type: "text", required: true },
            { name: "motherEmail", label: "Mother's Email", type: "email", required: false },
            { name: "motherPhone", label: "Mother's Phone Number", type: "tel", required: true },
            { name: "motherProfession", label: "Mother's Profession", type: "text", required: false },
            { name: "motherWorkAddress", label: "Mother's Work Address", type: "text", required: false },

            { type: "header", label: "Declaration" },
            { name: "signature", label: "Your Signature", type: "textarea", required: true },
            { type: "paragraph", text: "I, hereby attest that the information provided above regarding the withdrawal of my ward from the institution is true and accurate to the best of my knowledge. I understand that providing false or misleading information may result in me facing consequences as determined by the government of The Democratic Republic of The Yoruba and relevant authorities." },
            { name: "agreement", label: "I confirm that I have read and understood the above declaration.", type: "checkbox", required: true }
        ]
    },
    {
        id: 10,
        title: "Form & Guidelines for Yoruba Tutorial Centre (YTC)",
        slug: "ytc-form-and-guidelines",
        description: "Application and guidelines form for Yoruba Tutorial Centre (YTC).",
        content: [
            {
                type: "heading",
                text: "Form & Guidelines for Yoruba Tutorial Centre (YTC)"
            },
            {
                type: "paragraph",
                text: "Prospective students or coordinators who wish to participate in the Yoruba Tutorial Centre (YTC) should fill in this form and read the guidelines carefully."
            },
            {
                type: "heading",
                text: "NOTE:"
            },
            {
                type: "list",
                items: [
                    "The fields marked (*) are important for us to answer.",
                    "After you submit this YTC form, you will see this confirmation message: \"Thank you for taking time to fill out this form. Your form has been submitted successfully.\""
                ]
            }
        ],
        formFields: [
            { type: "header", label: "Name and Address of the Founder of Yoruba Tutorial Centre (YTC)" },
            { name: "founderName", label: "Name and Surname", type: "text", required: true },
            { name: "founderAddress", label: "Address of Founder", type: "text", required: true },
            { name: "founderPhone", label: "Phone Number", type: "tel", required: true },
            { name: "founderEmail", label: "Email", type: "email", required: true },
            { name: "ytcName", label: "Name of your Yoruba Tutorial Centre (YTC)", type: "text", required: true },
            { name: "ytcSurroundings", label: "Briefly Describe the Surroundings of This YTC", type: "textarea", required: true },
            { name: "ytcBuildingDescription", label: "Briefly Describe the Building Where This Training Center (YTC) Is Located", type: "textarea", required: true },
            { name: "ytcTrainingRoom", label: "Briefly Explain About the Training Room (YTC) - How Big It Is and How Many Learners It Can Accommodate (Learners Per Room)", type: "textarea", required: true },
            { name: "teachersKnowledge", label: "The Knowledge of Yoruba Language Teachers in Your YTC", type: "textarea", required: true },
            { name: "studentEasePlan", label: "What are the plans and policies for students to ensure that the Yoruba language is easy for them to write, read, and speak?", type: "textarea", required: true },
            { name: "monitoringPlan", label: "What is the Plan and Policy for Monitoring Learners' Progress, Student Assessment, and Testing to Ensure that Yoruba Language Learning is Consistent?", type: "textarea", required: true },
            { name: "paidInterest", label: "Do You Have Any Interest in Getting Paid for This Training Program?", type: "radio", options: ["Yes", "Of course not"], required: true },

            { type: "header", label: "Timetable for Your YTC Study Plan" },
            { name: "studyDayOfWeek", label: "Day of the Week (e.g., Monday)", type: "text", required: true },
            { name: "studyTime", label: "Time (e.g., 10:00 AM - 12:30 PM)", type: "text", required: true },
            { name: "lessonPlans", label: "What Are The Lesson Plans For YTC Students?", type: "textarea", required: true },
            { name: "previousKnowledge", label: "Expected previous knowledge", type: "radio", options: [
                "Beginner Only",
                "Beginner and One Who Has Already Acquired Understanding, Knowledge"
            ], required: true },
            { name: "highStandardPlan", label: "What are the plans with the guarantee for the teaching of the Yoruba language to be accurate and comprehensive for your students (Plan to achieve High Standard & Quality Yoruba Lessons At The YTC)", type: "textarea", required: true },
            { name: "accessibility", label: "Will the YTC Building and Area Be Accessible to Students Without Any Barriers?", type: "radio", options: ["Yes", "Of course not"], required: true },
            { name: "safetyHygiene", label: "What are the safety and hygiene measures to ensure that the YTC building and area are safe for students?", type: "textarea", required: true },
            { name: "stressFreePlan", label: "What Are Your Plans To Meet Stress Free Learning Methods With Highest Standard, Highest Quality, Results?", type: "textarea", required: true },

            { type: "header", label: "Answer These Questions and Submit Proof of Your Identity and YTC Teachers" },
            { name: "landlordTenantProof", label: "Proof of Identity as Landlord or Tenant (YTC Rental Agreement)", type: "file", accept: ".pdf,.doc,.docx,image/*", required: true },
            { name: "yorubaTeachingCertificate", label: "Certificate or Letter of Proof of Proficiency in Teaching Yoruba Language (Teaching Experience)", type: "file", accept: ".pdf,.doc,.docx,image/*", required: true },
            { name: "founderId", label: "YTC Founder(s) Identity Card (ID of Owners)", type: "file", accept: ".pdf,.doc,.docx,image/*", required: true },
            { name: "founderEducationCertificate", label: "Founder's Certificate Demonstrating Knowledge and Understanding or Certificate from Higher Education (Educational Experience)", type: "file", accept: ".pdf,.doc,.docx,image/*", required: true },
            { name: "tutorsIdentityProof", label: "Identity Proof of All Tutors at Your YTC", type: "file", accept: ".pdf,.doc,.docx,image/*", required: true },
            { name: "tutorsReferencesProof", label: "Proof of References of Tutors", type: "file", accept: ".pdf,.doc,.docx,image/*", required: true },
            { name: "ytcBuildingMap", label: "YTC Building and Area Map", type: "file", accept: ".pdf,.doc,.docx,image/*", required: true },

            { type: "header", label: "Declaration" },
            { name: "signature", label: "Your Signature", type: "textarea", required: true },
            { name: "date", label: "Date", type: "date", required: true },
            { type: "paragraph", text: "I, hereby attest that the information provided above is true and accurate to the best of my knowledge. I understand that providing false or misleading information may result in me facing consequences as determined by the government of The Democratic Republic of The Yoruba and relevant authorities." },
            { name: "agreement", label: "I have read and understood the guidelines for the Yoruba Tutorial Centre (YTC).", type: "checkbox", required: true }
        ]
    },
    {
        id: 11,
        title: "Contractors",
        slug: "contractors-form",
        description: "Registration form for contractors working with the Democratic Republic of the Yoruba.",
        content: [
            {
                type: "heading",
                text: "Contractors"
            },
            {
                type: "heading",
                text: "Important Note"
            },
            {
                type: "paragraph",
                text: "This is part of the development plan for the Indigenous Yoruba People (I.Y.P) of Democratic Republic of the Yoruba (D.R.Y), known as the Blueprint."
            },
            {
                type: "paragraph",
                text: "As our mother, Modupeola Onitiri-Abiola (Chief Mrs) said, there shall no longer be unemployment or poverty or lack among the Yoruba, therefore, your registration is important for us to put an end to poverty and lack in Democratic Republic of the Yoruba (D.R.Y)."
            },
            {
                type: "paragraph",
                text: "Yoruba land is filled with milk and honey with lots of intelligent people that the blood sucking Nigeria kept away from the citizens. You were all covered with veils, the riches in Yoruba land alone is enough for the whole Africa."
            },
            {
                type: "paragraph",
                text: "To ensure that there is development and progress in our nation and our economy, the government is imploring everyone to co-operate with us by registering with your correct information."
            },
            {
                type: "list",
                items: [
                    "Lack of experience does not matter at all!",
                    "Inability to speak English language does not matter at all!"
                ]
            },
            {
                type: "paragraph",
                text: "Our goal is to be the most developed nation in the world. We cannot achieve this without your knowledge, wisdom, and understanding; so, please submit your names. Let’s work together to create a better tomorrow for our children and the generations that come after us!"
            },
            {
                type: "heading",
                text: "Important Note"
            },
            {
                type: "paragraph",
                text: "The fields marked (*) are important for us to answer. Make sure everything you send is truthful so you don't miss out on the opportunity."
            },
            {
                type: "heading",
                text: "I live abroad but I'm a Yoruba; can i still apply?"
            },
            {
                type: "paragraph",
                text: "Yes, You can apply. Democratic Republic of the Yoruba (D.R.Y) is for the Indigenous Yoruba People (I.Y.P) irrespective of where you are, you are entitled to all the benefits."
            }
        ],
        formFields: [
            { type: "header", label: "Personal informations" },
            { type: "paragraph", text: "Feel free to submit your data. Your information are stored & processed securely." },
            { name: "firstName", label: "First Name", type: "text", required: true },
            { name: "middleName", label: "Middle Name", type: "text", required: false },
            { name: "lastName", label: "Last Name", type: "text", required: true },
            { name: "title", label: "Title", type: "select", options: ["Mr", "Mrs", "Miss", "Ms.", "Dr.", "Prof."], required: true },
            { name: "email", label: "Email address", type: "email", required: true },
            { name: "phone", label: "Phone No.", type: "tel", required: true },
            { name: "dob", label: "Date of Birth", type: "date", required: true },
            { name: "nextOfKinName", label: "Next of Kin Name", type: "text", required: true },
            { name: "nextOfKinPhone", label: "Next of Kin Phone No", type: "tel", required: true },

            { type: "header", label: "Home Address" },
            { name: "homeAddressLine1", label: "Address Line 1", type: "text", required: true },
            { name: "homeAddressLine2", label: "Address Line 2", type: "text", required: false },
            { name: "homeCity", label: "City", type: "text", required: true },
            { name: "homeZipCode", label: "Zip Code", type: "text", required: true },
            { name: "homeCountry", label: "Country", type: "select", options: ["Benin"], required: true },

            { type: "header", label: "Information About Your Professional Services / Company" },
            { name: "companyName", label: "Company Name", type: "text", required: true },
            { name: "companyAddress", label: "Provide Your Company Address", type: "text", required: true },
            { name: "officeAddress", label: "Office Address", type: "text", required: true },
            { name: "officeCity", label: "City", type: "text", required: true },
            { name: "officeCountry", label: "Country", type: "select", options: ["Benin"], required: true },
            { name: "operationLicenseNumber", label: "Operation License Number", type: "text", required: true },
            { name: "licenseExpirationDate", label: "License Expiration Date", type: "date", required: true },
            { name: "insuranceAgency", label: "Company’s Insurance Agency", type: "text", required: true },
            { name: "insuranceOfficeAddress", label: "Insurance Office Address", type: "text", required: true },
            { name: "insuranceOfficeCity", label: "City", type: "text", required: true },
            { name: "insuranceOfficeCountry", label: "Country", type: "select", options: ["Benin"], required: true },
            { name: "companyWebsite", label: "Company’s Website or Link to Portfolio", type: "url", required: false, placeholder: "https://www.example.com/" },

            { type: "header", label: "Contract Details" },
            { name: "contractType", label: "Type of Contract", type: "select", options: ["Fixed-price Contracts"], required: true },
            { name: "contractAreaSpecialization", label: "Contract Area of Specialization?", type: "checkbox-group", options: [
                "Civil Engineering",
                "Electrical Engineering",
                "Mechanical Engineering",
                "Computer Engineering",
                "Aluminium Engineering",
                "Building Engineering",
                "Fabric Production",
                "Motor Vehicle Tyres Production",
                "Scaffolding",
                "Event Planning",
                "Media, Marketing and Advertising",
                "Software Development",
                "House Cleaning",
                "Fashion Designing",
                "Mining Engineering",
                "Others (specify below)"
            ], required: true },
            { name: "companyBrief", label: "Tell us about your company briefly", type: "textarea", required: true },
            { name: "skillsCompetence", label: "Skills and Competence", type: "textarea", required: true },
            { name: "educationExperience", label: "Education and Experience", type: "textarea", required: true },

            { type: "header", label: "Uploads" },
            { name: "passportPhoto", label: "Upload Passport Photograph", type: "file", accept: "image/*", required: true },
            { name: "cvResume", label: "Upload PDF of Your CV / Resume", type: "file", accept: ".pdf,.doc,.docx", required: true },

            { name: "readyAvailable", label: "Would you be readily available once we make a contact?", type: "checkbox", required: true },
            { name: "agreement", label: "I have read and agree to the Terms and Conditions and Privacy Policy", type: "checkbox", required: true }
        ]
    },
    {
        id: 12,
        title: "Land to Indigenous Yoruba People (I.Y.P)",
        slug: "land-to-indigenous-yoruba-people",
        description: "Form for Indigenous Yoruba People (I.Y.P) applying for land allocation.",
        content: [
            { type: "heading", text: "Land to Indigenous Yoruba People (I.Y.P)" },
            { type: "paragraph", text: "Indigenous Yoruba People (I.Y.P) who wish to apply for land allocation under the Blueprint should complete this form honestly." }
        ],
        formFields: [
            { type: "header", label: "Personal Information" },
            { name: "firstName", label: "First name", type: "text", required: true },
            { name: "middleName", label: "Middle Name", type: "text", required: false },
            { name: "surname", label: "Surname", type: "text", required: true },
            { name: "age", label: "Age", type: "number", required: true },
            { name: "gender", label: "Gender", type: "radio", options: ["Male", "Female"], required: true },
            { name: "placeOfBirth", label: "Place of Birth", type: "text", required: true },
            { name: "homeAddress", label: "Home Address", type: "text", required: true },
            { name: "stateOf", label: "State Of", type: "text", required: true },
            { name: "email", label: "Email Address", type: "email", required: true },

            { type: "header", label: "Eligibility" },
            { name: "age21to40", label: "Are you between age 21 to 40?", type: "radio", options: ["Yes", "No"], required: true },
            { name: "parentsIypGenerations", label: "Do you have 3 or 4 generation of your parents as Indigenous Yoruba People (IYP)?", type: "radio", options: ["Yes", "No"], required: true },

            { type: "header", label: "Declaration" },
            { name: "declarationText", label: "I ...................................................... hereby agree that all the information given above is the truth.", type: "text", required: true },
            { name: "date", label: "Date", type: "date", required: true },
            { name: "signature", label: "Your Signature", type: "textarea", required: true }
        ]
    }
];
