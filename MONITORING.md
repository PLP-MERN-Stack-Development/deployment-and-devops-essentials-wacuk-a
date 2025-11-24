# MERN Stack Monitoring

## Health Endpoints
- **Backend Health**: `GET https://mern-backend-wacuk-a.onrender.com/health`
- **Frontend**: `GET https://deployment-and-devops-essentials-wa-khaki.vercel.app/`

## Monitoring Script
Run the monitoring script to check application health:
```bash
node scripts/monitor.js
Health Check Response
The health endpoint returns:

json
{
  "status": "OK",
  "database": "connected",
  "timestamp": "2025-11-24T14:45:12.397Z",
  "environment": "production"
}
GitHub Actions CI/CD
Automated testing on push to main/develop branches

Backend and frontend testing

Deployment stages ready

Next Steps for Monitoring
Set up uptime monitoring service (UptimeRobot, Pingdom)

Configure error tracking (Sentry)

Set up performance monitoring

Create alerting system
