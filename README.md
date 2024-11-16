# WhatsApp Template Message Preview System

A simple application for managing and previewing WhatsApp message templates. This project uses ReactJS for the frontend and Node.js for the backend, with TailwindCSS for styling and supports dynamic placeholders for generating previews.

## Features

- View predefined WhatsApp message templates.
- Replace placeholders ({{variable}}) in templates with dynamic values to generate previews.
- Multiline template support for better readability.
- Responsive UI using TailwindCSS.

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn

### Steps

#### Frontend

1. Clone the Repository:

```bash
git clone https://github.com/AbhishekSadhwani/Whatsapp-Template-Message-Preview
cd Whatsapp-Template-Message-Preview
```

2. Install Dependencies:

```bash
npm install
```

3. Start the Application:

```bash
npm start
```

- The application will run on http://localhost:3000.

#### Backend

1. Clone the Repository:

```bash
git clone https://github.com/AbhishekSadhwani/Whatsapp-template-Message-preview-Backend
cd Whatsapp-template-Message-preview-Backend
```

2. Install Dependencies:

```bash
npm install
```

3. Start the Application:

```bash
node server.js
```

- The application will run on http://localhost:5000.

## Approach Explanation

### 1. Frontend:

- ReactJS is used to create a clean and responsive UI.
- TailwindCSS simplifies styling with utility classes.
- Components include:
  - **TemplateSelector**: Allows users to select a template.
  - **VariableInput**: Captures user input for placeholders dynamically.
  - **PreviewDisplay**: Displays the generated preview with support for multiline rendering.

### 2. Backend:

- Node.js with an in-memory database (templates.js) simulates storing templates.
- API endpoints handle retrieving templates and generating previews by replacing placeholders with user-provided variables.
- Error handling ensures robust operation:
  - Missing templateId or variables triggers appropriate error messages.
  - Nonexistent templates or incomplete variables return descriptive errors.

### 3. Template Parsing Logic:

- Placeholders are identified using regex: /{{(.*?)}}/g.
- Placeholders are replaced dynamically with values provided in the request body.
- Supports multiline templates with \n preserved in the response.

## API Documentation

### 1. Get All Templates

#### Endpoint:

```bash
GET /api/templates
```

#### Description:

Retrieve all available WhatsApp templates.

#### Response

```json
[
  {
    "id": 1,
    "name": "Order Confirmation",
    "template": "Hello, {{Name}}! Your order #{{OrderNumber}} is confirmed for Rs.{{Amount}}. We'll deliver it to {{DeliveryAddress}}."
  }
]
```

### 2. Generate Template Preview

#### Endpoint:

```bash
POST /api/templates/preview
```

#### Description:

Generate a preview of the template with the provided dynamic variables.

#### Request Body:

```json
{
  "templateId": 1,
  "variables": {
    "name": "Abhi",
    "orderNumber": "12345",
    "amount": "1500",
    "deliveryAddress": "Jaipur, Rajasthan"
  }
}
```

#### Response

```json
{
  "preview": "Hello, Abhi! Your order #12345 is confirmed for Rs.1500.We'll deliver it to Jaipur, Rajasthan."
}
```

#### Error Responses

- 400: Missing or invalid input (e.g., missing variables or templateId).

```json
{ "error": "Template ID is required" }
```

- 404: Template not found.

```json
{ "error": "Template not found" }
```

## Future Improvements

### Backend

- Authentication: Add user authentication to manage personal templates.
- Database Integration: Use a database (e.g., MongoDB, PostgreSQL) for persistent storage of templates.

### Frontend

- Error Handling UI: Display errors more elegantly with modals or toast notifications.
- Save Templates: Enable users to create, edit, and save their own templates.

## Deployment

- Frontend: [https://message-preview-template.netlify.app/](https://message-preview-template.netlify.app/)
- Backend deployed on Render.
