# Deployment & Maintenance Procedures

## Deployment Process
1. **Code Changes**: Push to main branch
2. **CI/CD**: GitHub Actions runs tests and linting
3. **Auto-deploy**: Render (backend) and Vercel (frontend) deploy automatically
4. **Verification**: Health checks and monitoring

## Rollback Procedures
### Backend (Render)
1. Go to Render dashboard
2. Navigate to service
3. Click "Manual Deploy"
4. Select previous commit

### Frontend (Vercel)
1. Go to Vercel dashboard
2. Select project
3. Click "Promote" on previous deployment

## Maintenance Schedule
- **Weekly**: Review logs and performance
- **Monthly**: Update dependencies
- **Quarterly**: Security audit
