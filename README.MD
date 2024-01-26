# Hospital API🏥

## Project Setup

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up your MongoDB database and update `config.js` with the appropriate URI.
4. Run the application using `npm start`.
5. API will be available at `http://localhost:3200`.

## API Endpoints

- `/doctors/register` - Register a doctor
- `/doctors/login` - Login and get JWT
- `/patients/register` - Register a patient
- `/patients/:id/create_report` - Create a report for a patient
- `/patients/:id/all_reports` - Get all reports of a patient
- `/reports/:status` - Get all reports filtered by status
