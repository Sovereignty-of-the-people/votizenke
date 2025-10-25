# VotizenKE - Civic Engagement Platform for Kenyan Youth

Empowering Kenyan youth to register, learn, and mobilize for democracy through education, connection, and civic action.

## 🌟 Features

### Core MVP Features
- **Landing Page**: Inspiring call-to-action with Kenya-themed design
- **User Authentication**: Email and Google login support
- **User Dashboard**: Personalized civic feed with invite functionality
- **Discussion Forum**: Civic discussions with posts and comments
- **Learning Hub**: Civic education lessons and progress tracking
- **Network Visualization**: Visual map of civic influence and referrals
- **Admin Dashboard**: Basic analytics and user management

### 🎨 Design
- Mobile-first responsive layout
- Kenya flag color palette (black, red, green, white)
- Modern animations with Framer Motion
- Clean, youthful typography with Inter font

## 🛠 Tech Stack

### Frontend
- **Next.js 16** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **shadcn/ui** components
- **Lucide React** icons
- **Recharts** for data visualization

### Backend & Database
- **Next.js API Routes** for backend
- **Prisma** ORM with MongoDB
- **NextAuth.js** for authentication

### Deployment
- **Vercel** (recommended)
- **MongoDB Atlas** for production database

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB (local or MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd votizenke
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Configure your `.env.local`:
   ```env
   # NextAuth Configuration
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   
   # Google OAuth
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   
   # Database
   DATABASE_URL="mongodb://localhost:27017/votizenke"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   ├── users/         # User management
│   │   ├── posts/         # Discussion posts
│   │   ├── lessons/       # Learning content
│   │   └── referrals/     # Referral system
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # User dashboard
│   ├── discuss/           # Discussion forum
│   ├── learn/             # Learning hub
│   ├── impact/            # Network visualization
│   ├── admin/             # Admin dashboard
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   ├── auth/              # Authentication components
│   └── network-visualization.tsx
├── lib/
│   ├── utils.ts           # Utility functions
│   └── prisma.ts          # Prisma client
└── prisma/
    └── schema.prisma      # Database schema
```

## 🎯 Key Features Explained

### 1. User Authentication
- Email/password and Google OAuth
- Session management with NextAuth.js
- Protected routes and middleware

### 2. Dashboard & Network
- Personal civic impact tracking
- WhatsApp integration for friend invitations
- Real-time network visualization
- Progress metrics and achievements

### 3. Discussion Forum
- Categorized civic discussions
- Like, comment, and share functionality
- Trending topics and search
- Markdown support for rich content

### 4. Learning Hub
- Structured civic education lessons
- Progress tracking and achievements
- Difficulty levels and categories
- Interactive quizzes and assessments

### 5. Admin Dashboard
- User analytics and engagement metrics
- Content moderation tools
- Referral tracking and insights
- Export functionality for data analysis

## 🔧 Configuration

### Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`

### MongoDB Setup
1. **Local**: Install MongoDB and update `DATABASE_URL`
2. **Cloud**: Use MongoDB Atlas and update connection string

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on push to main branch

### Environment Variables for Production
```env
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=production-secret-key
GOOGLE_CLIENT_ID=production-google-client-id
GOOGLE_CLIENT_SECRET=production-google-client-secret
DATABASE_URL=mongodb+srv://user:pass@cluster.mongodb.net/votizenke
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Kenyan youth for inspiring this civic engagement platform
- Next.js team for the excellent framework
- Prisma for the modern database toolkit
- The open-source community for the amazing tools and libraries

## 📞 Contact

For questions, suggestions, or collaborations:
- Email: contact@votizenke.ke
- Twitter: @VotizenKE
- GitHub: Issues tab for bug reports and feature requests

---

**VotizenKE - Empowering Kenyan Youth for Democratic Change** 🇰🇪
