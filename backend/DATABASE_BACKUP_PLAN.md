# Database Backup Plan

## MongoDB Atlas Backups
- Automated daily backups enabled
- Point-in-time recovery available
- Backup retention: 30 days

## Backup Procedures
1. **Automated**: MongoDB Atlas handles daily backups
2. **Manual**: Can trigger on-demand backups via Atlas UI
3. **Export**: Use mongodump for manual exports

## Recovery Procedures
1. Use MongoDB Atlas point-in-time recovery
2. Restore from snapshot via Atlas UI
3. Import from mongodump files

## Monitoring
- Monitor backup success via Atlas alerts
- Set up notifications for backup failures
