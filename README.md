# Dory Clone 🐟✨

Welcome to the **Dory Clone** project! 🎉 This repository replicates key functionalities of Dory 🐠, providing a modern 🖥️, responsive 📱, and feature-rich ✨ application.

## ✨ Key Features 🌟

- 🔒 **Authentication**: Seamlessly integrated with [Kinde](https://kinde.com) for secure 🔐 user authentication.
- 👥 **User Roles**: Manage user roles 🧑‍💼👩‍💼 for customized access and permissions.
- 📈 **Database**: Powered by [Supabase](https://supabase.com) for a reliable 📊 and scalable backend.
- 🌱 **Database Seeding**: Preload your database 🌾 with essential data 📂 for rapid development 🚀.
- 🛠️ **ORM**: Utilizes [Prisma](https://www.prisma.io) for intuitive 🧩 and efficient 🛡️ database management.
- 🎨 **Modern & Responsive Design**: Built with [ShadCN](https://shadcn.dev) for a clean 🧼 and adaptive 🎭 user interface.
- 🔄 **Server Actions**: Leverages [next-safe-action](https://github.com/nextauthjs/next-safe-action) for secure 🔐 server-side operations.
- 📝 **Forms**: Easily handle forms 🖊️ using [react-hook-form](https://react-hook-form.com).
- ✔️ **Data Validation**: Ensures data integrity 🛡️ with [zod](https://zod.dev).
- ⚡ **Realtime Updates**: Stay in sync 🔄 with [Supabase Realtime](https://supabase.com/docs/guides/realtime).
- 🔔 **Notification System**: Keep users informed 🔊 with instant 📩 notifications.
- 👍 **Upvoting System**: Implement upvoting 👍🏻 for user-generated content 📝.
- 🚀 **Optimistic Updates**: Enhance user experience 😊 with faster ⚡ feedback.
- 🔃 **Infinite Scrolling**: Load data seamlessly ♾️ with infinite scrolling functionality.

## 🚀 Getting Started 🏁

Follow these steps to set up and run the project locally 🛠️:

1. **Clone the Repository** 🗂️
   ```bash
   git clone https://github.com/BernieTv/Feedback-App.git
   cd Feedback-App
   ```

2. **Install Dependencies** 📦
   ```bash
   yarn install
   ```

3. **Set Up Environment Variables** 🔧
   Create a `.env` file in the root directory 🏡 and configure the required variables:
   ```env
   NEXT_PUBLIC_BASE_URL=your_base_url
   KINDE_POST_LOGIN_REDIRECT_URL=your_post_login_redirect_url
   KINDE_POST_LOGOUT_REDIRECT_URL=your_post_logout_redirect_url
   KINDE_SITE_URL=your_kinde_site_url
   KINDE_ISSUER_URL=your_kinde_issuer_url
   KINDE_CLIENT_SECRET=your_kinde_client_secret
   KINDE_CLIENT_ID=your_kinde_client_id
   DATABASE_URL=your_database_url
   DIRECT_URL=your_direct_url
   ```

4. **Run Database Migrations and Seeding** 🌱
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

5. **Start the Development Server** 🌐
   ```bash
   yarn run dev
   ```

6. **Access the Application** 🔗
   Open [http://localhost:3000](http://localhost:3000) in your browser 🌍.

## 🤝 Contributions 🙌

Contributions are welcome! 🎁 Please feel free to submit issues 🐛 or pull requests 🔧 to improve this project.

## 📄 License 📝

This project is licensed under the MIT License 📜. See the [LICENSE](./LICENSE) file for more details.
