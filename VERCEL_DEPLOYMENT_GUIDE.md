# Deploying VotizenKE from GitHub Organization to Vercel

## Issue: Can't See Organization Repo in Vercel

When your repository is in a GitHub organization (not your personal account), Vercel needs explicit permission to access it.

---

## Solution: Grant Vercel Access to Your Organization

### Method 1: Through Vercel Dashboard (Easiest)

#### Step 1: Go to Vercel
1. Visit [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New..." → "Project"

#### Step 2: Configure GitHub Access
1. You'll see "Import Git Repository"
2. Click "Adjust GitHub App Permissions"
   - **OR** look for a link that says "Configure GitHub App"
3. This will take you to GitHub settings

#### Step 3: Grant Organization Access (On GitHub)
1. You'll be on GitHub at: `github.com/settings/installations`
2. Find "Vercel" in the list of installed apps
3. Click "Configure" next to Vercel
4. Scroll down to "Repository access"
5. You'll see two options:
   - ⚪ All repositories
   - ⚪ Only select repositories
   
6. **Choose ONE:**

   **Option A: All Repositories (Recommended)**
   - Select "All repositories"
   - This gives Vercel access to all current and future repos

   **Option B: Specific Repository Only**
   - Select "Only select repositories"
   - Click "Select repositories" dropdown
   - Find and select: `Sovereignty-of-the-people/votizenke`

7. Click "Save"

#### Step 4: Back to Vercel
1. Return to Vercel dashboard
2. Refresh the page
3. Click "Import Git Repository" again
4. You should now see your organization: **Sovereignty-of-the-people**
5. Find **votizenke** in the list
6. Click "Import"

---

### Method 2: Direct GitHub App Configuration

#### Step 1: Go Directly to GitHub
1. Visit: [github.com/apps/vercel](https://github.com/apps/vercel)
2. Or go to: [github.com/settings/installations](https://github.com/settings/installations)

#### Step 2: Configure Vercel App
1. Find "Vercel" in your installed apps
2. Click "Configure"
3. **IMPORTANT:** Switch from your personal account to your organization
   - Look for a dropdown at the top that shows account selection
   - Select: **Sovereignty-of-the-people**

#### Step 3: Grant Repository Access
1. Under "Repository access" section:
   - Select "All repositories" (easiest)
   - OR select "Only select repositories" and choose `votizenke`
2. Click "Save"

#### Step 4: Return to Vercel
1. Go back to [vercel.com/new](https://vercel.com/new)
2. Your organization repo should now appear!

---

## Method 3: Using Vercel CLI

If the dashboard doesn't work, use the CLI:

```bash
# Make sure you're in the project directory
cd /home/gondamol/gondamol/DemocracyOS/votizenke

# Install Vercel CLI (if not installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? [Select your account or organization]
# - Link to existing project? No
# - Project name? votizenke
# - Directory? ./ (current directory)
# - Override settings? No

# The CLI will deploy directly without needing GitHub access!
```

---

## Troubleshooting

### Still Can't See the Repo?

#### Check 1: Organization Membership
- Make sure you're an owner/admin of the GitHub organization
- Only owners can configure app permissions

#### Check 2: Vercel App Installation
1. Go to: `github.com/settings/installations`
2. Verify "Vercel" is installed
3. If not, install it:
   - Visit [github.com/apps/vercel](https://github.com/apps/vercel)
   - Click "Install"
   - Select your organization
   - Grant access

#### Check 3: Organization Settings
1. Go to: `github.com/organizations/Sovereignty-of-the-people/settings/oauth_application_policy`
2. Make sure Vercel is approved
3. If needed, approve it

#### Check 4: Refresh Vercel
- After changing GitHub settings, wait 1-2 minutes
- Refresh Vercel dashboard
- Try logging out and back into Vercel

---

## After Vercel Can See Your Repo

### Step 1: Import Project
1. In Vercel, click "Import" next to `votizenke`
2. Vercel will auto-detect Next.js ✅

### Step 2: Configure Environment Variables
Before deploying, add these in Vercel:

```env
# Required
NEXTAUTH_URL=https://your-app.vercel.app
NEXTAUTH_SECRET=your-random-secret-here

# Database (use MongoDB Atlas or other)
DATABASE_URL=your-database-connection-string

# Optional: Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

### Step 3: Deploy!
1. Click "Deploy"
2. Wait 2-3 minutes
3. Your app will be live at: `https://votizenke.vercel.app`

---

## Database Setup for Production

### Option 1: MongoDB Atlas (Recommended)

1. **Create Account:**
   - Visit [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up free

2. **Create Cluster:**
   - Click "Build a Database"
   - Choose FREE tier (M0)
   - Select region close to your users
   - Click "Create Cluster"

3. **Create Database User:**
   - Go to "Database Access"
   - Click "Add New Database User"
   - Username: `votizenke`
   - Password: (generate strong password)
   - User Privileges: "Read and write to any database"
   - Click "Add User"

4. **Whitelist IP:**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for Vercel)
   - Or add: `0.0.0.0/0`
   - Click "Confirm"

5. **Get Connection String:**
   - Go to "Database" → "Connect"
   - Choose "Connect your application"
   - Copy connection string:
   ```
   mongodb+srv://votizenke:<password>@cluster0.xxxxx.mongodb.net/votizenke?retryWrites=true&w=majority
   ```
   - Replace `<password>` with your user's password

6. **Update Prisma Schema:**
   ```prisma
   datasource db {
     provider = "mongodb"
     url      = env("DATABASE_URL")
   }
   ```

7. **Set in Vercel:**
   - Environment Variables → DATABASE_URL → (paste connection string)

### Option 2: Vercel Postgres (Simpler)

1. In Vercel Dashboard → Your Project
2. Click "Storage" tab
3. Click "Create Database" → "Postgres"
4. Follow prompts
5. DATABASE_URL auto-configured ✅
6. Update Prisma schema to use PostgreSQL

---

## Post-Deployment Checklist

After deployment completes:

### Test Your Live App:
- [ ] Visit your Vercel URL
- [ ] Click "Sign Up"
- [ ] Create a test account
- [ ] Verify dashboard shows your name
- [ ] Test sign out
- [ ] Test sign in
- [ ] Check all navigation links
- [ ] Test on mobile device

### Monitor:
- [ ] Check Vercel deployment logs
- [ ] Verify no errors
- [ ] Test database connections
- [ ] Check environment variables

---

## Custom Domain (Optional)

### Add Your Own Domain:

1. In Vercel → Your Project → "Settings" → "Domains"
2. Enter your domain: `votizenke.com`
3. Follow DNS instructions
4. Update `NEXTAUTH_URL` to your domain
5. Redeploy

---

## Quick Reference

### GitHub Organization Access:
```
github.com/settings/installations
→ Find "Vercel"
→ Configure
→ Select Organization: Sovereignty-of-the-people
→ Grant Repository Access
→ Save
```

### Vercel Deploy:
```
vercel.com → New Project → Import Git Repository
→ Select Organization → votizenke → Import
→ Add Environment Variables → Deploy
```

### CLI Deploy:
```bash
vercel login
vercel
```

---

## Summary

**The Issue:** GitHub organization repos require explicit permission

**The Solution:** 
1. Configure Vercel GitHub App
2. Grant access to your organization
3. Select the repository
4. Deploy!

**Estimated Time:** 5 minutes

---

**Your VotizenKE platform will be live and ready to empower Kenyan youth! 🇰🇪🚀**

