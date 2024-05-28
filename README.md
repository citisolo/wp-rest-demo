This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
```

## Installation and Setup Instructions

### 1. Install Local by WP

1. Download and install Local by WP from [the official website](https://localwp.com/).
2. Follow the installation instructions for your operating system.

### 2. Create a Website

1. Open Local by WP.
2. Click on "Create a new site".
3. Name the site `demo`.
4. Set the admin username to `admin`.
5. Complete the setup process to create the website.

### 3. Install the ACF Plugin

1. Log in to the WordPress admin dashboard for your `demo` site.
2. Navigate to **Plugins** > **Add New**.
3. Search for **Advanced Custom Fields (ACF)**.
4. Install and activate the ACF plugin.

### 4. Create Custom Post Types and Fields

#### Create a Custom Post Type (Todos)

1. In the WordPress admin dashboard, go to **Custom Post Types** > **Add New**.
2. Name the post type `Todos`.
3. Save the new custom post type.

#### Create Custom Field Types

1. Navigate to **Custom Fields** > **Add New**.
2. Create a new field group for `Todos`.

##### Add Fields to the Field Group

1. Add a **Text** field.
2. Add a **True/False** field.
3. Link these fields to the `Todos` post type.
4. Enable the REST API for these fields.

### 5. Create an App Password

1. In the WordPress admin dashboard, go to **Users**.
2. Select the user (e.g., `admin`) for whom you want to create an app password.
3. Scroll down to the **Application Passwords** section.
4. Create a new app password and copy it for later use.

### 6. Update Frontend

1. Clone the frontend repository to your local environment.
2. Add the copied app password to the `wpClient` configuration in the frontend code.

### Final Steps

1. Ensure all configurations are correct.
2. Test the setup to confirm everything is working as expected.

You have successfully set up the environment with the Local by WP, ACF plugin, custom post types, custom fields, and the frontend integration.

